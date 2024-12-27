document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Xóa class active khỏi tất cả các liên kết trong .navbar
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
      const sectionHeight = section.offsetHeight;

      // Xác định phần hiện tại dựa vào vị trí cuộn
      if (
        scrollY >= sectionTop - window.innerHeight / 2 &&
        scrollY < sectionTop + sectionHeight - window.innerHeight / 2
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Nếu cuộn gần cuối trang, tự động chọn phần cuối
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 10
    ) {
      currentSection = document
        .querySelector("section:last-of-type")
        .getAttribute("id");
    }

    navLinks.forEach((link) => {
      // Xóa tất cả class active trước
      link.classList.remove("active");

      // Kiểm tra nếu liên kết trỏ đến phần hiện tại thì thêm class active
      if (
        link.closest(".navbar") && // Đảm bảo chỉ áp dụng trong navbar
        link.getAttribute("href").includes(currentSection)
      ) {
        link.classList.add("active");
      }
    });

    // Xử lý khi cuộn lên đầu trang
    if (scrollY === 0) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector('.navbar .nav-link[href="#home"]')
        ?.classList.add("active");
    }
  });
});
