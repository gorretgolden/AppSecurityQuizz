let currentTrack = '';
let currentQuestion = 0;
let userAnswers = [];
let questions = [];
let timerInterval;
let timeRemaining = 3600;
let startTime;
let warningCount = 0;
let quizSubmitted = false;
let quizStartTime;
let currentStudent = null;
let questionStartTime = 0;
let questionTimes = [];
let timeUsedInterval;
const ADMIN_PASSWORD = 'refactory2024';
const ADMIN_EMAIL = 'gorretgolden@refactory.academy';

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function shuffleQuestions(qlist) {
    shuffleArray(qlist);
    qlist.forEach(q => {
        const correctAnswer = q.options[q.correct];
        shuffleArray(q.options);
        q.correct = q.options.indexOf(correctAnswer);
    });
    return qlist;
}

function init() {
    loadFormDraft();
    
    const params = new URLSearchParams(window.location.search);
    const viewId = params.get('view');
    const shareId = params.get('share');
    
    if (viewId) {
        showSharedResult(viewId);
    } else if (shareId) {
        showSharedResult(shareId);
    } else if (window.location.hash === '#golden') {
        showAdminLogin();
    }
}

function showAdminLogin() {
    const modal = document.getElementById('admin-login-modal');
    if (modal) {
        modal.style.display = 'flex';
        modal.style.zIndex = '9999';
    }
}

