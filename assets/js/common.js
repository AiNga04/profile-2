/* ========== Thêm Navbar ========== */
function addNavbar() {
  document.write(`    
    <nav class="navbar navbar-custom navbar-expand-md sticky-top">
        <div class="container-xl">
            <a class="navbar-brand" href="#">
                <img src="./img/logo.png" alt="logo" height="40" width="150">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item px-3"><a class="nav-link text-white fw-bold hover active" aria-current="page"
                            href="#home"><i class="fa-solid fa-house"></i> Home</a>
                    </li>
                    <li class="nav-item px-2"><a class="nav-link text-white fw-bold hover" href="#about"><i
                                class="fa-regular fa-newspaper"></i>
                            About</a></li>
                    <li class="nav-item px-2"><a class="nav-link text-white fw-bold hover" href="#project"><i
                                class="fa-solid fa-star"></i>
                            Project</a>
                    </li>
                    <li class="nav-item px-2"><a class="nav-link text-white fw-bold hover" href="#skills"><i
                                class="fa-solid fa-code"></i>
                            Skills</a>
                    </li>
                    <li class="nav-item px-2"><a class="nav-link text-white fw-bold hover" href="#education"><i
                                class="fa-brands fa-leanpub"></i>
                            Education</a>
                    </li>
                    <li class="nav-item px-2"><a class="nav-link text-white fw-bold hover" href="#contact"><i
                                class="fa-solid fa-phone"></i>
                            Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`);
}

/* ========== Thêm Footer ========== */
function addFooter() {
  document.write(`
        <footer id="footer" class="footer">
        <div class="container">
            <div class="row gy-4">
                <!-- About Section -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <a href="index.html" class="d-flex align-items-center mb-4">
                        <img src="./img/logo.png" alt="Logo" height="40" width="150">
                    </a>
                    <p class="text-muted text-white">Hi, I'm Truong Ai Nga, a passionate front-end developer who loves
                        crafting
                        beautiful and functional web experiences. Always eager to learn and grow in the ever-evolving
                        tech
                        world.</p>
                    <div class="social-links mt-3">
                        <a href="https://www.facebook.com/profile.php?id=100055585185477" class="me-3 text-light" title="Facebook"><i
                                class="fa-brands fa-facebook fa-lg"></i></a>
                        <a href="https://github.com/AiNga04" class="me-3 text-light" title="GitHub"><i class="fa-brands fa-github fa-lg"></i></a>
                        <a href="https://www.instagram.com/ainga_76/profilecard/?igsh=cDY2N2RkNncycjZt" class="me-3 text-light" title="Instagram"><i
                                class="fa-brands fa-instagram fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/nga-tr%C6%B0%C6%A1ng-bb62202ab/" class="text-light" title="LinkedIn"><i
                                class="fa-brands fa-linkedin-in fa-lg"></i></a>
                    </div>
                </div>

                <!-- Skills Section -->
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <h5 class="mb-4 text-uppercase text-light">Skills</h5>
                    <ul class="list-unstyled">
                        <li><i class="fa-solid fa-code me-2"></i>HTML, CSS, JavaScript</li>
                        <li><i class="fa-solid fa-laptop-code me-2"></i>React.js, Node.js</li>
                        <li><i class="fa-solid fa-database me-2"></i>SQL, MongoDB</li>
                        <li><i class="fa-solid fa-lock me-2"></i>Bootstrap</li>
                    </ul>
                </div>

                <!-- Hobbies Section -->
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <h5 class="mb-4 text-uppercase text-light">Hobbies</h5>
                    <ul class="list-unstyled">
                        <li><i class="fa-solid fa-book me-2"></i>Reading Technology Blogs</li>
                        <li><i class="fa-solid fa-walking me-2"></i>Go for a walk after many hours of work on the
                            computer
                        </li>
                        <li><i class="fa-solid fa-music me-2"></i>Listening to Music</li>
                    </ul>
                </div>

                <!-- Contact Section -->
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <h5 class="mb-4 text-uppercase text-light">Contact</h5>
                    <ul class="list-unstyled">
                        <li><i class="fa-solid fa-location-dot me-2"></i>Le Van Viet Street</li>
                        <li><i class="fa-solid fa-city me-2"></i>Ho Chi Minh, Viet Nam</li>
                        <li><i class="fa-solid fa-phone me-2"></i><strong>Phone:</strong> +84 376 600 545
                        </li>
                        <li><i class="fa-solid fa-envelope me-2"></i><strong>Email:</strong> ainga01012004@gmail.com<a
                                href="mailto:ainga01012004@gmail.com" class="text-light text-decoration-none"></a></li>
                    </ul>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="text-center mt-4 text-white">
                <hr>
                <p class="mb-0">&copy; 2024 Ai Nga. All rights reserved.</p>
            </div>
        </div>
    </footer>`);
}
