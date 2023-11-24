/**
 * Highlight text
 * Find all elements with data-highlight attribute and 
 * wrap the matching text in a span
 */
const highlight = document.querySelectorAll("[data-highlight]");

highlight.forEach((element) => {
  const highlightText = element.getAttribute("data-highlight");
  const regex = new RegExp(`(${highlightText})`, "gi");
  element.innerHTML = element.innerHTML.replace(
    regex,
    '<span>$1</span>'
  );
});

/**
 * Accordion 1
 * Add click event to each accordion header
 */
const acc = document.querySelectorAll(".acc1");

acc.forEach(function(accordion) {
  const accordionHeader = accordion.querySelector(".accordion__header");
  accordionHeader.addEventListener("click", function() {
    if ( accordion.classList.contains("active") ) {
      accordion.classList.remove("active");
    } else {
      accordion.classList.add("active");
    };
  })
});

/**
 * Accordion 2
 * Add click event to each accordion header
 */
const acc2 = document.querySelectorAll(".acc2 .accordion__header");

acc2.forEach(function(button) {
  button.addEventListener("click", function() {
    const parentElement = this.parentNode;

    if (parentElement.classList.contains("active")) {
      parentElement.classList.remove("active");
    } else {
      parentElement.classList.add("active");
    }
  });
});

/**
 * Accordion 3
 * Add click event to each accordion header
 */
const acc3 = document.querySelectorAll(".acc3 .accordion__header");

acc3.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});