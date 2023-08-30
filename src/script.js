const navigationItems = document.querySelectorAll(".nav_link");
// const Items = document.querySelectorAll(".nav_link");
window.addEventListener("load", AOS.refresh);

navigationItems.forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.innerText.toLowerCase().replace(" ", "-");
    const targetElement = document.getElementById(targetId);
    // const body = document.getElementsByTagName("body");

    // Remove "active_link" class from all navigation items
    navigationItems.forEach(navItem => {
      navItem.classList.remove("active_link");
      navItem.classList.add("inactive_link");
    });

    // Toggle classes for the clicked item
    item.classList.remove("inactive_link");
    item.classList.add("active_link");

    // Scroll to the target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const sections = document.querySelectorAll(".section");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5 // Adjust the threshold as needed
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const targetId = entry.target.id;
    const navigationItem = Array.from(navigationItems).find(item =>
      item.textContent.toLowerCase().includes(targetId)
    );

    if (entry.isIntersecting) {
      navigationItems.forEach(navItem => {
        navItem.classList.add("inactive_link");
        navItem.classList.remove("active_link");
      });

      if (navigationItem) {
        navigationItem.classList.add("active_link");
        navigationItem.classList.remove("inactive_link");
      }
    }
  });
}, observerOptions);

sections.forEach(section => {
  console.log(section);
  observer.observe(section);
});

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 5,
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    648: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    920: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5
    }
  },
  // spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 0 //add
  },
  speed: 7500,
  freemode: true
});

var swiper = new Swiper(".heroSwiper", {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 0 //add
  },
  speed: 7500,
  freemode: true
});

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const pdfUrl = "/src/pdf/CaseStudy.pdf"; // Replace with the actual path to your PDF file
    const link = document.createElement("a");
    link.href = pdfUrl;
    // link.target = "_blank";
    link.download = "CaseStudy.pdf"; // Change the downloaded file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
