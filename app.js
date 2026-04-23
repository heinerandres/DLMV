const elementsRight = document.querySelectorAll(".slideRightScroll");

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${index * 1}s`;
      entry.target.classList.add("show");
    }
  });
});

elementsRight.forEach(el => observerRight.observe(el));


const slider = document.getElementById("slider");
  const slides = slider.children;
  let index = 0;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById("next").onclick = () => showSlide(index + 1);
  document.getElementById("prev").onclick = () => showSlide(index - 1);

  // Auto slide cada 3 segundos
  setInterval(() => {
    showSlide(index + 1);
  }, 5000);
