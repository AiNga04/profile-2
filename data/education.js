function addEducation() {
  document.write(`
        <section class="education py-5" id="education">
            <div class="container-xl px-4 py-5">
                <h2 class="pb-2 text-primary h1 fs p-3 text-center" data-aos="flip-left">My Education
                    <hr class="text-body-secondary">
                </h2>
                <div class="education-timeline py-5" data-aos="zoom-in">
                    <!-- Education Item 1 -->
                    <div class="card shadow border-0 rounded-3 mb-4 p-5">
                        <div class="row no-gutters">
                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <div class="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                                    style="width: 100px; height: 100px;">
                                    <h3 class="mb-0">2022 - Present</h3>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div class="card-body text-center text-md-start">
                                    <h2 class="h2 text-primary mb-3">University of Technology and Education, Ho Chi Minh
                                        City
                                    </h2>
                                    <p class="desc p-0"><strong>Major:</strong> Information Security</p>
                                    <p class="desc p-0">Currently, I am studying to become a fullstack web developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Education Item 2 -->
                    <div class="card shadow border-0 rounded-3 mb-4 p-5">
                        <div class="row no-gutters">
                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                <div class="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                                    style="width: 100px; height: 100px;">
                                    <h3 class="mb-0">2019 - 2022</h3>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div class="card-body text-center text-md-start">
                                    <h2 class="h2 text-primary mb-4">High School</h2>
                                    <p class="desc p-0">Graduated with distinction. Active member of the provincial
                                        excellent student
                                        team in
                                        Physics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`);
}
