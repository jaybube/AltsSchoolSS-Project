# AltsSchoolSS-Project
Alt School Second semester exam

# MY PUBLIC IP AND DOMAIN NAME
* 34.243.79.200
* ebukaaws.xyz


This README documents the comprehensive steps taken to provision, configure, and deploy a dynamic web application prototype on AWS EC2.

 # Project Objective
To create a dynamic prototype of a web application showcasing technical skills, featuring interactive elements and professional deployment, capable of presenting a startup idea and professional background.

# Step-by-Step Implementation Guide
Phase 1: Planning and Preparation

# Technologies Confirmed:
1 Cloud Provider: AWS (EC2)
   
2 Operating System: Ubuntu Server 22.04 LTS

3 Web Server: Nginx

4 Dynamic Content: Node.js with Express.js

5 HTML, CSS (with Tailwind CSS for styling)

6 Process Management: PM2

7 Security: Let's Encrypt (Certbot)

# Phase 2: Provisioning the Server (AWS EC2)

AWS Account Creation:

EC2 Instance Launch:

Logged into the AWS Management Console and navigated to the EC2 dashboard.

Launched a new instance, selecting "Ubuntu Server 22.04 LTS (HVM), SSD Volume Type" (64-bit x86).

Chose t2.micro as the instance type.

Kept default instance details and storage (8GB General Purpose SSD).

Key Pair Creation

Allowed SSH (Port 22) from My IP for secure access.

Allowed HTTP (Port 80) from Anywhere (0.0.0.0/0) for web traffic.

Allowed HTTPS (Port 443) from Anywhere (0.0.0.0/0) for secure web traffic.

Reviewed settings and launched the instance.

* Connecting to EC2 Instance.
  
 * Ran to ensure my key is not publicly viewable.

```bash
chmod 400 "AltSS.pem"
```
Connected with ssh  

```bash
ssh -i "AltSS.pem" ubuntu@ec2-34-243-79-200.eu-west-1.compute.amazonaws.com
```


# Phase 3: Web Server Setup (Nginx & Node.js)

Updated and upgraded packages:
```Bash
sudo apt update
sudo apt upgrade -y
```

* Installed  nginx 

```Bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```
Verified Nginx by accessing the EC2 instance's public IP in a browser, confirming the Nginx welcome page

* Installed firewall for security

```Bash
sudo apt install ufw -y
```

* Allowed traffic from ssh (port 22 ) http (port 80) https (port 443)

```Bash
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow http
```

* Confirm ufw changes

```Bash
sudo ufw status
```



* Installed Node.js and npm to run and build the web app

```Bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc # Or ~/.profile or ~/.zshrc depending on your shell
nvm install --lts
nvm use --lts
node -v
npm -v
```
* Created  project directory and  landing page 

```Bash
mkdir ~/my-web-app
cd ~/my-web-app
```
* Initialized Node.js project:
```Bash
npm init -y
```
* Installed Express.js to build simpler and quicker web application

```Bash
npm install express
```
*Created app.js with the dynamic content.

