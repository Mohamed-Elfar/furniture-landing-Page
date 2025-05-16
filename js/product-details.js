const thumbnails = document.querySelectorAll(
  ".thumbnails img, .thumbnails video"
);
const mainImageContainer = document.querySelector(".main-image");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImageContainer.innerHTML = "";
    const clone = thumbnail.cloneNode(true);
    if (clone.tagName === "VIDEO") {
      clone.setAttribute("controls", true);
      clone.setAttribute("autoplay", true);
      clone.style.width = "400px";
    } else {
      clone.style.width = "400px";
    }
    mainImageContainer.appendChild(clone);
  });
});

function setupTabs(tabClass) {
  const tabs = document.querySelectorAll(`.${tabClass} .tab`);
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-tab");
      const tabContainer = tab.closest(`.${tabClass}`);
      const allTabs = tabContainer.querySelectorAll(".tab");
      const allContents =
        tabContainer.parentElement.querySelectorAll(".tab-content");

      allTabs.forEach((t) => t.classList.remove("active"));
      allContents.forEach((content) => content.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(targetId).classList.add("active");
    });
  });
}

setupTabs("top-tabs");
setupTabs("bottom-tabs");
