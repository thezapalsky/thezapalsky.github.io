function setDevelopmentFavicon() {
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.protocol === "file:"
  ) {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = "https://img.icons8.com/windows/32/dev.png";
    }
  }
}

function fetchMarkdown(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .catch((error) => {
      console.error("Error fetching markdown:", error);
      return "Failed to load content. Please try again later.";
    });
}

function parseMarkdownAndApplyStyles(markdownText) {
  var htmlContent = marked.parse(markdownText);
  var markdownContentDiv = document.getElementById("markdown-content");
  htmlContent = htmlContent.replace(/<\/h[23]>/g, "$&<hr>");

  markdownContentDiv.innerHTML += htmlContent;
  markdownContentDiv.classList.add("custom-markdown-style");

  markdownContentDiv.innerHTML +=
    "<br><i><center>tip: you can click on my face to toggle the rainbow effect :)</i></center>";

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
        if (link.textContent.toLowerCase().includes("website")) {
          event.preventDefault();
          link.href = "#";
          showPopup(event.clientX, event.clientY);
        } else if (link.href.startsWith("mailto:")) {
          event.preventDefault();
          const email = link.href.replace("mailto:", "");
          showEmailPopup(event.clientX, event.clientY, email);
      }
    });
  });
}

function showPopup(x, y) {
  const popup = document.createElement("div");
  popup.textContent = "You are already here!";
  popup.style.position = "fixed";
  popup.style.left = `${x + 5}px`;
  popup.style.top = `${y + 10}px`;
  popup.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  popup.style.color = "white";
  popup.style.padding = "8px 12px";
  popup.style.borderRadius = "4px";
  popup.style.zIndex = "1000";
  popup.style.backdropFilter = "blur(5px)";
  popup.style.fontSize = "14px";
  popup.style.fontFamily = "Source Serif Pro, serif";
  popup.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 2000);
}

function showEmailPopup(x, y, email) {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.left = `${x + 5}px`;
  popup.style.top = `${y + 10}px`;
  popup.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  popup.style.color = "white";
  popup.style.padding = "8px 12px";
  popup.style.borderRadius = "4px";
  popup.style.zIndex = "1000";
  popup.style.backdropFilter = "blur(5px)";
  popup.style.fontSize = "14px";
  popup.style.fontFamily = "Source Serif Pro, serif";
  popup.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
  popup.style.display = "flex";
  popup.style.gap = "12px";

  const mailtoButton = document.createElement("span");
  mailtoButton.textContent = "Draft";
  mailtoButton.style.cursor = "pointer";
  mailtoButton.style.textDecoration = "underline";
  mailtoButton.addEventListener("click", () => {
    window.location.href = `mailto:${email}`;
    popup.remove();
  });

  const copyButton = document.createElement("span");
  copyButton.textContent = "Copy";
  copyButton.style.cursor = "pointer";
  copyButton.style.textDecoration = "underline";
  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Copied!";
    setTimeout(() => popup.remove(), 1000);
  });

  const separator = document.createElement("span");
  separator.textContent = "|";
  separator.style.opacity = "0.5";

  popup.appendChild(copyButton);
  popup.appendChild(separator);
  popup.appendChild(mailtoButton);
  document.body.appendChild(popup);

  setTimeout(() => {
    if (document.body.contains(popup)) {
      popup.remove();
    }
  }, 2000);
}

const preloadedImages = {
  github: new Image(),
  local: new Image(),
};

function toggleColorAndAvatar(colors_allowed, animate = true) {
  const avatar = $("#avatar");
  const body = $(document.body);

  if (!animate) {
    updateAppearance(colors_allowed);
    return;
  }

  avatar.addClass("shrinking");
  setTimeout(() => {
    updateAppearance(colors_allowed);
  }, 250);
  setTimeout(() => {
    avatar.removeClass("shrinking");
  }, 500);

  function updateAppearance(allowed) {
    body.css("background-color", allowed ? "black" : "black");
    avatar.attr(
      "src",
      allowed ? preloadedImages.github.src : preloadedImages.local.src
    );
  }
}

function throttle(func, limit) {
  let inThrottle;
  return function (event) {
    if (!inThrottle) {
      func(event);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

window.onload = function () {
  setDevelopmentFavicon();

  preloadedImages.github.src =
    "https://avatars.githubusercontent.com/u/19775889?v=4";
  preloadedImages.local.src = "gfx/ice_cropped.jpeg";

  var markdownUrl =
    "https://raw.githubusercontent.com/thezapalsky/thezapalsky/main/README.md";
  fetchMarkdown(markdownUrl)
    .then((markdownText) => {
      parseMarkdownAndApplyStyles(markdownText);
    })
    .catch((error) => console.error("Error fetching Markdown:", error));

  var colors_allowed =
    localStorage.getItem("colorToggleState") === "true" || false;
  toggleColorAndAvatar(colors_allowed, false);

  const handleMouseMove = throttle(function (event) {
    if (colors_allowed) {
      const r = event.pageX / 4;
      const g = event.pageY / 4;
      const color = `rgb(${r}, ${g}, 128)`;
      $(document.body).css("background-color", color);
    }
  }, 16);

  $(document).mousemove(handleMouseMove);

  let isAnimating = false;
  $("#avatar").click(function () {
    if (!isAnimating) {
      isAnimating = true;
      colors_allowed = !colors_allowed;
      localStorage.setItem("colorToggleState", colors_allowed);
      toggleColorAndAvatar(colors_allowed);
      setTimeout(() => {
        isAnimating = false;
      }, 400);
    }
  });
};

// Konami code easter egg
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let konamiIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      document.body.style.transform = "rotate(180deg)";
      document.body.style.transition = "transform 1s ease";
      setTimeout(() => {
        document.body.style.transform = "rotate(0deg)";
      }, 1000);
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

// Console messages
console.log(
  "%c👋 Hello curious developer!",
  "font-size: 20px; font-weight: bold; color: #ff69b4;"
);
console.log(
  "%cRemember the Konami code? ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️",
  "font-style: italic; color: #4CAF50"
);