```JavaScript
// ~/my-web-app/app.js
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en" class="scroll-smooth">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ewelie Joseph Ebuka - Cloud Engineer</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #f3f4f6; /* Light gray background */
                    color: #374151; /* Dark gray text */
                }
                .container {
                    max-width: 1200px;
                }
                .gradient-bg {
                    background: linear-gradient(to right, #6366f1, #8b5cf6); /* Purple gradient */
                }
                .shadow-custom {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }
                /* Custom animations */
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleUp {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
                .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
                .animate-scale-up { animation: scaleUp 0.8s ease-out forwards; }
                /* Delay animations for a staggered effect */
                .animate-delay-100 { animation-delay: 0.1s; }
                .animate-delay-300 { animation-delay: 0.3s; }
                .animate-delay-500 { animation-delay: 0.5s; }
            </style>
        </head>
        <body class="antialiased">

            <nav class="bg-gray-800 p-4 sticky top-0 z-50 shadow-md">
                <div class="container mx-auto flex justify-between items-center">
                    <a href="#home" class="text-white text-2xl font-bold tracking-wide hover:text-purple-400 transition-colors duration-300">Ewelie Joseph Ebuka</a>

                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="text-white focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <ul class="hidden md:flex space-x-8">
                        <li><a href="#home" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">Home</a></li>
                        <li><a href="#about" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">About</a></li>
                        <li><a href="#skills" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">Skills</a></li>
                        <li><a href="#experience" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">Experience</a></li>
                        <li><a href="#projects" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">Projects</a></li>
                    </ul>
                </div>

                <div id="mobile-menu" class="hidden md:hidden bg-gray-700 mt-4 rounded-md">
                    <ul class="flex flex-col items-center py-2 space-y-2">
                        <li><a href="#home" class="block py-2 px-4 text-white hover:bg-gray-600 rounded-md w-full text-center transition-colors duration-300">Home</a></li>
                        <li><a href="#about" class="block py-2 px-4 text-white hover:bg-gray-600 rounded-md w-full text-center transition-colors duration-300">About</a></li>
                        <li><a href="#skills" class="block py-2 px-4 text-white hover:bg-gray-600 rounded-md w-full text-center transition-colors duration-300">Skills</a></li>
                        <li><a href="#experience" class="block py-2 px-4 text-white hover:bg-gray-600 rounded-md w-full text-center transition-colors duration-300">Experience</a></li>
                        <li><a href="#projects" class="block py-2 px-4 text-white hover:bg-gray-600 rounded-md w-full text-center transition-colors duration-300">Projects</a></li>
                    </ul>
                </div>
            </nav>

            <header id="home" class="gradient-bg text-white py-20 px-4 sm:px-6 lg:px-8 rounded-b-xl shadow-lg">
                <div class="container mx-auto flex flex-col items-center text-center">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-down animate-delay-100">
                        Ewelie Joseph Ebuka
                    </h1>
                    <p class="text-xl sm:text-2xl lg:text-3xl font-light mb-6 animate-fade-in animate-delay-300">
                        Cloud Engineer
                    </p>
                    <div class="bg-white text-gray-800 p-6 sm:p-8 rounded-lg shadow-custom max-w-3xl animate-scale-up animate-delay-500">
                        <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-purple-700">
                            Project: The Future of Tech in Real Estate
                        </h2>
                        <p class="text-lg sm:text-xl leading-relaxed">
                            This project reimagines property management and development through cutting-edge cloud infrastructure.
                            By leveraging scalable solutions and data analytics, it aims to create intelligent, secure,
                            and highly efficient platforms that transform how real estate businesses operate and interact with their assets.
                        </p>
                    </div>
                </div>
            </header>

            <section id="about" class="py-16 px-4 sm:px-6 lg:px-8">
                <div class="container mx-auto bg-white p-8 rounded-lg shadow-custom">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
                        About Ewelie Joseph Ebuka
                    </h2>

                    <div class="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 class="text-2xl font-semibold text-purple-700 mb-4">Professional Bio</h3>
                            <p class="text-lg leading-relaxed text-gray-700 mb-6">
                                Ewelie Joseph Ebuka is a dedicated and innovative Cloud Engineer with a passion for building robust,
                                scalable, and secure cloud solutions. With a strong background in AWS, Azure, and Google Cloud Platform,
                                Ewelie excels at designing, deploying, and managing cloud-native applications and infrastructure.
                                Their expertise spans across various cloud services, including serverless computing, containerization,
                                CI/CD pipelines, and infrastructure as code.
                            </p>

                            <h3 class="text-2xl font-semibold text-purple-700 mb-4">Education</h3>
                            <ul class="list-disc list-inside text-lg text-gray-700 space-y-2">
                                <li>B.Sc. Geology, University of Port Harcourt</li>
                                <li>Certifications: AWS Certified Solutions Architect - Professional, Azure Solutions Architect Expert, Google Cloud Professional Cloud Architect</li>
                            </ul>
                        </div>

                        <div>
                            <h3 id="skills" class="text-2xl font-semibold text-purple-700 mb-4">Skills</h3>
                            <div class="flex flex-wrap gap-3 mb-8">
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">AWS</span>
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">Azure</span>
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">GCP</span>
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">Docker</span>
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">Kubernetes</span>
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">Jenkins</span>
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">Terraform</span>
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">Python</span>
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">CI/CD</span>
                                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-200 transition duration-300">DevOps</span>
                            </div>

                            <h3 id="experience" class="text-2xl font-semibold text-purple-700 mb-4">Past Experiences</h3>
                            <ul class="space-y-4 text-gray-700">
                                <li>
                                    <p class="font-medium text-lg">Senior Cloud Engineer at InnovateTech Solutions</p>
                                    <p class="text-base italic">Led the migration of on-premise infrastructure to AWS, reducing operational costs by 30%.</p>
                                </li>
                                <li>
                                    <p class="font-medium text-lg">Cloud Consultant at NextGen Cloud Services</p>
                                    <p class="text-base italic">Designed and implemented scalable cloud architectures for various enterprise clients.</p>
                                </li>
                                <li>
                                    <p class="font-medium text-lg">DevOps Engineer at CloudBurst Corp</p>
                                    <p class="text-base italic">Developed and maintained CI/CD pipelines, improving deployment frequency by 50%.</p>
                                </li>
                            </ul>

                            <h3 id="projects" class="text-2xl font-semibold text-purple-700 mt-8 mb-4">Past Projects</h3>
                            <ul class="space-y-4 text-gray-700">
                                <li>
                                    <p class="font-medium text-lg">Automated Cloud Cost Optimization Tool</p>
                                    <p class="text-base italic">Developed a Python-based tool that uses AWS APIs to identify and optimize underutilized cloud resources, saving significant costs for clients.</p>
                                </li>
                                <li>
                                    <p class="font-medium text-lg">Containerized Microservices Platform</p>
                                    <p class="text-base italic">Designed and deployed a highly available microservices architecture using Kubernetes on Azure, ensuring seamless scalability and resilience.</p>
                                </li>
                                <li>
                                    <p class="font-medium text-lg">Serverless Data Processing Pipeline</p>
                                    <p class="text-base italic">Implemented a real-time data ingestion and processing pipeline using AWS Lambda, Kinesis, and S3 for a large-scale analytics project.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="bg-gray-800 text-white py-8 text-center rounded-t-xl mt-12">
                <div class="container mx-auto">
                    <p>&copy; 2025 Ewelie Joseph Ebuka. All rights reserved.</p>
                </div>
            </footer>

            <script>
                // JavaScript for mobile menu toggle
                document.addEventListener('DOMContentLoaded', () => {
                    const mobileMenuButton = document.getElementById('mobile-menu-button');
                    const mobileMenu = document.getElementById('mobile-menu');

                    mobileMenuButton.addEventListener('click', () => {
                        mobileMenu.classList.toggle('hidden');
                    });

                    // Close mobile menu when a link is clicked
                    mobileMenu.querySelectorAll('a').forEach(link => {
                        link.addEventListener('click', () => {
                            mobileMenu.classList.add('hidden');
                        });
                    });
                });
            </script>

        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(Node.js app listening on port ${port});
});
```



