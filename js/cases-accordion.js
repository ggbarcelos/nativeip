// Cases Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function(e) {
      e.preventDefault();
      
      const accordionItem = this.closest('.accordion-item');
      const card = accordionItem.closest('.case-card');
      const isActive = accordionItem.classList.contains('active');

      // Close all items in this card
      card.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-header').classList.remove('active');
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        accordionItem.classList.add('active');
        this.classList.add('active');
      }
    });
  });

  // Open first item by default
  const firstHeaders = document.querySelectorAll('.accordion-item.active .accordion-header');
  firstHeaders.forEach(header => {
    header.classList.add('active');
  });
});
