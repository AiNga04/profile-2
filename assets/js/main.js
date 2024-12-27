// Xử lý thêm class "active"
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Xóa class active khỏi tất cả các liên kết
      navLinks.forEach((nav) => nav.classList.remove("active"));

      // Thêm class active vào liên kết được nhấp
      this.classList.add("active");
    });
  });

  // Cập nhật class active dựa trên vị trí cuộn
  window.addEventListener("scroll", () => {
    let currentSection = "";

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 50) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });
});
