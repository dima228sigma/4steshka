document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Отключаем наблюдение после активации
      }
    });
  });

  const elements = document.querySelectorAll(".revealing-imag2");
  elements.forEach((el) => observer.observe(el));
});
