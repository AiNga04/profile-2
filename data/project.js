/* ========== Thêm Project ========== */
function addProject() {
  document.write(`
            <section class="project" id="project">
            <div class="container-xl px-4 py-5" id="featured-3">
                <h2 class="pb-2 text-primary h1 fs p-3" data-aos="fade-right">My project
                    <hr class="text-body-secondary">
                </h2>
                <div class="row g-5 py-5 row-cols-1 row-cols-lg-3 row-cols-md-2 bd" data-aos="zoom-in">
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/phone.jpg" alt="" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">Project Website Selling Phones</h2>
                            <p class="desc">PhoneStore is an online phone selling website, providing modern, diverse
                                technology products
                                from famous brands.</p>
                            <a href="https://github.com/AiNga04/9_aiNgaShop" target="_blank" class="btn btn-primary">
                                <span class="btn-transition">View on Github</span> </a>
                        </div>
                    </div>
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/courses.jpg" alt="project" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">Project Website Selling Courses</h2>
                            <p class="desc">CourseHub is an online course selling website, providing courses in the
                                field of technology, helping learners improve
                                their skills.</p>
                            <a href="https://github.com/AiNga04/bootstrap-demo" target="_blank" class="btn btn-primary">
                                <span class="btn-transition">View on Github</span> </a>
                        </div>
                    </div>
                    <div class="feature col text-center">
                        <div class="p-0 shadow rounded-3 pb-5 project-hover">
                            <div class="pb-3 box-hidden">
                                <img src="./img/movie-zone.jpg" alt="project" class="">
                            </div>
                            <h2 class="h2 text-primary mt-4">Project Website Watching Movies</h2>
                            <p class="desc">MovieZone is an online movie watching website, providing the ultimate
                                entertainment experience with a diverse,
                                high-quality movie store.</p>
                            <a href="https://github.com/AiNga04/movie-zone" target="_blank" class="btn btn-primary">
                                <span class="btn-transition">View on Github</span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`);
}
