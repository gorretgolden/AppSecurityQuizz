let currentTrack = '';
let currentQuestion = 0;
let userAnswers = [];
let questions = [];
let timerInterval;
let timeRemaining = 3600;
let startTime;
let warningCount = 0;
let quizStartTime;
let currentStudent = null;
let questionStartTime = 0;
let questionTimes = [];
let timeUsedInterval;
const ADMIN_PASSWORD = 'refactory2024';

function init() {
    loadFormDraft();
    updateScheduleStatus();
    
    const params = new URLSearchParams(window.location.search);
    const viewId = params.get('view');
    const shareId = params.get('share');
    
    if (viewId) {
        showSharedResult(viewId);
    } else if (shareId) {
        showSharedResult(shareId);
    } else if (window.location.hash === '#admin') {
        showAdminDashboard();
    }
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
        document.getElementById('fullname').value = draft.fullname || '';
        document.getElementById('email').value = draft.email || '';
        document.getElementById('track').value = draft.track || '';
    }
}

function clearFormDraft() {
    localStorage.removeItem('quizDraft');
}

function updateScheduleStatus() {
    const jsStatus = document.getElementById('js-status');
    const pyStatus = document.getElementById('py-status');
    
    if (!jsStatus || !pyStatus) return;
    
    const jsResult = isQuizOpen('javascript');
    const pyResult = isQuizOpen('python');
    
    if (jsResult.open) {
        jsStatus.textContent = 'Open Now';
        jsStatus.className = 'quiz-status open';
    } else {
        jsStatus.textContent = 'Closed';
        jsStatus.className = 'quiz-status closed';
    }
    
    if (pyResult.open) {
        pyStatus.textContent = 'Open Now';
        pyStatus.className = 'quiz-status open';
    } else {
        pyStatus.textContent = 'Closed';
        pyStatus.className = 'quiz-status closed';
    }
}

document.getElementById('fullname').addEventListener('input', saveFormDraft);
document.getElementById('email').addEventListener('input', saveFormDraft);
document.getElementById('track').addEventListener('change', saveFormDraft);

function isQuizOpen(track) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;
    
    const quizDate = new Date(year, 7, 31);
    
    if (now < quizDate) return { open: false, message: 'Quiz has not started yet. Quiz is on 31/08/2026.' };
    if (now > new Date(year, 7, 31, 19, 0)) return { open: false, message: 'Quiz period has ended.' };
    
    if (track === 'javascript') {
        const start = 18 * 60;
        const end = 19 * 60;
        if (currentTime < start) return { open: false, message: 'JavaScript quiz opens at 6:00 PM (18:00) on 31/08/2026.' };
        if (currentTime >= end) return { open: false, message: 'JavaScript quiz closed at 7:00 PM (19:00).' };
        return { open: true };
    }
    
    if (track === 'python') {
        const start = 8 * 60;
        const end = 9 * 60;
        if (currentTime < start) return { open: false, message: 'Python quiz opens at 8:00 AM on 31/08/2026.' };
        if (currentTime >= end) return { open: false, message: 'Python quiz closed at 9:00 AM.' };
        return { open: true };
    }
    
    return { open: false, message: 'Invalid track selected.' };
}

