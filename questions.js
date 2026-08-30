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
        question: "How do you prevent SQL Injection in Python?",
        options: [
            "Use long passwords",
            "Use parameterized queries instead of string concatenation",
            "Hide the database file",
            "Use a faster computer"
        ],
        correct: 1
    },
    {
        question: "What is input validation?",
        options: [
            "Making forms look beautiful",
            "Checking that what a user types matches what you expect",
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
        question: "Which library helps hash passwords securely in Python?",
        options: [
            "requests",
            "bcrypt",
            "flask",
            "numpy"
        ],
        correct: 1
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
        question: "What does bcrypt do in Python?",
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
        question: "What is CSRF and how do you prevent it?",
        options: [
            "A type of XSS - prevent with CSP headers",
            "A fake form submission attack - prevent with CSRF tokens",
            "A password attack - prevent with hashing",
            "A database attack - prevent with encryption"
        ],
        correct: 1
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
        question: "Which Python library is commonly used for password hashing?",
        options: [
            "hashlib",
            "bcrypt",
            "Both hashlib and bcrypt",
            "requests"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of CSRF tokens in Python web frameworks?",
        options: [
            "To encrypt database connections",
            "To prevent Cross-Site Request Forgery by validating form submissions",
            "To speed up page loading",
            "To compress HTTP responses"
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