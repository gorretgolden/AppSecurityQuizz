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
    },
    {
        question: "What is Cross-Site Request Forgery (CSRF)?",
        options: [
            "A type of SQL injection",
            "An attack that forces users to execute unwanted actions on a web application",
            "A method to encrypt cookies",
            "A backup procedure for web servers"
        ],
        correct: 1
    },
    {
        question: "Which of the following is used to hash passwords in JavaScript?",
        options: [
            "MD5",
            "bcrypt",
            "Base64",
            "ROT13"
        ],
        correct: 1
    },
    {
        question: "What is Content Security Policy (CSP)?",
        options: [
            "A firewall configuration",
            "A browser security layer that helps prevent XSS and injection attacks",
            "A password policy",
            "An encryption method"
        ],
        correct: 1
    },
    {
        question: "What is the same-origin policy?",
        options: [
            "A rule that allows all websites to share data",
            "A security mechanism that restricts how documents or scripts can interact with resources from another origin",
            "A password sharing policy",
            "A backup protocol"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection盲注 (Blind SQL Injection)?",
        options: [
            "SQL injection that is invisible to the user",
            "A technique where the attacker asks the database true/false questions to extract data",
            "SQL injection on a blind server",
            "A type of stored SQL injection"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of HTTPS?",
        options: [
            "To make websites load faster",
            "To encrypt communication between client and server",
            "To block all malware",
            "To increase storage capacity"
        ],
        correct: 1
    },
    {
        question: "What is a session token?",
        options: [
            "A password for logging in",
            "A unique identifier used to maintain user session state",
            "A type of encryption key",
            "A cookie for tracking analytics"
        ],
        correct: 1
    },
    {
        question: "Which of the following is NOT a type of XSS?",
        options: [
            "Stored XSS",
            "Reflected XSS",
            "DOM-based XSS",
            "Server-side XSS"
        ],
        correct: 3
    },
    {
        question: "What is input sanitization?",
        options: [
            "Removing all input from forms",
            "Cleaning user input to remove potentially harmful characters or code",
            "Encrypting input data",
            "Validating input on the server only"
        ],
        correct: 1
    },
    {
        question: "What is a security token?",
        options: [
            "A physical key",
            "A device or software that generates one-time passwords for authentication",
            "A type of cookie",
            "A firewall rule"
        ],
        correct: 1
    },
    {
        question: "What is CORS in web security?",
        options: [
            "Cross-Origin Resource Sharing - a mechanism that allows restricted resources to be requested from another domain",
            "A type of encryption",
            "A password hashing algorithm",
            "A backup system"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of CSRF tokens?",
        options: [
            "To speed up page loads",
            "To prevent cross-site request forgery attacks by validating form submissions",
            "To encrypt passwords",
            "To track user behavior"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection UNION attack?",
        options: [
            "Using UNION to merge two databases",
            "Using UNION SELECT to extract data from other tables",
            "A backup technique",
            "A way to optimize queries"
        ],
        correct: 1
    },
    {
        question: "What is Cross-Site Scripting (XSS) payload?",
        options: [
            "The database schema",
            "The malicious code injected into a vulnerable website",
            "The server configuration",
            "The encryption key"
        ],
        correct: 1
    },
    {
        question: "What is the HttpOnly cookie flag?",
        options: [
            "A flag that makes cookies visible to JavaScript",
            "A flag that prevents JavaScript from accessing the cookie",
            "A flag that encrypts cookies",
            "A flag that deletes cookies automatically"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection time-based blind?",
        options: [
            "SQL injection that only works at night",
            "A technique where the attacker measures response time to infer information",
            "A time-limited SQL injection",
            "A backup attack method"
        ],
        correct: 1
    },
    {
        question: "What is the Secure cookie flag?",
        options: [
            "A flag that makes cookies more secure by requiring HTTPS",
            "A flag that encrypts cookie content",
            "A flag that prevents cookie theft",
            "A flag that limits cookie lifetime"
        ],
        correct: 0
    },
    {
        question: "What is DOM-based XSS?",
        options: [
            "XSS that only affects the server",
            "XSS where the vulnerability exists in client-side code rather than server-side",
            "XSS that affects the DOM tree permanently",
            "A type of stored XSS"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection error-based?",
        options: [
            "SQL injection that causes no errors",
            "A technique that uses database error messages to extract information",
            "An attack on error logs",
            "A way to fix SQL errors"
        ],
        correct: 1
    },
    {
        question: "What is a security header?",
        options: [
            "A website banner",
            "An HTTP response header that provides security instructions to the browser",
            "A login page element",
            "A type of cookie"
        ],
        correct: 1
    },
    {
        question: "What is the X-Content-Type-Options header?",
        options: [
            "A header that specifies content encoding",
            "A header that prevents MIME-type sniffing",
            "A header that sets character encoding",
            "A header that controls caching"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection stacked queries?",
        options: [
            "Using multiple SELECT statements",
            "Executing multiple SQL statements separated by semicolons",
            "A way to organize queries",
            "A backup technique"
        ],
        correct: 1
    },
    {
        question: "What is the X-Frame-Options header?",
        options: [
            "A header that controls frame dimensions",
            "A header that prevents clickjacking by controlling if a page can be embedded in frames",
            "A header for iframe styling",
            "A header for frame navigation"
        ],
        correct: 1
    },
    {
        question: "What is a security audit?",
        options: [
            "A financial review",
            "A systematic evaluation of an organization's security posture",
            "A type of firewall",
            "A password policy"
        ],
        correct: 1
    },
    {
        question: "What is vulnerability scanning?",
        options: [
            "Scanning for viruses only",
            "Automated process of identifying security vulnerabilities in systems and networks",
            "Scanning for malware",
            "A type of port scanning"
        ],
        correct: 1
    },
    {
        question: "What is penetration testing?",
        options: [
            "Testing network speed",
            "Simulating cyber attacks to identify vulnerabilities before malicious hackers",
            "Testing physical security",
            "A type of code review"
        ],
        correct: 1
    },
    {
        question: "What is the OWASP ASVS?",
        options: [
            "Application Security Verification Standard - a framework for testing web application security",
            "A type of firewall",
            "A password policy",
            "A backup system"
        ],
        correct: 0
    },
    {
        question: "What is SQL Injection out-of-band?",
        options: [
            "SQL injection using DNS or HTTP requests to extract data",
            "SQL injection that occurs outside normal hours",
            "A type of stored injection",
            "A backup attack method"
        ],
        correct: 0
    },
    {
        question: "What is a securitymisconfiguration?",
        options: [
            "Correct server setup",
            "Improper configuration of security settings that leaves vulnerabilities",
            "A type of firewall",
            "A backup procedure"
        ],
        correct: 1
    },
    {
        question: "What is the principle of least privilege?",
        options: [
            "Giving users maximum permissions",
            "Granting users only the minimum permissions needed to perform their tasks",
            "A type of encryption",
            "A password policy"
        ],
        correct: 1
    },
    {
        question: "What is security through obscurity?",
        options: [
            "A strong security practice",
            "Relying on secrecy of implementation rather than proper security measures",
            "A type of encryption",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is a zero-day vulnerability?",
        options: [
            "A vulnerability that has been fixed",
            "A vulnerability unknown to the vendor with no patch available",
            "A type of firewall",
            "A backup procedure"
        ],
        correct: 1
    },
    {
        question: "What is the goal of application security?",
        options: [
            "Making applications faster",
            "Protecting applications from threats and vulnerabilities throughout their lifecycle",
            "Increasing storage capacity",
            "Reducing development costs"
        ],
        correct: 1
    },
    {
        question: "What is a security baseline?",
        options: [
            "The lowest security settings",
            "A minimum set of security configurations that must be maintained",
            "A type of firewall",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is threat modeling?",
        options: [
            "Creating user interfaces",
            "Identifying, quantifying, and addressing security threats to an application",
            "A type of encryption",
            "A backup procedure"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection Second-Order?",
        options: [
            "SQL injection that occurs immediately",
            "SQL injection where the malicious input is stored and executed later",
            "A type of blind injection",
            "A backup attack"
        ],
        correct: 1
    },
    {
        question: "What is the SameSite cookie attribute?",
        options: [
            "An attribute that limits cookie access to same-site requests",
            "An attribute that encrypts cookies",
            "An attribute that deletes cookies",
            "An attribute that shares cookies"
        ],
        correct: 0
    },
    {
        question: "What is security monitoring?",
        options: [
            "Watching users directly",
            "Continuous monitoring of systems and networks for security events",
            "A type of firewall",
            "A backup procedure"
        ],
        correct: 1
    },
    {
        question: "What is an incident response plan?",
        options: [
            "A marketing strategy",
            "A documented process for handling security incidents",
            "A type of firewall",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is the CIA triad in security?",
        options: [
            "Central Intelligence Agency",
            "Confidentiality, Integrity, Availability - core security principles",
            "A type of encryption",
            "A backup procedure"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection Boolean-based blind?",
        options: [
            "SQL injection that uses true/false conditions to extract data",
            "SQL injection that is always visible",
            "A type of stored injection",
            "A backup technique"
        ],
        correct: 0
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
    },
    {
        question: "How do you prevent SQL Injection in Python Flask?",
        options: [
            "Using string concatenation",
            "Using ORM like SQLAlchemy or parameterized queries",
            "Using eval()",
            "Using exec()"
        ],
        correct: 1
    },
    {
        question: "What is the markupsafe library used for in Python?",
        options: [
            "Marking files as safe",
            "Providing safe HTML strings to prevent XSS attacks",
            "Validating email addresses",
            "Encrypting passwords"
        ],
        correct: 1
    },
    {
        question: "What is CSRF in Python web applications?",
        options: [
            "Cross-Site Request Forgery - an attack that forces users to execute unwanted actions",
            "A type of SQL injection",
            "A password hashing method",
            "A caching mechanism"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of Flask-WTF?",
        options: [
            "Web template framework for forms with CSRF protection",
            "A database library",
            "An encryption library",
            "A logging framework"
        ],
        correct: 0
    },
    {
        question: "What is the principle of least privilege in Python?",
        options: [
            "Giving maximum permissions to all users",
            "Granting only the minimum permissions needed for a task",
            "A type of encryption",
            "A backup strategy"
        ],
        correct: 1
    },
    {
        question: "How do you securely store passwords in Python?",
        options: [
            "Using MD5",
            "Using bcrypt or argon2 for hashing",
            "Storing in plain text",
            "Using base64 encoding"
        ],
        correct: 1
    },
    {
        question: "What is the os.urandom() function used for?",
        options: [
            "Generating random numbers for games",
            "Generating cryptographically secure random bytes",
            "Creating random filenames",
            "Generating test data"
        ],
        correct: 1
    },
    {
        question: "What is the secrets module in Python?",
        options: [
            "A module for hiding files",
            "A module for generating cryptographically strong random numbers suitable for managing data",
            "A module for encryption",
            "A module for compression"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection error-based in Python?",
        options: [
            "SQL injection that causes no errors",
            "A technique that uses database error messages to extract information",
            "An attack on error logs",
            "A way to fix SQL errors"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the hashlib module?",
        options: [
            "Hashing data for lookup tables",
            "Providing secure hash and message digest algorithms",
            "Creating hash maps",
            "File indexing"
        ],
        correct: 1
    },
    {
        question: "What is CORS in Python web applications?",
        options: [
            "Cross-Origin Resource Sharing - allows restricted resources to be requested from another domain",
            "A type of encryption",
            "A password hashing algorithm",
            "A caching system"
        ],
        correct: 0
    },
    {
        question: "What is the PyJWT library used for?",
        options: [
            "Creating JSON Web Tokens for secure authentication",
            "Generating passwords",
            "Encrypting files",
            "Validating email addresses"
        ],
        correct: 0
    },
    {
        question: "What is SQL Injection UNION attack in Python?",
        options: [
            "Using UNION to merge databases",
            "Using UNION SELECT to extract data from other tables",
            "A backup technique",
            "A query optimization"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the ssl module in Python?",
        options: [
            "SSL/TLS encryption for secure network connections",
            "Creating SSL certificates",
            "Validating SSL domains",
            "All of the above"
        ],
        correct: 3
    },
    {
        question: "What is SQL Injection time-based blind in Python?",
        options: [
            "SQL injection that only works at night",
            "A technique that measures response time to infer information",
            "A time-limited attack",
            "A backup method"
        ],
        correct: 1
    },
    {
        question: "What is the Django middleware for security?",
        options: [
            "A hardware component",
            "Software that processes requests and responses for security features",
            "A firewall",
            "An antivirus"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the cryptography library in Python?",
        options: [
            "Creating cryptic puzzles",
            "Providing cryptographic recipes and primitives",
            "Encrypting emails only",
            "Creating digital signatures only"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection Boolean-based blind in Python?",
        options: [
            "SQL injection that uses true/false conditions to extract data",
            "SQL injection that is always visible",
            "A type of stored injection",
            "A backup technique"
        ],
        correct: 0
    },
    {
        question: "What is the Safe Injection method in Python?",
        options: [
            "Injecting drugs safely",
            "Using parameterized queries to safely execute SQL with user input",
            "A medical procedure",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the werkzeug.security module?",
        options: [
            "Physical security",
            "Providing password hashing and URL routing security utilities",
            "Network security",
            "File system security"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection out-of-band in Python?",
        options: [
            "SQL injection using DNS or HTTP requests to extract data",
            "SQL injection that occurs outside normal hours",
            "A type of stored injection",
            "A backup method"
        ],
        correct: 0
    },
    {
        question: "What is the Argon2 password hashing algorithm?",
        options: [
            "A fast hashing algorithm",
            "A memory-hard password hashing algorithm winner of the Password Hashing Competition",
            "A type of encryption",
            "A compression algorithm"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the hmac module in Python?",
        options: [
            "Creating hash maps",
            "Generating and verifying keyed-hash message authentication codes",
            "Validating HTML",
            "Encrypting files"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection Second-Order in Python?",
        options: [
            "SQL injection that occurs immediately",
            "SQL injection where malicious input is stored and executed later",
            "A type of blind injection",
            "A backup attack"
        ],
        correct: 1
    },
    {
        question: "What is the Fernet encryption in Python?",
        options: [
            "A type of sandwich",
            "A symmetric encryption method using AES-CBC with HMAC for authentication",
            "An asymmetric encryption",
            "A hashing algorithm"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the token module in Python?",
        options: [
            "Creating cryptocurrency tokens",
            "Generating secure random tokens for authentication and passwords",
            "Managing API tokens",
            "All of the above"
        ],
        correct: 3
    },
    {
        question: "What is SQL Injection Stacked Queries in Python?",
        options: [
            "Using multiple SELECT statements",
            "Executing multiple SQL statements separated by semicolons",
            "A way to organize queries",
            "A backup technique"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the passlib library in Python?",
        options: [
            "Password management and hashing utilities",
            "File encryption",
            "Network security",
            "Database security"
        ],
        correct: 0
    },
    {
        question: "What is the SameSite cookie attribute in Python Flask?",
        options: [
            "An attribute that limits cookie access to same-site requests",
            "An attribute that encrypts cookies",
            "An attribute that deletes cookies",
            "An attribute that shares cookies"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of the shlex module for security?",
        options: [
            "Shell lexing for safe command parsing",
            "Encrypting shell commands",
            "Validating shell scripts",
            "Running shell commands"
        ],
        correct: 0
    },
    {
        question: "What is SQL Injection where data is extracted via DNS?",
        options: [
            "DNS-based SQL injection - a type of out-of-band injection",
            "A type of stored injection",
            "A backup technique",
            "A query optimization"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of the base64 module in security?",
        options: [
            "Encoding binary data for safe transmission",
            "Encrypting data",
            "Hashing passwords",
            "Compressing data"
        ],
        correct: 0
    },
    {
        question: "What is the Flask-Talisman extension used for?",
        options: [
            "Fortune telling",
            "Setting security headers and enforcing HTTPS in Flask applications",
            "Database security",
            "File encryption"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection Boolean-based blind where conditions are tested?",
        options: [
            "Testing true/false conditions to extract data character by character",
            "Testing database connectivity",
            "Testing server response time",
            "Testing network latency"
        ],
        correct: 0
    },
    {
        question: "What is the purpose of the keyring module in Python?",
        options: [
            "Storing keys on keyrings",
            "Accessing the system keyring for secure credential storage",
            "Generating encryption keys",
            "Managing SSH keys"
        ],
        correct: 1
    },
    {
        question: "What is the security implications of using eval() in Python?",
        options: [
            "No security implications",
            "Can execute arbitrary code - serious security risk",
            "Only affects performance",
            "Only works with integers"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the tpm module in Python security?",
        options: [
            "Total Physical Memory",
            "Trusted Platform Module for hardware-based security",
            "A type of encryption",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection where you infer data from page content?",
        options: [
            "Content-based inference - observing differences in page content",
            "A type of stored injection",
            "A backup technique",
            "A query optimization"
        ],
        correct: 0
    }
];
