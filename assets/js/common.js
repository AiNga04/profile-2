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
    <footer class="footer text-center py-3">
        <div class="container">
            <p class="text-muted">&copy; 2024 - My Portfolio</p>
        </div>
    </footer>`);
}