function downloadMyResult() {
    db.ref('quizResults').once('value', function(snapshot) {
        const results = [];
        snapshot.forEach(function(child) {
            results.push(child.val());
        });
        if (results.length === 0) {
            showCustomAlert('No Results', 'No quiz results found. You may need to retake the quiz.', 'info', null);
            return;
        }
        let csv = 'Name,Email,Track,Score,Total,Percentage,Time Taken,Warnings,Date\n';
        results.forEach(result => {
            const date = new Date(result.date).toLocaleString();
            csv += `"${result.fullname}","${result.email}","${result.track}",${result.score},${result.total},${result.percentage}%,"${result.timeTaken}",${result.warnings || 0},"${date}"\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'my_quiz_result.csv';
        link.click();
        showCustomAlert('Downloaded', 'Your result has been downloaded. Send the file to your instructor.', 'success', null);
    });
}

function saveFormDraft() {
    const draft = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        track: document.getElementById('track').value
    };
    localStorage.setItem('quizDraft', JSON.stringify(draft));
}

function loadFormDraft() {
    const draft = JSON.parse(localStorage.getItem('quizDraft') || 'null');
    if (draft) {
        const fn = document.getElementById('fullname');
        const em = document.getElementById('email');
        const tr = document.getElementById('track');
        if (fn) fn.value = draft.fullname || '';
        if (em) em.value = draft.email || '';
        if (tr) tr.value = draft.track || '';
    }
}

function clearFormDraft() {
    localStorage.removeItem('quizDraft');
}

const _fn = document.getElementById('fullname');
const _em = document.getElementById('email');
const _tr = document.getElementById('track');
const _regForm = document.getElementById('registration-form');
if (_fn) _fn.addEventListener('input', saveFormDraft);
if (_em) _em.addEventListener('input', saveFormDraft);
if (_tr) _tr.addEventListener('change', saveFormDraft);

if (_regForm) _regForm.addEventListener('submit', function(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const track = document.getElementById('track').value;
    const emailError = document.getElementById('email-error');
    
    emailError.textContent = '';
    
    if (!fullname || !email || !track) {
        showCustomAlert('Missing Fields', 'Please fill in all fields.', 'warning', null);
        return;
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:refactory\.academy|student\.refactory\.academy)(\.[a-z]+)?$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Only @refactory.academy emails are accepted';
        return;
    }
    
    const submitBtn = document.querySelector('#registration-form button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Checking...';
    
    db.ref('quizResults').orderByChild('email').equalTo(email).once('value', function(snapshot) {
        let duplicate = false;
        snapshot.forEach(function(child) {
            const r = child.val();
            if (r.fullname && r.fullname.toLowerCase() === fullname.toLowerCase() && r.track === track) {
                duplicate = true;
            }
        });
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-play"></i> Register & Start Quiz';
        
        if (duplicate) {
            showCustomAlert('Duplicate Detected', 'This student with this name and email has already taken this quiz in this track. Each student can only take the quiz once.', 'danger', null);
            return;
        }
        
        currentTrack = track;
        const rawQuestions = pythonQuestions;
        questions = shuffleQuestions(JSON.parse(JSON.stringify(rawQuestions)));
        userAnswers = new Array(questions.length).fill(null);
        currentQuestion = 0;
        warningCount = 0;
        quizSubmitted = false;
        questionTimes = [];
        clearFormDraft();
        
        currentStudent = { fullname, email, track };
        
        document.getElementById('student-name').textContent = fullname;
        const badge = document.getElementById('track-badge');
        badge.textContent = 'Python Track';
        badge.className = 'track-label py';
        
        const watermarkEl = document.getElementById('watermark-overlay');
        const watermarkText = (fullname + ' • ' + email + ' • ').repeat(200);
        watermarkEl.textContent = watermarkText;
        
        showPage('quiz-page');
        
        quizStartTime = Date.now();
        questionStartTime = Date.now();
        startTimer();
        loadQuestion();
        enableAntiCheat();
    });
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

function startTimer() {
    questionStartTime = Date.now();
    
    timerInterval = setInterval(function() {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('time-display').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        const timeUsedSeconds = Math.floor((Date.now() - quizStartTime) / 1000);
        const usedMin = Math.floor(timeUsedSeconds / 60);
        const usedSec = timeUsedSeconds % 60;
        document.getElementById('time-used-display').textContent = 
            `${usedMin.toString().padStart(2, '0')}:${usedSec.toString().padStart(2, '0')}`;
        
        if (timeRemaining <= 300) {
            document.getElementById('timer').classList.add('warning');
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            clearInterval(timeUsedInterval);
            submitQuiz();
        }
    }, 1000);
    
    timeUsedInterval = setInterval(updateQuestionTime, 1000);
}

function updateQuestionTime() {
    const elapsed = Math.floor((Date.now() - questionStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('question-time-display').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function loadQuestion() {
    if (currentQuestion > 0) {
        const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
        questionTimes[currentQuestion - 1] = timeSpent;
    }
    
    questionStartTime = Date.now();
    
    const q = questions[currentQuestion];
    document.getElementById('question-text').textContent = q.question;
    document.getElementById('question-number').textContent = `Q${currentQuestion + 1}`;
    document.getElementById('question-of').textContent = `of ${questions.length}`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option' + (userAnswers[currentQuestion] === index ? ' selected' : '');
        optionDiv.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span class="option-text">${option}</span>
        `;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    const answeredCount = userAnswers.filter(a => a !== null).length;
    document.getElementById('question-counter').textContent = 
        `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('answered-counter').textContent = 
        `${answeredCount} of ${questions.length} answered`;
    document.getElementById('progress-fill').style.width = 
        `${(answeredCount / questions.length) * 100}%`;
    
    document.getElementById('prev-btn').style.display = 
        currentQuestion === 0 ? 'none' : 'block';
    document.getElementById('next-btn').style.display = 
        currentQuestion === questions.length - 1 ? 'none' : 'block';
    document.getElementById('submit-btn').style.display = 
        currentQuestion === questions.length - 1 ? 'block' : 'none';
    
    updateQuestionTime();
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
    
    const answeredCount = userAnswers.filter(a => a !== null).length;
    document.getElementById('answered-counter').textContent = 
        `${answeredCount} of ${questions.length} answered`;
    document.getElementById('progress-fill').style.width = 
        `${(answeredCount / questions.length) * 100}%`;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function submitQuiz() {
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        showCustomAlert(
            'Unanswered Questions',
            `You have ${unanswered} unanswered question(s). Are you sure you want to submit?`,
            'warning',
            [
                { text: 'Cancel', class: 'btn-secondary', action: function() { startTimer(); } },
                { text: 'Submit Anyway', class: 'btn-danger-alert', action: function() { doSubmitQuiz(); } }
            ]
        );
        return;
    }
    doSubmitQuiz();
}

function doSubmitQuiz() {
    quizSubmitted = true;
    clearInterval(timerInterval);
    clearInterval(timeUsedInterval);
    
    const lastQuestionTime = Math.floor((Date.now() - questionStartTime) / 1000);
    questionTimes[currentQuestion] = lastQuestionTime;
    
    let correct = 0;
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) correct++;
    });
    
    const timeTaken = Math.floor((Date.now() - quizStartTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    const percentage = Math.round((correct / questions.length) * 100);
    
    const result = {
        id: generateId(),
        fullname: currentStudent.fullname,
        email: currentStudent.email,
        track: currentStudent.track,
        score: correct,
        total: questions.length,
        percentage: percentage,
        timeTaken: `${minutes}:${seconds.toString().padStart(2, '0')}`,
        timeTakenSeconds: timeTaken,
        warnings: warningCount,
        answers: userAnswers,
        questionTimes: questionTimes,
        date: new Date().toISOString(),
        startTime: new Date(quizStartTime).toISOString(),
        aiUsage: detectAIUsage()
    };
    
    saveResult(result);
    currentStudent.id = result.id;
    displayResults(result);
}

function generateId() {
    return 'quiz_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function detectAIUsage() {
    const pasteEvents = parseInt(sessionStorage.getItem('pasteEvents') || '0');
    const copyEvents = parseInt(sessionStorage.getItem('copyEvents') || '0');
    
    if (pasteEvents > 0) {
        return 'Potential AI usage detected - paste events detected';
    }
    return 'No AI assistance detected';
}

function saveResult(result) {
    const ref = db.ref('quizResults/' + result.id);
    ref.set(result);
}

function displayResults(result) {
    document.getElementById('result-student').textContent = 
        `${result.fullname} | ${result.email} | ${result.track.toUpperCase()} Track`;
    
    document.getElementById('score-number').textContent = result.score;
    document.getElementById('score-total').textContent = `/${result.total}`;
    document.getElementById('score-percentage').textContent = `${result.percentage}%`;
    
    const gradeEl = document.getElementById('score-grade');
    if (result.percentage >= 80) {
        gradeEl.textContent = 'Excellent!';
        gradeEl.className = 'score-grade excellent';
    } else if (result.percentage >= 60) {
        gradeEl.textContent = 'Good Job!';
        gradeEl.className = 'score-grade good';
    } else if (result.percentage >= 40) {
        gradeEl.textContent = 'Average';
        gradeEl.className = 'score-grade average';
    } else {
        gradeEl.textContent = 'Needs Improvement';
        gradeEl.className = 'score-grade poor';
    }
    
    document.getElementById('correct-count').textContent = result.score;
    document.getElementById('wrong-count').textContent = result.total - result.score;
    document.getElementById('time-taken').textContent = result.timeTaken;
    
    const resultDate = new Date(result.date);
    document.getElementById('result-date').textContent = resultDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    const startTime = result.startTime ? new Date(result.startTime) : resultDate;
    document.getElementById('result-start-time').textContent = startTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    
    document.getElementById('ai-status-text').textContent = result.aiUsage;
    
    const activities = JSON.parse(sessionStorage.getItem('suspiciousActivities') || '[]');
    const suspiciousDiv = document.getElementById('suspicious-activity');
    const activityLog = document.getElementById('activity-log');
    
    if (activities.length > 0) {
        suspiciousDiv.style.display = 'block';
        activityLog.innerHTML = activities.map(a => 
            `<div class="activity-item"><span class="activity-type">${a.type}</span><span class="activity-time">${a.time}</span></div>`
        ).join('');
    }
    
    showPage('results-page');
}

function enableAntiCheat() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showWarning('Right-click is not allowed during the quiz.');
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x' || e.key === 'a')) {
            e.preventDefault();
            if (e.key === 'c') {
                sessionStorage.setItem('copyEvents', (parseInt(sessionStorage.getItem('copyEvents') || '0') + 1).toString());
            }
            if (e.key === 'v') {
                sessionStorage.setItem('pasteEvents', (parseInt(sessionStorage.getItem('pasteEvents') || '0') + 1).toString());
            }
            showWarning('Copy/Paste/Select All is not allowed during the quiz.');
        }
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            showWarning('Developer tools are not allowed during the quiz.');
        }
        if (e.key === 'PrintScreen') {
            e.preventDefault();
            showWarning('Screenshots are not allowed during the quiz.');
        }
    });
    
    document.addEventListener('keyup', function(e) {
        if (e.key === 'PrintScreen') {
            showWarning('Screenshots are not allowed during the quiz.');
        }
    });
    
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            showWarning('Tab switching is not allowed during the quiz.');
        }
    });
    
    window.addEventListener('blur', function() {
        showWarning('Switching windows is not allowed during the quiz.');
    });
}

function showWarning(message) {
    if (quizSubmitted || warningCount >= 3) return;
    warningCount++;
    document.getElementById('warning-message').textContent = message;
    document.getElementById('warning-count').textContent = warningCount;
    document.getElementById('proctor-warning-count').textContent = warningCount;
    document.getElementById('warning-modal').style.display = 'flex';
    
    logSuspiciousActivity(message);
    
    if (warningCount >= 3) {
        clearInterval(timerInterval);
        clearInterval(timeUsedInterval);
        showLastChanceAlert('You have received too many warnings. Your quiz will be submitted automatically.');
    }
}

function logSuspiciousActivity(activity) {
    const activities = JSON.parse(sessionStorage.getItem('suspiciousActivities') || '[]');
    activities.push({
        type: activity,
        time: new Date().toLocaleTimeString()
    });
    sessionStorage.setItem('suspiciousActivities', JSON.stringify(activities));
}

function closeModal() {
    document.getElementById('warning-modal').style.display = 'none';
    document.getElementById('admin-login-modal').style.display = 'none';
}

function toggleProctorReport() {
    const report = document.getElementById('instructor-proctor-report');
    if (report.style.display === 'none' || report.style.display === '') {
        db.ref('quizResults').once('value', function(snapshot) {
            let totalWarnings = 0;
            let studentsWithViolations = 0;
            snapshot.forEach(function(child) {
                const result = child.val();
                if (result.warnings && result.warnings > 0) {
                    totalWarnings += result.warnings;
                    studentsWithViolations++;
                }
            });
            document.getElementById('total-warnings').textContent = totalWarnings;
            document.getElementById('students-with-violations').textContent = studentsWithViolations;
            report.style.display = 'block';
        });
    } else {
        report.style.display = 'none';
    }
}

let customAlertCallback = null;
let countdownInterval = null;

function showCustomAlert(title, message, iconType, buttons, callback) {
    const modal = document.getElementById('custom-alert-modal');
    const iconEl = document.getElementById('custom-alert-icon');
    const titleEl = document.getElementById('custom-alert-title');
    const msgEl = document.getElementById('custom-alert-message');
    const btnContainer = document.getElementById('custom-alert-buttons');
    const countdownEl = document.getElementById('custom-alert-countdown');

    iconEl.className = 'custom-alert-icon icon-' + iconType;
    const iconMap = {
        warning: 'fa-exclamation-triangle',
        danger: 'fa-circle-xmark',
        success: 'fa-circle-check',
        info: 'fa-circle-info'
    };
    iconEl.innerHTML = '<i class="fas ' + (iconMap[iconType] || iconMap.warning) + '"></i>';

    titleEl.textContent = title;
    msgEl.textContent = message;
    countdownEl.style.display = 'none';
    customAlertCallback = callback || null;

    btnContainer.innerHTML = '';
    if (buttons && buttons.length > 0) {
        buttons.forEach(function(btn) {
            const btnEl = document.createElement('button');
            btnEl.textContent = btn.text;
            btnEl.className = btn.class || 'btn-primary';
            btnEl.onclick = function() {
                modal.style.display = 'none';
                if (countdownInterval) clearInterval(countdownInterval);
                if (btn.action) btn.action();
                if (customAlertCallback) customAlertCallback();
            };
            btnContainer.appendChild(btnEl);
        });
    } else {
        btnContainer.innerHTML = '<button class="btn-primary" onclick="closeCustomAlert()">OK</button>';
    }

    modal.style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('custom-alert-modal').style.display = 'none';
    if (countdownInterval) clearInterval(countdownInterval);
    if (customAlertCallback) customAlertCallback();
    customAlertCallback = null;
}

function showLastChanceAlert(message) {
    const modal = document.getElementById('custom-alert-modal');
    const iconEl = document.getElementById('custom-alert-icon');
    const titleEl = document.getElementById('custom-alert-title');
    const msgEl = document.getElementById('custom-alert-message');
    const btnContainer = document.getElementById('custom-alert-buttons');
    const countdownEl = document.getElementById('custom-alert-countdown');
    const countdownNum = document.getElementById('countdown-number');

    iconEl.className = 'custom-alert-icon icon-danger';
    iconEl.innerHTML = '<i class="fas fa-circle-xmark"></i>';
    titleEl.textContent = 'Final Warning!';
    msgEl.textContent = message;
    countdownEl.style.display = 'block';
    let seconds = 10;
    countdownNum.textContent = seconds;

    btnContainer.innerHTML = '';
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit Now';
    submitBtn.className = 'btn-danger-alert';
    submitBtn.onclick = function() {
        if (countdownInterval) clearInterval(countdownInterval);
        modal.style.display = 'none';
        submitQuiz();
    };
    btnContainer.appendChild(submitBtn);

    modal.style.display = 'flex';

    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
        seconds--;
        countdownNum.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            modal.style.display = 'none';
            submitQuiz();
        }
    }, 1000);
}

function printResults() {
    window.print();
}

function shareResults() {
    const params = new URLSearchParams(window.location.search);
    const resultId = params.get('view') || params.get('share') || currentStudent?.id;
    
    if (resultId) {
        const shareUrl = `${window.location.origin}${window.location.pathname}?share=${resultId}`;
        document.getElementById('share-link').value = shareUrl;
        document.getElementById('share-modal').style.display = 'flex';
    }
}

function copyShareLink() {
    const shareInput = document.getElementById('share-link');
    shareInput.select();
    document.execCommand('copy');
    showCustomAlert('Copied!', 'Link copied to clipboard!', 'success', null);
}

function closeShareModal() {
    document.getElementById('share-modal').style.display = 'none';
}

function showSharedResult(resultId) {
    db.ref('quizResults/' + resultId).once('value', function(snapshot) {
        const result = snapshot.val();
        if (result) {
            currentStudent = { fullname: result.fullname, email: result.email, track: result.track };
            displayResults(result);
        } else {
            showCustomAlert('Not Found', 'Result not found.', 'warning', null);
            showPage('registration-page');
        }
    });
}

function adminLogin(e) {
    e.preventDefault();
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    const errorEl = document.getElementById('admin-error');
    
    if (password === ADMIN_PASSWORD && email === ADMIN_EMAIL) {
        closeModal();
        showAdminDashboard();
    } else {
        errorEl.textContent = 'Invalid email or password';
    }
}

function showAdminDashboard() {
    showPage('admin-page');
    loadAdminResults();
}

function loadAdminResults() {
    db.ref('quizResults').once('value', function(snapshot) {
        const results = [];
        snapshot.forEach(function(child) {
            results.push(child.val());
        });
        displayResultsTable(results);
        updateSummary(results);
        updateProctorReport(results);
    });
}

function displayResultsTable(results) {
    const tbody = document.getElementById('results-tbody');
    tbody.innerHTML = '';
    
    if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" style="text-align:center; padding:30px;">No results yet</td></tr>';
        return;
    }
    
    results.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    results.forEach((result, index) => {
        const row = document.createElement('tr');
        const date = new Date(result.date);
        const startTime = result.startTime ? new Date(result.startTime) : null;
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${result.fullname}</td>
            <td>${result.email}</td>
            <td><span class="track-label py">${result.track}</span></td>
            <td>${result.score}/${result.total}</td>
            <td>${result.percentage}%</td>
            <td>${startTime ? startTime.toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit'}) : '-'}</td>
            <td>${result.timeTaken}</td>
            <td>${result.warnings || 0}</td>
            <td>${date.toLocaleDateString('en-GB', {day:'2-digit',month:'2-digit',year:'numeric'})}</td>
        `;
        tbody.appendChild(row);
    });
}

function updateSummary(results) {
    document.getElementById('total-students').textContent = results.length;
    
    if (results.length > 0) {
        const avgScore = Math.round(results.reduce((sum, r) => sum + r.percentage, 0) / results.length);
        const highestScore = Math.max(...results.map(r => r.percentage));
        
        document.getElementById('avg-score').textContent = `${avgScore}%`;
        document.getElementById('highest-score').textContent = `${highestScore}%`;
    }
}

function updateProctorReport(results) {
    const totalWarnings = results.reduce((sum, r) => sum + (r.warnings || 0), 0);
    const studentsWithViolations = results.filter(r => (r.warnings || 0) > 0).length;
    
    const totalEl = document.getElementById('total-warnings');
    const violationsEl = document.getElementById('students-with-violations');
    if (totalEl) totalEl.textContent = totalWarnings;
    if (violationsEl) violationsEl.textContent = studentsWithViolations;
    
    const proctorReport = document.getElementById('instructor-proctor-report');
    if (proctorReport && totalWarnings > 0) {
        proctorReport.style.display = 'block';
    }
}

function filterResults() {
    const trackFilter = document.getElementById('filter-track').value;
    const searchQuery = document.getElementById('search-student').value.toLowerCase();
    
    db.ref('quizResults').once('value', function(snapshot) {
        let results = [];
        snapshot.forEach(function(child) {
            results.push(child.val());
        });
        
        if (trackFilter !== 'all') {
            results = results.filter(r => r.track === trackFilter);
        }
        
        if (searchQuery) {
            results = results.filter(r => 
                r.fullname.toLowerCase().includes(searchQuery) || 
                r.email.toLowerCase().includes(searchQuery)
            );
        }
        
        displayResultsTable(results);
        updateSummary(results);
    });
}

function exportToExcel() {
    db.ref('quizResults').once('value', function(snapshot) {
        const results = [];
        snapshot.forEach(function(child) {
            results.push(child.val());
        });
        
        if (results.length === 0) {
            showCustomAlert('No Data', 'No results to export.', 'info', null);
            return;
        }
        
        let csv = 'Name,Email,Track,Score,Total,Percentage,Time Taken,Warnings,Date\n';
        
        results.forEach(result => {
            const date = new Date(result.date).toLocaleString();
            csv += `"${result.fullname}","${result.email}","${result.track}",${result.score},${result.total},${result.percentage}%,"${result.timeTaken}",${result.warnings || 0},"${date}"\n`;
        });
        
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
    });
}

function printAllResults() {
    db.ref('quizResults').once('value', function(snapshot) {
        const results = [];
        snapshot.forEach(function(child) {
            results.push(child.val());
        });
        
        if (results.length === 0) {
            showCustomAlert('No Data', 'No results to print.', 'info', null);
            return;
        }
        
        let printContent = `
            <html>
            <head>
                <title>Quiz Results - Refactory Academy</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { text-align: center; color: #333; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                    th { background: #f4f4f4; }
                    .summary { display: flex; justify-content: space-around; margin: 20px 0; }
                    .summary-item { text-align: center; }
                    .summary-value { font-size: 24px; font-weight: bold; color: #7c3aed; }
                </style>
            </head>
            <body>
                <h1>Quiz Results - Refactory Academy</h1>
                <p style="text-align:center;">Generated on ${new Date().toLocaleString()}</p>
                <div class="summary">
                    <div class="summary-item">
                        <div>Total Students: ${results.length}</div>
                    </div>
                    <div class="summary-item">
                        <div>Average Score: ${Math.round(results.reduce((s, r) => s + r.percentage, 0) / results.length)}%</div>
                    </div>
                    <div class="summary-item">
                        <div>Highest Score: ${Math.max(...results.map(r => r.percentage))}%</div>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>#</th><th>Name</th><th>Email</th><th>Track</th>
                        <th>Score</th><th>%</th><th>Time</th><th>Warnings</th><th>Date</th>
                    </tr>`;
        
        results.forEach((r, i) => {
            printContent += `
                    <tr>
                        <td>${i+1}</td><td>${r.fullname}</td><td>${r.email}</td>
                        <td>${r.track}</td><td>${r.score}/${r.total}</td><td>${r.percentage}%</td>
                        <td>${r.timeTaken}</td><td>${r.warnings || 0}</td>
                        <td>${new Date(r.date).toLocaleString()}</td>
                    </tr>`;
        });
        
        printContent += `
                </table>
            </body>
            </html>`;
        
        const printWindow = window.open('', '_blank');
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
    });
}

function clearAllResults() {
    showCustomAlert(
        'Confirm Delete',
        'Are you sure you want to delete ALL results? This cannot be undone.',
        'danger',
        [
            { text: 'Cancel', class: 'btn-secondary', action: function() {} },
            {
                text: 'Delete All',
                class: 'btn-danger-alert',
                action: function() {
                    db.ref('quizResults').remove().then(function() {
                        loadAdminResults();
                        showCustomAlert('Done', 'All results have been cleared.', 'success', null);
                    });
                }
            }
        ]
    );
}

init();
