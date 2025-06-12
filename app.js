// ~/my-web-app/app.js
const express = require('express');
const app = express();
const port = 3000; // Node.js app will run on port 3000

app.get('/', (req, res) => {
    // !!! VERY IMPORTANT: The string below STARTS and ENDS with a BACKTICK (`) !!!
    // A backtick is NOT a single quote ('). It's usually near the "1" key on your keyboard.
    res.send(`
        <!DOCTYPE html>
        <html lang="en" class="scroll-smooth">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ewelie Joseph Ebuka - Cloud Engineer</title>
            <!-- Tailwind CSS CDN -->
            <script src="https://cdn.tailwindcss.com"></script>
            <!-- Google Fonts - Inter -->
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

            <!-- Navbar -->
            <nav class="bg-gray-800 p-4 sticky top-0 z-50 shadow-md">
                <div class="container mx-auto flex justify-between items-center">
                    <!-- Logo/Name -->
                    <a href="#home" class="text-white text-2xl font-bold tracking-wide hover:text-purple-400 transition-colors duration-300">Ewelie Joseph Ebuka</a>

                    <!-- Mobile menu button -->
                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="text-white focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Desktop Menu -->
                    <ul class="hidden md:flex space-x-8">
                        <li><a href="#home" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">Home</a></li>
                        <li><a href="#about" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">About</a></li>
                        <li><a href="#skills" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">Skills</a></li>
                        <li><a href="#experience" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">Experience</a></li>
                        <li><a href="#projects" class="text-white hover:text-purple-400 transition-colors duration-300 text-lg font-medium">Projects</a></li>
                    </ul>
                </div>

                <!-- Mobile Menu (hidden by default) -->
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

            <!-- Hero Section -->
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

            <!-- Professional Bio Section -->
            <section id="about" class="py-16 px-4 sm:px-6 lg:px-8">
                <div class="container mx-auto bg-white p-8 rounded-lg shadow-custom">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
                        About Ewelie Joseph Ebuka
                    </h2>

                    <div class="grid md:grid-cols-2 gap-12">
                        <!-- Bio Text -->
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

                        <!-- Skills, Experience, and Projects -->
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

            <!-- Footer -->
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
    console.log(`Node.js app listening on port ${port}`);
});
