function addSkills() {
  document.write(`
        <section class="skills" id="skills">
            <div class="container-xl px-4 py-5" id="featured-skills">
                <h2 class="pb-2 text-primary h1 fs p-3" data-aos="fade-right">My Skills
                    <hr class="text-body-secondary">
                </h2>
                <div class="row g-5 py-5 row-cols-1 row-cols-lg-3 row-cols-md-2 bd" data-aos="zoom-in">
                    <!-- Front-End Skills -->
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 py-5 skill-hover">
                            <div class="pb-3 box-hidden">
                                <i class="fas fa-laptop-code fa-5x text-primary"></i>
                            </div>
                            <h2 class="h2 text-primary mt-4">Front-End</h2>
                            <p class="desc">Skilled in building responsive and dynamic user interfaces using the latest
                                web
                                technologies.</p>
                            <ul class="list-unstyled text-secondary mt-3">
                                <li><i class="fab fa-html5 text-danger"></i> HTML</li>
                                <li><i class="fab fa-css3-alt text-primary"></i> CSS (SCSS)</li>
                                <li><i class="fab fa-js-square text-warning"></i> JavaScript</li>
                                <li><i class="fab fa-bootstrap text-purple"></i> Bootstrap</li>
                                <li><i class="fab fa-react text-info"></i> React JS</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Back-End Skills -->
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 py-5 skill-hover">
                            <div class="pb-3 box-hidden">
                                <i class="fas fa-server fa-5x text-success"></i>
                            </div>
                            <h2 class="h2 text-primary mt-4">Back-End</h2>
                            <p class="desc">Experienced in creating robust back-end systems with modern frameworks and
                                databases.</p>
                            <ul class="list-unstyled text-secondary mt-3">
                                <li><i class="fab fa-java text-danger"></i> Java</li>
                                <li><i class="fas fa-code text-dark"></i> Spring Boot</li>
                                <li><i class="fab fa-node-js text-success"></i> Node JS</li>
                                <li><i class="fas fa-database text-info"></i> MySQL</li>
                                <li><i class="fas fa-database text-warning"></i> MongoDB</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Other Skills -->
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 py-5 skill-hover">
                            <div class="pb-3 box-hidden">
                                <i class="fas fa-tools fa-5x text-warning"></i>
                            </div>
                            <h2 class="h2 text-primary mt-4">Khác</h2>
                            <p class="desc">Proficient in tools and methodologies to enhance productivity and ensure
                                project
                                success.</p>
                            <ul class="list-unstyled text-secondary mt-3">
                                <li><i class="fab fa-git text-danger"></i> Git</li>
                                <li><i class="fab fa-docker text-info"></i> Docker</li>
                                <li><i class="fas fa-cloud text-primary"></i> RESTful API</li>
                                <li><i class="fas fa-shapes text-success"></i> Figma</li>

                                <li><i class="fas fa-chart-line text-secondary"></i> Problem Solving</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>`);
}
