/* ========== Thêm Project ========== */
function addProject() {
  document.write(`
            <section class="project" id="project">
            <div class="container-xl px-4 py-5" id="featured-3">
                <h2 class="pb-2 text-primary h1 fs p-3" data-aos="fade-right">My Projects
                    <hr class="text-body-secondary">
                </h2>
                <div class="row g-5 py-5 row-cols-1 row-cols-lg-3 row-cols-md-2 bd" data-aos="zoom-in">
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/quiz.avif" alt="quiz" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">Interactive Quiz Platform</h2>
                            <p class="desc">A comprehensive quiz platform with user authentication, progress tracking, and admin dashboard. Built with React, Redux, SCSS, and modern UI libraries.</p>
                            <a href="https://github.com/AiNga04/my-base-react-redux" target="_blank" class="btn btn-primary">
                                <span class="btn-transition">View on Github</span>
                            </a>
                        </div>
                    </div>
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/soundcloud.jpg" alt="soundcloud" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">SoundCloud Website</h2>
                            <p class="desc">A music streaming platform with waveform visualization, playlist management, and user authentication. Built with Next.js, Redux, MUI, TypeScript, and more.</p>
                            <a href="https://github.com/AiNga04/nextjs-mui-ts" target="_blank" class="btn btn-primary">
                                <span class="btn-transition">View on Github</span>
                            </a>
                        </div>
                    </div>
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/movie-zone.jpg" alt="movie" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">Movie Streaming Platform</h2>
                            <p class="desc">An attractive movie streaming website with smart filtering features. Built using HTML, CSS(SCSS), Bootstrap and JavaScript.</p>
                            <a href="https://github.com/AiNga04/movie-zone" target="_blank" class="btn btn-primary">
                                <span class="btn-transition">View on Github</span>
                            </a>
                        </div>
                    </div>
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/courses.jpg" alt="courses" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">Online Course Platform</h2>
                            <p class="desc">An e-learning platform with smart course filtering and modern UI. Built with HTML, CSS(SCSS), Bootstrap and JavaScript.</p>
                            <a href="https://github.com/AiNga04/bootstrap-demo" target="_blank" class="btn btn-primary">
                                <span class="btn-transition">View on Github</span>
                            </a>
                        </div>
                    </div>
                                        <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/wanderlust.jpg" alt="wanderlust travel" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">Wanderlust - Travel & Explore 🌍</h2>
                            <p class="desc">A modern travel website for discovering top destinations, booking trips, and reading user reviews. Built with a beautiful UI and convenient features.</p>
                            <a href="https://github.com/AiNga04/tailwind" target="_blank" class="btn btn-primary">
                                <span class="btn-transition">View on Github</span>
                            </a>
                        </div>
                    </div>
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/phone.jpg" alt="phone store" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">Phone Store E-commerce</h2>
                            <p class="desc">A responsive e-commerce website for mobile phones with modern UI. Developed using HTML, CSS(SCSS), and JavaScript.</p>
                            <a href="https://github.com/AiNga04/9_aiNgaShop" target="_blank" class="btn btn-primary">
                                <span class="btn-transition">View on Github</span>
                            </a>
                        </div>
                    </div>
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/other-projects.jpg" alt="other projects" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">Other Projects</h2>
                            <p class="desc">Various Full-stack projects including Banking Apps, E-commerce platforms, and scalable services using Node.js and Java.</p>
                            <div class="d-flex justify-content-center gap-2">
                                <a href="https://github.com/AiNga04/NodeProject" target="_blank" class="btn btn-primary">
                                    <span class="btn-transition">Project 1</span>
                                </a>
                                <a href="https://github.com/AiNga04/5_BankingApps" target="_blank" class="btn btn-primary">
                                    <span class="btn-transition">Project 2</span>
                                </a>
                                <a href="https://github.com/AiNga04/Ecommerce" target="_blank" class="btn btn-primary">
                                    <span class="btn-transition">Project 3</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`);
}
