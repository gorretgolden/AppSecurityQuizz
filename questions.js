const javascriptQuestions = [
    {
        question: "What is SQL Injection?",
        options: [
            "A technique to optimize database queries",
            "A malicious code insertion through user input to manipulate SQL queries",
            "A method to encrypt database connections",
            "A way to backup databases automatically"
        ],
        correct: 1
    },
    {
        question: "Which of the following is the BEST defense against SQL Injection?",
        options: [
            "Using longer passwords",
            "Input validation and parameterized queries",
            "Encrypting the entire database",
            "Using stored procedures only"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of input validation?",
        options: [
            "To make forms look better",
            "To ensure user input meets expected format and length before processing",
            "To encrypt user passwords",
            "To speed up database queries"
        ],
        correct: 1
    },
    {
        question: "In the Oyera Auto Service project, which field is vulnerable to SQL injection if not properly validated?",
        options: [
            "The page title",
            "Customer search input field",
            "The CSS styling",
            "The server operating system"
        ],
        correct: 1
    },
    {
        question: "What does XSS stand for?",
        options: [
            "Cross-Site Scripting",
            "Cross-Server Security",
            "External Style Sheets",
            "Extra Secure System"
        ],
        correct: 0
    },
    {
        question: "Which type of XSS is injected directly by the attacker to the server?",
        options: [
            "Reflected XSS",
            "Stored XSS",
            "DOM-based XSS",
            "All of the above"
        ],
        correct: 1
    },
    {
        question: "What is the main difference between XSS and SQL Injection?",
        options: [
            "They are the same thing",
            "XSS targets users through browsers, SQL Injection targets the database",
            "SQL Injection is more dangerous",
            "XSS only affects mobile devices"
        ],
        correct: 1
    },
    {
        question: "Which HTTP header helps prevent XSS attacks?",
        options: [
            "Content-Security-Policy",
            "X-Powered-By",
            "Server",
            "Accept-Language"
        ],
        correct: 0
    },
    {
        question: "What is the OWASP Top 10?",
        options: [
            "A list of the top 10 programming languages",
            "A standard awareness document for web application security risks",
            "A certification program for developers",
            "A type of firewall configuration"
        ],
        correct: 1
    },
    {
        question: "In Reflected XSS, where is the malicious script stored?",
        options: [
            "In the database",
            "In the URL/server response",
            "In cookies only",
            "In the browser cache"
        ],
        correct: 1
    },
    {
        question: "What is the first step in securing an application?",
        options: [
            "Installing antivirus software",
            "Identifying assets to protect",
            "Buying a firewall",
            "Hiring a security team"
        ],
        correct: 1
    },
    {
        question: "Which input validation technique rejects invalid input?",
        options: [
            "Accept known good (allow list)",
            "Reject known bad (deny list)",
            "Sanitization",
            "Encoding"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of bcrypt in the Oyera Auto Service project?",
        options: [
            "To style the login form",
            "To hash and encrypt passwords",
            "To validate email addresses",
            "To create database backups"
        ],
        correct: 1
    },
    {
        question: "Which vulnerability allows an attacker to inject malicious HTML/JavaScript?",
        options: [
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "Buffer Overflow",
            "Denial of Service"
        ],
        correct: 1
    },
    {
        question: "What is session hijacking?",
        options: [
            "Creating multiple user sessions",
            "Stealing a user's session token to impersonate them",
            "Logging out all users simultaneously",
            "Encrypting session data"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a client-side attack?",
        options: [
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "Server Misconfiguration",
            "Database Backup Exposure"
        ],
        correct: 1
    },
    {
        question: "What should you do with user input before displaying it on a webpage?",
        options: [
            "Use it as-is",
            "Sanitize and encode it",
            "Convert to uppercase",
            "Store in localStorage"
        ],
        correct: 1
    },
    {
        question: "In the Oyera Auto Service project, what does the login system protect?",
        options: [
            "The company's social media",
            "The admin dashboard for managing customers and services",
            "The company's email server",
            "The company's physical office"
        ],
        correct: 1
    },
    {
        question: "What is a common symptom of a successful XSS attack?",
        options: [
            "Database becomes faster",
            "Unexpected pop-ups or scripts running in the victim's browser",
            "Website loads faster",
            "Colors change on the website"
        ],
        correct: 1
    },
    {
        question: "Which day of the App Security course covered SQL Injection?",
        options: [
            "Day 1",
            "Day 2",
            "Day 3",
            "Day 4"
        ],
        correct: 1
    }
];

const pythonQuestions = [
    {
        question: "What is SQL Injection?",
        options: [
            "A technique to optimize database queries",
            "A malicious code insertion through user input to manipulate SQL queries",
            "A method to encrypt database connections",
            "A way to backup databases automatically"
        ],
        correct: 1
    },
    {
        question: "Which Python library helps prevent SQL Injection?",
        options: [
            "requests",
            "sqlite3 with parameterized queries",
            "beautifulsoup",
            "flask"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of input validation in Python?",
        options: [
            "To make scripts run faster",
            "To ensure user input meets expected format and length before processing",
            "To encrypt user passwords",
            "To create GUI applications"
        ],
        correct: 1
    },
    {
        question: "In the Oyera Auto Service project, which field is vulnerable to SQL injection if not properly validated?",
        options: [
            "The page title",
            "Customer search input field",
            "The CSS styling",
            "The server operating system"
        ],
        correct: 1
    },
    {
        question: "What is the correct way to execute a parameterized query in Python?",
        options: [
            "cursor.execute('SELECT * FROM users WHERE id=' + user_id)",
            "cursor.execute('SELECT * FROM users WHERE id=?', (user_id,))",
            "cursor.execute(f'SELECT * FROM users WHERE id={user_id}')",
            "cursor.execute('SELECT * FROM users WHERE id=%s' % user_id)"
        ],
        correct: 1
    },
    {
        question: "What does XSS stand for?",
        options: [
            "Cross-Site Scripting",
            "Cross-Server Security",
            "External Style Sheets",
            "Extra Secure System"
        ],
        correct: 0
    },
    {
        question: "Which type of XSS is injected directly by the attacker to the server?",
        options: [
            "Reflected XSS",
            "Stored XSS",
            "DOM-based XSS",
            "All of the above"
        ],
        correct: 1
    },
    {
        question: "What is the main difference between XSS and SQL Injection?",
        options: [
            "They are the same thing",
            "XSS targets users through browsers, SQL Injection targets the database",
            "SQL Injection is more dangerous",
            "XSS only affects mobile devices"
        ],
        correct: 1
    },
    {
        question: "In Python, how do you escape HTML special characters?",
        options: [
            "Using escape() from markupsafe or html module",
            "Using str.upper()",
            "Using json.dumps()",
            "Using base64 encode"
        ],
        correct: 0
    },
    {
        question: "What is the OWASP Top 10?",
        options: [
            "A list of the top 10 programming languages",
            "A standard awareness document for web application security risks",
            "A certification program for developers",
            "A type of firewall configuration"
        ],
        correct: 1
    },
    {
        question: "In Reflected XSS, where is the malicious script stored?",
        options: [
            "In the database",
            "In the URL/server response",
            "In cookies only",
            "In the browser cache"
        ],
        correct: 1
    },
    {
        question: "What is the first step in securing a Python application?",
        options: [
            "Installing antivirus software",
            "Identifying assets to protect",
            "Buying a firewall",
            "Hiring a security team"
        ],
        correct: 1
    },
    {
        question: "Which input validation technique rejects invalid input?",
        options: [
            "Accept known good (allow list)",
            "Reject known bad (deny list)",
            "Sanitization",
            "Encoding"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of bcrypt in the Oyera Auto Service project?",
        options: [
            "To style the login form",
            "To hash and encrypt passwords",
            "To validate email addresses",
            "To create database backups"
        ],
        correct: 1
    },
    {
        question: "Which vulnerability allows an attacker to inject malicious HTML/JavaScript?",
        options: [
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "Buffer Overflow",
            "Denial of Service"
        ],
        correct: 1
    },
    {
        question: "What is session hijacking?",
        options: [
            "Creating multiple user sessions",
            "Stealing a user's session token to impersonate them",
            "Logging out all users simultaneously",
            "Encrypting session data"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a client-side attack?",
        options: [
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "Server Misconfiguration",
            "Database Backup Exposure"
        ],
        correct: 1
    },
    {
        question: "What should you do with user input before displaying it on a webpage?",
        options: [
            "Use it as-is",
            "Sanitize and encode it",
            "Convert to uppercase",
            "Store in localStorage"
        ],
        correct: 1
    },
    {
        question: "In the Oyera Auto Service project, what does the login system protect?",
        options: [
            "The company's social media",
            "The admin dashboard for managing customers and services",
            "The company's email server",
            "The company's physical office"
        ],
        correct: 1
    },
    {
        question: "Which day of the App Security course covered XSS?",
        options: [
            "Day 1",
            "Day 2",
            "Day 3",
            "Day 4"
        ],
        correct: 2
    }
];
