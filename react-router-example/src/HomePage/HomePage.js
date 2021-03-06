import React from 'react';

const HomePage = () => (
<main>
<section class="landing">
    <div class="main-content">
        <h1>Hi, I'm Asim,</h1>
        <p class="brief-bio">I enjoy building products that users will love. I transferred from University of Illinois College of Engineering
        to the <a href="https://www.makeschool.com">Make School Product College</a> in San Fransisco. I'm specializing in full stack web
        development and currently open for internship opportunities.</p>

        <ul class="project-container hover_kids">
            <li class="title"><strong>Recent Projects: </strong></li>
            <a href="https://www.untilafter.life"><li>📖 Until After</li></a>
            <a href="https://www.techmade.co"><li>💻 Tech Made</li></a>
            <a href="https://www.bondfire.me"><li>🔥 Bondfire</li></a>
        </ul>
    </div>
    <div class="side-content">
        <img src="/assets/avatar_v2.jpg" alt="" />
        <h1>「 Asim Zaidi 」</h1>
        <ul class="hover_kids">
            <li><i class="fas fa-envelope"></i></li>
            <li><i class="fab fa-linkedin"></i></li>
            <li><i class="fab fa-github"></i></li>
            <li><i class="fab fa-medium-m"></i></li>
            <li><i class="fab fa-twitter"></i></li>
        </ul>
        <a href="#resume-section"><button class="resume" type="button" name="button">Resume</button></a>
    </div>
</section>
    <i class="fas fa-chevron-circle-down hover"></i>
    <div class="resume-section" id="resume-section">
        <h1>MY RESUME</h1>
        {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> --> */}
        <embed class="resume-pdf" src="/assets/Asim_Resume.pdf"/>
    </div>
</main>
);


export default HomePage;
