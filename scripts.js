function fetchMarkdown(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .catch(error => {
            console.error('Error fetching markdown:', error);
            return 'Failed to load content. Please try again later.';
        });
}

function parseMarkdownAndApplyStyles(markdownText) {
    var htmlContent = marked.parse(markdownText);
    var markdownContentDiv = document.getElementById('markdown-content');
    htmlContent = htmlContent.replace(/<\/h[23]>/g, '$&<hr>');

    markdownContentDiv.innerHTML += htmlContent;
    markdownContentDiv.classList.add('custom-markdown-style');

    markdownContentDiv.innerHTML += "<br><i><center>tip: you can click on my face to toggle the rainbow effect :)</i></center>";
}

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
        avatar.attr("src", allowed
            ? "https://avatars.githubusercontent.com/u/19775889?v=4"
            : "gfx/ice_cropped.jpeg"
        );
    }
}

function throttle(func, limit) {
    let inThrottle;
    return function (event) {
        if (!inThrottle) {
            func(event);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

window.onload = function () {
    var markdownUrl = 'https://raw.githubusercontent.com/thezapalsky/thezapalsky/main/README.md';
    fetchMarkdown(markdownUrl)
        .then(markdownText => {
            parseMarkdownAndApplyStyles(markdownText);
        })
        .catch(error => console.error('Error fetching Markdown:', error));

    var colors_allowed = localStorage.getItem("colorToggleState") === "true" || false;
    toggleColorAndAvatar(colors_allowed, animate = false);

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
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.style.transform = 'rotate(180deg)';
            document.body.style.transition = 'transform 1s ease';
            setTimeout(() => {
                document.body.style.transform = 'rotate(0deg)';
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