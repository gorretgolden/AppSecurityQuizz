const javascriptQuestions = [
    {
        question: "What is SQL Injection in simple terms?",
        options: [
            "A way to make websites load faster",
            "Tricking a database by typing special commands into input fields",
            "A method to encrypt passwords",
            "A way to create new database tables"
        ],
        correct: 1
    },
    {
        question: "How do you prevent SQL Injection?",
        options: [
            "Use long passwords",
            "Use parameterized queries and validate all user input",
            "Hide the database from users",
            "Use a faster internet connection"
        ],
        correct: 1
    },
    {
        question: "What is input validation?",
        options: [
            "Making forms look beautiful",
            "Checking that what a user types matches what you expect (like an email format)",
            "Encrypting user data",
            "Deleting invalid records"
        ],
        correct: 1
    },
    {
        question: "In a car service app, which field could be dangerous if not validated?",
        options: [
            "The car color picker",
            "The customer search box where you type a name",
            "The logo image",
            "The page background color"
        ],
        correct: 1
    },
    {
        question: "What does XSS stand for?",
        options: [
            "Extra Xtra Security",
            "Cross-Site Scripting",
            "Cross-Server System",
            "External Style Sheet"
        ],
        correct: 1
    },
    {
        question: "What does XSS do?",
        options: [
            "Makes websites faster",
            "Injects malicious scripts into websites that run in other users' browsers",
            "Encrypts user passwords",
            "Creates database backups"
        ],
        correct: 1
    },
    {
        question: "What is the main difference between XSS and SQL Injection?",
        options: [
            "They are exactly the same",
            "XSS attacks the user's browser, SQL Injection attacks the database",
            "SQL Injection is outdated",
            "XSS only works on mobile phones"
        ],
        correct: 1
    },
    {
        question: "Which security header helps prevent XSS?",
        options: [
            "Content-Security-Policy",
            "X-Powered-By",
            "Accept-Language",
            "Cache-Control"
        ],
        correct: 0
    },
    {
        question: "What is the OWASP Top 10?",
        options: [
            "Top 10 programming languages",
            "A list of the most critical web application security risks",
            "Top 10 websites",
            "A certification exam"
        ],
        correct: 1
    },
    {
        question: "In Reflected XSS, where is the malicious script found?",
        options: [
            "In the database",
            "In the URL or server response",
            "In the user's password",
            "In the CSS file"
        ],
        correct: 1
    },
    {
        question: "What is the first thing you should do to secure an application?",
        options: [
            "Buy expensive software",
            "Identify what data and assets need protection",
            "Hire more developers",
            "Change the website color"
        ],
        correct: 1
    },
    {
        question: "What does bcrypt do?",
        options: [
            "Styles the login form",
            "Hashes passwords so they are stored securely",
            "Validates email addresses",
            "Creates database backups"
        ],
        correct: 1
    },
    {
        question: "Which type of XSS is saved on the server and affects every visitor?",
        options: [
            "Reflected XSS",
            "Stored XSS",
            "DOM XSS",
            "Server XSS"
        ],
        correct: 1
    },
    {
        question: "What is session hijacking?",
        options: [
            "Creating multiple accounts",
            "Stealing someone's login session to pretend to be them",
            "Logging out all users",
            "Changing your password"
        ],
        correct: 1
    },
    {
        question: "Which of these is a client-side attack (happens in the browser)?",
        options: [
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "Server crash",
            "Database deletion"
        ],
        correct: 1
    },
    {
        question: "What should you do with user input before showing it on a page?",
        options: [
            "Show it exactly as typed",
            "Clean and encode it to remove dangerous code",
            "Convert everything to uppercase",
            "Store it in a cookie"
        ],
        correct: 1
    },
    {
        question: "What does a login system protect?",
        options: [
            "The company's social media",
            "Access to restricted areas like admin dashboards",
            "The internet connection",
            "The computer hardware"
        ],
        correct: 1
    },
    {
        question: "What might you see if a website has been XSS attacked?",
        options: [
            "The website loads faster",
            "Unexpected pop-ups or strange scripts running on the page",
            "The website changes color",
            "The database grows larger"
        ],
        correct: 1
    },
    {
        question: "What day of the App Security course covered SQL Injection?",
        options: [
            "Day 1 - Introduction",
            "Day 2 - SQL Injection & Input Validation",
            "Day 3 - XSS",
            "Day 4 - Final Project"
        ],
        correct: 1
    },
    {
        question: "What is CSRF?",
        options: [
            "A type of SQL injection",
            "An attack that tricks you into performing actions you didn't intend on a website",
            "A password encryption method",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is Content Security Policy (CSP)?",
        options: [
            "A password rule",
            "A security setting that tells the browser which scripts are allowed to run",
            "An encryption tool",
            "A firewall type"
        ],
        correct: 1
    },
    {
        question: "What is the same-origin policy?",
        options: [
            "A rule that lets all websites share data freely",
            "A security rule that prevents one website from accessing data from another website",
            "A password sharing policy",
            "A backup rule"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of HTTPS?",
        options: [
            "To make websites load faster",
            "To encrypt the connection between your browser and the website",
            "To block viruses",
            "To increase storage"
        ],
        correct: 1
    },
    {
        question: "What is a session token?",
        options: [
            "A password",
            "A temporary ID that keeps you logged in as you browse",
            "A type of cookie for ads",
            "An encryption key"
        ],
        correct: 1
    },
    {
        question: "Which of these is NOT a type of XSS?",
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
            "Deleting all form inputs",
            "Cleaning user input to remove harmful characters or code",
            "Encrypting input data",
            "Only validating on the server"
        ],
        correct: 1
    },
    {
        question: "What is CORS?",
        options: [
            "A way for websites to safely request data from other domains",
            "A type of password",
            "An encryption method",
            "A backup system"
        ],
        correct: 0
    },
    {
        question: "What do CSRF tokens do?",
        options: [
            "Speed up the website",
            "Make sure form submissions come from the real website, not a fake one",
            "Encrypt passwords",
            "Track user clicks"
        ],
        correct: 1
    },
    {
        question: "What is a security header?",
        options: [
            "A website banner",
            "An HTTP instruction that tells the browser how to handle security",
            "A login button",
            "A type of cookie"
        ],
        correct: 1
    },
    {
        question: "What does the HttpOnly cookie flag do?",
        options: [
            "Makes cookies visible to JavaScript",
            "Prevents JavaScript from reading the cookie (protects against XSS)",
            "Deletes cookies automatically",
            "Makes cookies last longer"
        ],
        correct: 1
    },
    {
        question: "What is DOM-based XSS?",
        options: [
            "XSS that affects only the server",
            "XSS where the vulnerability is in the page's JavaScript code, not the server",
            "XSS that destroys the website",
            "A type of stored XSS"
        ],
        correct: 1
    },
    {
        question: "What is the Secure cookie flag?",
        options: [
            "Makes cookies more secure by only sending them over HTTPS",
            "Encrypts cookie content",
            "Prevents cookie theft completely",
            "Makes cookies expire faster"
        ],
        correct: 0
    },
    {
        question: "What is the principle of least privilege?",
        options: [
            "Give everyone admin access",
            "Only give people the minimum access they need to do their job",
            "Use the cheapest security tools",
            "Lock all doors"
        ],
        correct: 1
    },
    {
        question: "What is a zero-day vulnerability?",
        options: [
            "A bug that has already been fixed",
            "A security hole that the software maker doesn't know about yet",
            "A type of firewall",
            "A backup plan"
        ],
        correct: 1
    },
    {
        question: "What is the goal of application security?",
        options: [
            "Making apps load faster",
            "Protecting apps from attacks and keeping user data safe",
            "Reducing server costs",
            "Making apps look better"
        ],
        correct: 1
    },
    {
        question: "What is threat modeling?",
        options: [
            "Designing user interfaces",
            "Identifying and planning defenses against possible security threats",
            "Creating encryption keys",
            "Building firewalls"
        ],
        correct: 1
    },
    {
        question: "What is penetration testing?",
        options: [
            "Testing internet speed",
            "Simulating real attacks to find security weaknesses before hackers do",
            "Testing how many users can log in",
            "Checking server storage"
        ],
        correct: 1
    },
    {
        question: "What is security through obscurity?",
        options: [
            "Strong security practice",
            "Relying on keeping your system secret instead of using proper security measures",
            "A type of encryption",
            "A backup strategy"
        ],
        correct: 1
    },
    {
        question: "What is a security audit?",
        options: [
            "A financial review",
            "A thorough check of all security settings and practices in an application",
            "A type of firewall",
            "A password policy document"
        ],
        correct: 1
    },
    {
        question: "What is the SameSite cookie attribute?",
        options: [
            "An attribute that only allows cookies to be sent from the same website",
            "An attribute that shares cookies across sites",
            "An attribute that encrypts cookies",
            "An attribute that deletes old cookies"
        ],
        correct: 0
    },
    {
        question: "What is a security monitoring system?",
        options: [
            "A camera watching users",
            "Continuous checking of systems for suspicious activity and threats",
            "A firewall type",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is an incident response plan?",
        options: [
            "A marketing strategy",
            "A step-by-step guide for what to do when a security breach happens",
            "A type of firewall",
            "A backup plan for data"
        ],
        correct: 1
    },
    {
        question: "What is the CIA triad?",
        options: [
            "Central Intelligence Agency",
            "Confidentiality, Integrity, Availability - the three core principles of security",
            "A type of encryption",
            "A firewall configuration"
        ],
        correct: 1
    },
    {
        question: "What is Cross-Site Scripting payload?",
        options: [
            "The database structure",
            "The actual malicious code that gets injected into a vulnerable website",
            "The server configuration",
            "The encryption key"
        ],
        correct: 1
    },
    {
        question: "Which cookie flag makes sure cookies are only sent over secure HTTPS connections?",
        options: [
            "HttpOnly",
            "Secure",
            "SameSite",
            "Domain"
        ],
        correct: 1
    },
    {
        question: "What is SQL Injection error-based?",
        options: [
            "SQL injection that causes no errors",
            "Using database error messages to learn about the database structure",
            "Fixing SQL errors",
            "A type of backup"
        ],
        correct: 1
    },
    {
        question: "What is the X-Content-Type-Options header?",
        options: [
            "Sets the font size",
            "Prevents the browser from guessing what type of file it is (prevents attacks)",
            "Controls page caching",
            "Sets the language"
        ],
        correct: 1
    },
    {
        question: "What is the X-Frame-Options header?",
        options: [
            "Controls page layout",
            "Prevents your page from being embedded in malicious iframes (clickjacking protection)",
            "Sets frame colors",
            "Controls navigation"
        ],
        correct: 1
    },
    {
        question: "What is vulnerability scanning?",
        options: [
            "Scanning for computer viruses",
            "Automatically checking systems for known security weaknesses",
            "Scanning for malware",
            "Checking network speed"
        ],
        correct: 1
    },
    {
        question: "What is a phishing attack?",
        options: [
            "A way to catch fish online",
            "A fake email or website that tricks you into revealing personal information",
            "A type of fishing game",
            "A password creation method"
        ],
        correct: 1
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: [
            "Using two passwords",
            "Adding an extra layer of security by requiring a second form of verification",
            "Logging in from two devices",
            "Having two user accounts"
        ],
        correct: 1
    },
    {
        question: "What is a strong password?",
        options: [
            "Your name followed by numbers",
            "A mix of uppercase, lowercase, numbers, and special characters",
            "A short word that is easy to remember",
            "Your birthday"
        ],
        correct: 1
    },
    {
        question: "What is a SQL Injection login bypass?",
        options: [
            "Using a strong password to log in",
            "Entering special characters in the login form to gain unauthorized access",
            "Forgetting your password",
            "Being locked out after too many attempts"
        ],
        correct: 1
    },
    {
        question: "What does it mean to encrypt data?",
        options: [
            "Deleting the data",
            "Converting data into a coded format that can only be read with a key",
            "Copying the data to another location",
            "Compressing the data to make it smaller"
        ],
        correct: 1
    },
    {
        question: "What is a security patch?",
        options: [
            "A type of bandage for computers",
            "An update that fixes security holes in software",
            "A new feature for the application",
            "A backup copy of the data"
        ],
        correct: 1
    },
    {
        question: "Why should you never store passwords in plain text?",
        options: [
            "It takes up too much space",
            "Anyone who accesses the database can see all the passwords",
            "It makes the website slower",
            "It is not allowed by law"
        ],
        correct: 1
    },
    {
        question: "What is a web application firewall (WAF)?",
        options: [
            "A wall that protects the building",
            "A security layer that filters and monitors traffic to a web application",
            "A type of antivirus",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is cross-site scripting (XSS) reflected?",
        options: [
            "XSS that is stored permanently",
            "XSS where the malicious script bounces off the server back to the user",
            "XSS that only works on desktop",
            "XSS that deletes the website"
        ],
        correct: 1
    },
    {
        question: "What is the most common way attackers find vulnerabilities?",
        options: [
            "Reading the user manual",
            "Scanning the website for known weaknesses and misconfigurations",
            "Asking the developer nicely",
            "Looking at the website's color scheme"
        ],
        correct: 1
    },
    {
        question: "What is a database backup and why is it important for security?",
        options: [
            "A copy of data stored elsewhere so you can restore it if the original is lost or attacked",
            "A way to make the database faster",
            "A type of encryption",
            "A password manager"
        ],
        correct: 0
    }
];

const pythonQuestions = [
    {
        question: "What is the OWASP Top 10?",
        options: [
            "A list of the most popular Python libraries",
            "A list of the 10 most critical web application security risks",
            "The top 10 programming languages",
            "A certification exam for developers"
        ],
        correct: 1
    },
    {
        question: "Which OWASP risk is about attackers injecting malicious SQL code into your app?",
        options: [
            "Broken Authentication",
            "SQL Injection",
            "Cross-Site Scripting",
            "Insecure Deserialization"
        ],
        correct: 1
    },
    {
        question: "What is the safest way to run a database query with user input in Python?",
        options: [
            "Use f-strings: f\"SELECT * FROM users WHERE name='{name}'\"",
            "Use parameterized queries: cursor.execute('SELECT * FROM users WHERE name=?', (name,))",
            "Use string concatenation: 'SELECT * FROM users WHERE name=' + name",
            "Use the eval() function"
        ],
        correct: 1
    },
    {
        question: "Why is eval() dangerous in Python?",
        options: [
            "It is too slow for production use",
            "It can execute any code the attacker wants, including system commands",
            "It only works in Python 2",
            "It cannot handle large numbers"
        ],
        correct: 1
    },
    {
        question: "What is Cross-Site Scripting (XSS) in simple terms?",
        options: [
            "Attacking a database with SQL commands",
            "Injecting malicious JavaScript into a webpage that runs in other users' browsers",
            "Hacking into a server physically",
            "Sending spam emails"
        ],
        correct: 1
    },
    {
        question: "How do you prevent XSS when displaying user input in an HTML page?",
        options: [
            "Just display it as-is, the browser handles it",
            "Escape or sanitize the output before rendering it in HTML",
            "Convert it to uppercase",
            "Store it in a database first"
        ],
        correct: 1
    },
    {
        question: "What is Broken Authentication (OWASP)?",
        options: [
            "When your login page looks ugly",
            "Weaknesses in login systems that let attackers guess or steal passwords",
            "When a user forgets their password",
            "When a website is down"
        ],
        correct: 1
    },
    {
        question: "Which Python library is used to securely hash passwords?",
        options: [
            "requests",
            "bcrypt",
            "numpy",
            "pandas"
        ],
        correct: 1
    },
    {
        question: "Why should you NEVER store passwords in plain text?",
        options: [
            "It uses too much storage space",
            "If the database is leaked, attackers can see everyone's password",
            "It makes the login page load slowly",
            "Python does not allow it"
        ],
        correct: 1
    },
    {
        question: "What is a CSRF attack?",
        options: [
            "An attack on the database",
            "An attack that tricks a logged-in user into performing an unwanted action on your site",
            "An attack that steals cookies from the server",
            "An attack that changes the website's color"
        ],
        correct: 1
    },
    {
        question: "How do you protect a Flask form against CSRF?",
        options: [
            "Use a longer password",
            "Use a CSRF token that validates each form submission",
            "Hide the form from users",
            "Use JavaScript only"
        ],
        correct: 1
    },
    {
        question: "What does 'input validation' mean?",
        options: [
            "Making forms look nice on screen",
            "Checking that user input matches what you expect before processing it",
            "Encrypting user input",
            "Deleting all user input"
        ],
        correct: 1
    },
    {
        question: "A user submits this in a name field: <script>alert('hacked')</script>. What type of attack is this?",
        options: [
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "Buffer Overflow",
            "DDoS Attack"
        ],
        correct: 1
    },
    {
        question: "What is Insecure Deserialization?",
        options: [
            "Using weak encryption",
            "Trusting data that has been converted from a stored format without checking it",
            "Storing data in the wrong database",
            "Using JSON instead of XML"
        ],
        correct: 1
    },
    {
        question: "Why is using pickle.loads() on untrusted data dangerous?",
        options: [
            "It is too slow",
            "An attacker can craft malicious pickle data to execute arbitrary code on your server",
            "It only works with numbers",
            "It deletes your data"
        ],
        correct: 1
    },
    {
        question: "What is a Security Misconfiguration?",
        options: [
            "When the website color scheme is wrong",
            "Leaving default settings, open ports, or unnecessary features that attackers can exploit",
            "When the server is too fast",
            "When the database is too small"
        ],
        correct: 1
    },
    {
        question: "What is the principle of least privilege?",
        options: [
            "Give every user admin access so they can do everything",
            "Give users only the minimum permissions they need to do their job",
            "Lock all doors and never let anyone in",
            "Use the cheapest hosting provider"
        ],
        correct: 1
    },
    {
        question: "In a Python web app, where should you validate user input?",
        options: [
            "Only in the browser (JavaScript)",
            "On the server side, never trust client-side validation alone",
            "In the database",
            "In the email system"
        ],
        correct: 1
    },
    {
        question: "What is a SQL Injection login bypass?",
        options: [
            "Using a very long password",
            "Typing something like ' OR '1'='1 in the login field to gain unauthorized access",
            "Forgetting your password",
            "Getting locked out after too many tries"
        ],
        correct: 1
    },
    {
        question: "What does HTTPS protect against?",
        options: [
            "Viruses on your computer",
            "Eavesdropping and tampering with data between the browser and server",
            "Slow internet connections",
            "Power outages"
        ],
        correct: 1
    },
    {
        question: "What is a session token?",
        options: [
            "Your password",
            "A temporary value that keeps a user logged in as they browse",
            "A type of encryption key",
            "A database backup file"
        ],
        correct: 1
    },
    {
        question: "What is Sensitive Data Exposure (OWASP)?",
        options: [
            "When a website loads slowly",
            "When sensitive data like passwords or credit cards are not properly protected and can be stolen",
            "When a user shares their data voluntarily",
            "When the database is too large"
        ],
        correct: 1
    },
    {
        question: "How should you store sensitive configuration values like API keys in a Python app?",
        options: [
            "Hardcode them directly in your .py files",
            "Use environment variables or a secrets manager",
            "Put them in a public GitHub repo",
            "Send them in an email"
        ],
        correct: 1
    },
    {
        question: "What is an SQL Injection UNION attack?",
        options: [
            "Combining two databases",
            "Using UNION SELECT to pull data from other tables into the original query results",
            "Merging two user accounts",
            "A type of password attack"
        ],
        correct: 1
    },
    {
        question: "What is the OWASP risk 'Broken Access Control'?",
        options: [
            "When a user cannot log in",
            "When users can access data or perform actions they are not authorized for",
            "When the server is down",
            "When the website design is broken"
        ],
        correct: 1
    },
    {
        question: "In Python, why is os.system() dangerous when handling user input?",
        options: [
            "It is deprecated in Python 3",
            "An attacker can inject shell commands through unsanitized user input",
            "It only works on Windows",
            "It cannot connect to the internet"
        ],
        correct: 1
    },
    {
        question: "What is rate limiting?",
        options: [
            "Limiting the speed of the internet",
            "Restricting how many requests a user can make in a given time period to prevent abuse",
            "Limiting the number of database tables",
            "Setting a maximum file size"
        ],
        correct: 1
    },
    {
        question: "What is the danger of using exec() in Python with user input?",
        options: [
            "It runs too fast",
            "An attacker can execute arbitrary Python code on your server",
            "It cannot handle strings",
            "It only works with integers"
        ],
        correct: 1
    },
    {
        question: "What is a CORS misconfiguration?",
        options: [
            "When CSS does not load properly",
            "When a server allows any website to access its data, exposing it to attacks",
            "When the database is not connected",
            "When the server is too slow"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the Content-Security-Policy (CSP) header?",
        options: [
            "To make the website load faster",
            "To tell the browser which scripts, styles, and resources are allowed to load",
            "To encrypt passwords",
            "To set the website background color"
        ],
        correct: 1
    },
    {
        question: "What is Path Traversal?",
        options: [
            "Walking through a forest",
            "An attack where a user manipulates file paths to access files outside the intended directory",
            "A type of encryption",
            "A database optimization technique"
        ],
        correct: 1
    },
    {
        question: "A Python app uses: open('/uploads/' + user_input). What vulnerability is this?",
        options: [
            "SQL Injection",
            "Path Traversal — the user could type '../../etc/passwd' to read system files",
            "XSS",
            "CSRF"
        ],
        correct: 1
    },
    {
        question: "What is the 'X-Frame-Options' HTTP header used for?",
        options: [
            "Setting the page font",
            "Preventing your page from being loaded in a malicious iframe (clickjacking)",
            "Controlling cookies",
            "Setting the page language"
        ],
        correct: 1
    },
    {
        question: "What is clickjacking?",
        options: [
            "Clicking on ads repeatedly",
            "Tricking a user into clicking on something they did not intend by hiding it under another element",
            "A type of DDoS attack",
            "Stealing cookies"
        ],
        correct: 1
    },
    {
        question: "What is the HttpOnly flag on a cookie?",
        options: [
            "Makes the cookie visible to JavaScript",
            "Prevents JavaScript from accessing the cookie, protecting it from XSS theft",
            "Deletes the cookie after one hour",
            "Makes the cookie larger"
        ],
        correct: 1
    },
    {
        question: "What is a dictionary attack?",
        options: [
            "Looking up words in a dictionary",
            "Trying every word in a list of common passwords to guess a user's password",
            "A type of SQL injection",
            "A way to encrypt data"
        ],
        correct: 1
    },
    {
        question: "What is the safest way to compare two secrets (like tokens) in Python to prevent timing attacks?",
        options: [
            "Use == operator",
            "Use hmac.compare_digest() which takes the same time regardless of where they differ",
            "Use len() to compare lengths",
            "Use 'in' operator"
        ],
        correct: 1
    },
    {
        question: "What is a Web Application Firewall (WAF)?",
        options: [
            "A physical wall around a server room",
            "A security layer that filters and monitors HTTP traffic to and from a web application",
            "A type of antivirus software",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is the OWASP risk 'Security Logging and Monitoring Failures'?",
        options: [
            "When the website logs are colorful",
            "When the app does not properly record security events, making it hard to detect attacks",
            "When logging is too verbose",
            "When the database is too small"
        ],
        correct: 1
    },
    {
        question: "Why is logging important for application security?",
        options: [
            "It makes the app run faster",
            "It helps detect, investigate, and respond to security incidents",
            "It improves the website design",
            "It reduces server costs"
        ],
        correct: 1
    },
    {
        question: "What is a security patch?",
        options: [
            "A type of bandage for computers",
            "An update that fixes known security vulnerabilities in software",
            "A new feature for the app",
            "A backup of the database"
        ],
        correct: 1
    },
    {
        question: "What is the CIA Triad in cybersecurity?",
        options: [
            "Criminal Investigation Agency",
            "Confidentiality, Integrity, Availability — the three pillars of security",
            "A type of encryption",
            "A firewall framework"
        ],
        correct: 1
    },
    {
        question: "What does 'Confidentiality' mean in the CIA Triad?",
        options: [
            "The system is always available",
            "Only authorized users can access the data",
            "The data is always accurate",
            "The system is fast"
        ],
        correct: 1
    },
    {
        question: "What does 'Integrity' mean in the CIA Triad?",
        options: [
            "The system is always online",
            "Data is accurate and has not been tampered with",
            "Only admins can log in",
            "The website looks professional"
        ],
        correct: 1
    },
    {
        question: "What is a zero-day vulnerability?",
        options: [
            "A bug that has already been fixed",
            "A security flaw that the vendor does not know about yet and has no patch for",
            "A type of firewall",
            "A backup system"
        ],
        correct: 1
    },
    {
        question: "What is a phishing attack?",
        options: [
            "A way to catch fish online",
            "A fake email or website that tricks you into revealing personal information",
            "A type of fishing game",
            "A password creation tool"
        ],
        correct: 1
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: [
            "Using two passwords",
            "Adding an extra layer of security by requiring a second form of verification",
            "Logging in from two devices at the same time",
            "Having two user accounts"
        ],
        correct: 1
    },
    {
        question: "What is the danger of putting secrets (API keys, passwords) in a Git repository?",
        options: [
            "Git does not allow it",
            "Anyone with access to the repo can see and steal the secrets",
            "It makes the code run slower",
            "It uses too much storage"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of a .env file in a Python project?",
        options: [
            "To store the website design",
            "To keep secrets like API keys out of your code and loaded from environment variables",
            "To store user passwords in plain text",
            "To cache website pages"
        ],
        correct: 1
    },
    {
        question: "What is a vulnerability scanner?",
        options: [
            "An antivirus program",
            "A tool that automatically checks systems for known security weaknesses",
            "A device that scans paper documents",
            "A speed test for the internet"
        ],
        correct: 1
    },
    {
        question: "What is penetration testing?",
        options: [
            "Testing internet speed",
            "Simulating real attacks to find security weaknesses before hackers do",
            "Testing how many users can log in at once",
            "Checking server disk space"
        ],
        correct: 1
    },
    {
        question: "What is the most common first step in a real-world attack?",
        options: [
            "Buying expensive tools",
            "Scanning for known vulnerabilities and misconfigurations",
            "Calling the company",
            "Reading the user manual"
        ],
        correct: 1
    },
    {
        question: "What is a SQL Injection blind attack?",
        options: [
            "SQL injection where the database is hidden",
            "SQL injection where the app gives no visible error, so the attacker infers data from response differences",
            "SQL injection that works only at night",
            "SQL injection on a blind user"
        ],
        correct: 1
    },
    {
        question: "Why should you use 'from werkzeug.security import generate_password_hash' instead of MD5?",
        options: [
            "MD5 is faster",
            "Werkzeug uses strong hashing with salting, while MD5 is fast to crack",
            "MD5 does not work in Python",
            "Werkzeug is a smaller library"
        ],
        correct: 1
    },
    {
        question: "What is a security header?",
        options: [
            "A banner on the website",
            "An HTTP response instruction that tells the browser how to handle security",
            "A login button",
            "A type of cookie"
        ],
        correct: 1
    },
    {
        question: "What is the X-Content-Type-Options header used for?",
        options: [
            "Setting the page title",
            "Preventing the browser from guessing file types, reducing the risk of drive-by downloads",
            "Controlling page caching",
            "Setting the font size"
        ],
        correct: 1
    },
    {
        question: "What is OWASP Top 10 risk 'Using Components with Known Vulnerabilities'?",
        options: [
            "Using too many Python packages",
            "Using outdated libraries or frameworks that have public security flaws attackers can exploit",
            "Writing too much code",
            "Using open-source software"
        ],
        correct: 1
    },
    {
        question: "How can you check if your Python dependencies have known vulnerabilities?",
        options: [
            "Read the code line by line",
            "Use tools like 'pip-audit' or 'safety check' to scan installed packages",
            "Ask on social media",
            "Check the file size of each package"
        ],
        correct: 1
    },
    {
        question: "What is a salt in password hashing?",
        options: [
            "A type of encryption key",
            "Random data added to a password before hashing to make it harder to crack",
            "A way to speed up login",
            "A type of cookie"
        ],
        correct: 1
    },
    {
        question: "What is a security incident response?",
        options: [
            "Building a new website",
            "The process of identifying, containing, and recovering from a security breach",
            "Installing antivirus software",
            "Changing the website domain"
        ],
        correct: 1
    }
];