document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const track = document.getElementById('track').value;
    const emailError = document.getElementById('email-error');
    
    emailError.textContent = '';
    
    if (!fullname || !email || !track) {
        alert('Please fill in all fields');
        return;
    }
    
    // Time validation - DISABLED for testing, re-enable before going live
    // const quizStatus = isQuizOpen(track);
    // if (!quizStatus.open) {
    //     alert(quizStatus.message);
    //     return;
    // }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@refactory\.academy$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Only @refactory.academy emails are accepted';
        return;
    }
    
    const existingResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
    const emailExists = existingResults.find(r => r.email.toLowerCase() === email);
    if (emailExists) {
        alert('This email has already been used to take the quiz. You cannot retake it.');
        return;
    }
    
    const nameExists = existingResults.find(r => 
        r.fullname.toLowerCase() === fullname.toLowerCase() && r.track === track
    );
    if (nameExists) {
        alert('A student with this name has already taken this quiz in this track. Each student can only take the quiz once.');
        return;
    }
    
    currentTrack = track;
    questions = track === 'javascript' ? javascriptQuestions : pythonQuestions;
    userAnswers = new Array(questions.length).fill(null);
    currentQuestion = 0;
    warningCount = 0;
    questionTimes = [];
    clearFormDraft();
    
    currentStudent = { fullname, email, track };
    
    document.getElementById('student-name').textContent = fullname;
    const badge = document.getElementById('track-badge');
    badge.textContent = track === 'javascript' ? 'JavaScript Track' : 'Python Track';
    badge.className = track === 'javascript' ? 'track-label js' : 'track-label py';
    
    showPage('quiz-page');
    
    quizStartTime = Date.now();
    questionStartTime = Date.now();
    startTimer();
    loadQuestion();
    enableAntiCheat();
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
    clearInterval(timerInterval);
    clearInterval(timeUsedInterval);
    
    const lastQuestionTime = Math.floor((Date.now() - questionStartTime) / 1000);
    questionTimes[currentQuestion] = lastQuestionTime;
    
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`You have ${unanswered} unanswered question(s). Are you sure you want to submit?`)) {
            startTimer();
            return;
        }
    }
    
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
        aiUsage: detectAIUsage()
    };
    
    saveResult(result);
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
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
    const existingIndex = results.findIndex(r => r.email === result.email && r.track === result.track);
    if (existingIndex >= 0) {
        results[existingIndex] = result;
    } else {
        results.push(result);
    }
    
    localStorage.setItem('quizResults', JSON.stringify(results));
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
    
    const reviewSection = document.getElementById('review-answers');
    reviewSection.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    
    const quizQuestions = result.track === 'javascript' ? javascriptQuestions : pythonQuestions;
    
    quizQuestions.forEach((q, i) => {
        const isCorrect = result.answers[i] === q.correct;
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
        
        let answerHtml = '';
        if (isCorrect) {
            answerHtml = `<strong>Correct: ${letters[q.correct]}. ${q.options[q.correct]}</strong>`;
        } else {
            const userAnswer = result.answers[i] !== null ? 
                `<span class="wrong-answer">Your answer: ${letters[result.answers[i]]}. ${q.options[result.answers[i]]}</span>` : 
                '<span class="wrong-answer">Not answered</span>';
            answerHtml = `${userAnswer}<br><strong>Correct: ${letters[q.correct]}. ${q.options[q.correct]}</strong>`;
        }
        
        const qTime = result.questionTimes && result.questionTimes[i] ? result.questionTimes[i] : 0;
        const qMin = Math.floor(qTime / 60);
        const qSec = qTime % 60;
        
        reviewItem.innerHTML = `
            <div class="review-question">${i + 1}. ${q.question}</div>
            <div class="review-answer">${answerHtml}</div>
            <div class="review-time">Time: ${qMin}m ${qSec}s</div>
        `;
        reviewSection.appendChild(reviewItem);
    });
    
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
    warningCount++;
    document.getElementById('warning-message').textContent = message;
    document.getElementById('warning-count').textContent = warningCount;
    document.getElementById('proctor-warning-count').textContent = warningCount;
    document.getElementById('warning-modal').style.display = 'flex';
    
    logSuspiciousActivity(message);
    
    if (warningCount >= 3) {
        clearInterval(timerInterval);
        clearInterval(timeUsedInterval);
        alert('You have received too many warnings. Your quiz will be submitted automatically.');
        submitQuiz();
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

function printResults() {
    window.print();
}

function shareResults() {
    const params = new URLSearchParams(window.location.search);
    const resultId = params.get('view') || params.get('share') || 
        JSON.parse(localStorage.getItem('quizResults') || '[]').slice(-1)[0]?.id;
    
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
    alert('Link copied to clipboard!');
}

function closeShareModal() {
    document.getElementById('share-modal').style.display = 'none';
}

function showSharedResult(resultId) {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    const result = results.find(r => r.id === resultId);
    
    if (result) {
        currentStudent = { fullname: result.fullname, email: result.email, track: result.track };
        displayResults(result);
    } else {
        alert('Result not found');
        showPage('registration-page');
    }
}

function showAdminLogin() {
    document.getElementById('admin-login-modal').style.display = 'flex';
}

function adminLogin(e) {
    e.preventDefault();
    const password = document.getElementById('admin-password').value;
    const errorEl = document.getElementById('admin-error');
    
    if (password === ADMIN_PASSWORD) {
        closeModal();
        showAdminDashboard();
    } else {
        errorEl.textContent = 'Invalid password';
    }
}

function showAdminDashboard() {
    showPage('admin-page');
    loadAdminResults();
}

function loadAdminResults() {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    displayResultsTable(results);
    updateSummary(results);
}

function displayResultsTable(results) {
    const tbody = document.getElementById('results-tbody');
    tbody.innerHTML = '';
    
    if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:30px;">No results yet</td></tr>';
        return;
    }
    
    results.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    results.forEach((result, index) => {
        const row = document.createElement('tr');
        const date = new Date(result.date);
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${result.fullname}</td>
            <td>${result.email}</td>
            <td><span class="track-label ${result.track === 'javascript' ? 'js' : 'py'}">${result.track}</span></td>
            <td>${result.score}/${result.total}</td>
            <td>${result.percentage}%</td>
            <td>${result.timeTaken}</td>
            <td>${result.warnings || 0}</td>
            <td>${date.toLocaleDateString()} ${date.toLocaleTimeString()}</td>
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

function filterResults() {
    const trackFilter = document.getElementById('filter-track').value;
    const searchQuery = document.getElementById('search-student').value.toLowerCase();
    
    let results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
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
}

function exportToExcel() {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
    if (results.length === 0) {
        alert('No results to export');
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
}

function printAllResults() {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    
    if (results.length === 0) {
        alert('No results to print');
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
}

function clearAllResults() {
    if (confirm('Are you sure you want to delete ALL results? This cannot be undone.')) {
        if (confirm('This will permanently delete all student results. Continue?')) {
            localStorage.removeItem('quizResults');
            loadAdminResults();
            alert('All results have been cleared');
        }
    }
}

init();
