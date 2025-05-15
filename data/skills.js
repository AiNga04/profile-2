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
                            <p class="desc">Skilled in building responsive and dynamic user interfaces using modern web technologies.</p>
                            <ul class="list-unstyled text-secondary mt-3">
                                <li><i class="fab fa-html5 text-danger"></i> HTML</li>
                                <li><i class="fab fa-sass text-pink"></i> CSS (SCSS), Tailwind CSS</li>
                                <li><i class="fab fa-js text-warning"></i> JavaScript</li>
                                <li><i class="fab fa-bootstrap text-purple"></i> Bootstrap 5</li>
                                <li><i class="fab fa-react text-info"></i> React JS</li>
                                <li><i class="fas fa-forward text-info"></i> Next.js</li>
                                <li><i class="fab fa-android text-success"></i> Ant Design</li>
                                <li><i class="fas fa-layer-group text-primary"></i> Material-UI</li>
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
                            <p class="desc">Experienced in developing robust server-side applications with modern frameworks.</p>
                            <ul class="list-unstyled text-secondary mt-3">
                                <li><i class="fab fa-java text-danger"></i> Java</li>
                                <li><i class="fas fa-leaf text-success"></i> Spring Boot</li>
                                <li><i class="fab fa-node text-success"></i> Node.js</li>
                                <li><i class="fas fa-database text-info"></i> MySQL</li>
                                <li><i class="fas fa-leaf text-success"></i> MongoDB</li>
                                <li><i class="fas fa-exchange-alt text-primary"></i> RESTful APIs</li>
                                <li><i class="fas fa-feather text-secondary"></i> Nest.js</li>
                                <li><i class="fab fa-js-square text-primary"></i> TypeScript</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Other Skills -->
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 py-5 skill-hover">
                            <div class="pb-3 box-hidden">
                                <i class="fas fa-tools fa-5x text-warning"></i>
                            </div>
                            <h2 class="h2 text-primary mt-4">Other Skills</h2>
                            <p class="desc">Proficient in development tools and methodologies for efficient project delivery.</p>
                            <ul class="list-unstyled text-secondary mt-3">
                                <li><i class="fab fa-git-alt text-danger"></i> Git</li>
                                <li><i class="fab fa-github text-dark"></i> GitHub</li>
                                <li><i class="fab fa-docker text-info"></i> Docker</li>
                                <li><i class="fab fa-figma text-purple"></i> Figma</li>
                                <li><i class="fas fa-project-diagram text-success"></i> Agile/Scrum</li>
                                <li><i class="fas fa-handshake text-info"></i> Communication</li>
                                <li><i class="fas fa-users-cog text-warning"></i> Team Collaboration</li>
                                <li><i class="fas fa-vial text-danger"></i> Testing/Debugging</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>`);
}
