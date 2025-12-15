
//script begin 

// faq page js
document.querySelectorAll('.faq-question').forEach(btn => {
btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
});
});

//heightlight page js
const grid = document.querySelector('.highlight-grid');
const dots = document.querySelectorAll('.highlight-dots .dot');
grid.addEventListener('scroll', () => {
const scrollLeft = grid.scrollLeft;
const cardWidth = grid.querySelector('.highlight-card').offsetWidth + 16; 
const index = Math.round(scrollLeft / cardWidth);
dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
});
});

//feature page js
const featuresGrid = document.querySelector('.features-grid');
const featureDots = document.querySelectorAll('.features-dots .dot');
featuresGrid?.addEventListener('scroll', () => {
const scrollLeft = featuresGrid.scrollLeft;
const cardWidth = featuresGrid.querySelector('.feature-card').offsetWidth + 16;
const index = Math.round(scrollLeft / cardWidth);
featureDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
});
});


  function closeModal() {
    document.getElementById("enquireModal").classList.remove("active");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("enquireModal");
    const triggers = document.querySelectorAll(".enquire-trigger");

    triggers.forEach(trigger => {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.add("active");
      });
    });

    // Optional: Close when clicking outside modal
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  });