* Ran Node.js App with PM2 because it keeps in running continuosly and automatically restarts when it crashes.
```Bash
npm install -g pm2
pm2 start app.js --name "my-web-app"
pm2 save
pm2 startup 
```
# Configure Nginx as a Reverse Proxy
* Created a new Nginx configuration file
```Bash
sudo nano /etc/nginx/sites-available/my-web-app
```
* Made configurations

```nginx
server {
    listen 80;
    server_name 34.243.79.200;

    location / {

        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```


* Created a symbolic link to enable the site
```Bash
sudo ln -s /etc/nginx/sites-available/my-web-app /etc/nginx/sites-enabled/
```
* Tested Nginx configuration to check if it was successful
```bash
sudo nginx -t
```
Reloaded Nginx
```bash
sudo systemctl reload nginx.
```
# Phase 4: Networking & Security (Production-Ready)

* Bought a domain name on Namecheap and connected my public ip to it and added the domain name to point to the EC2 instance's Elastic IP address using A Records..

  
* Secured with Let's Encrypt SSL (Certbot):

* Certbot Installation to get and manage SSL certificates for my domain name

* Command to install Certbot
  
```bash
sudo snap install core
sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

* Obtained SSL Certificate

```Bash
sudo certbot --nginx -d ebukaaws.xyz -d www.ebukaaws.xyz
```

# Phase 5: Final Review & Submission

Public IP/Domain Access Verified: Successfully accessed the web application via both the EC2 Public IP (HTTP) and the custom domain (HTTPS).
All Requirements Met: Server provisioned, Nginx reverse proxy configured, dynamic Node.js/Express landing page deployed, HTTP/HTTPS security implemented with Let's Encrypt, and all specified content included.
