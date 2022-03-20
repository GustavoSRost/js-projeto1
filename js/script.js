function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tab-menu li");
  const tabContent = document.querySelectorAll(".js-tab-content section");
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");
  }

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("active");
    });
    tabContent[index].classList.add("active");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "active";
  if (accordionList.length) {
    accordionList[1].classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSmooth() {
  const linkInterno = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
  }

  linkInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSmooth()