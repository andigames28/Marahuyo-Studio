
document.addEventListener("DOMContentLoaded", function () {
  
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("open");

            const isOpen = mainNav.classList.contains("open");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });
    }



    const currentPage = document.body.dataset.page;
    const navLinks = document.querySelectorAll(".main-nav > a");

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");

        if (href) {
            const pageName = href.split("/").pop().split(".")[0];

            if (
                pageName === currentPage ||
                (currentPage === "booking" && pageName === "availability")
            ) {
                link.classList.add("current");
            }
        }
    });


const styles = {
    gyaru: {
        tagline: "Bold looks. Big energy. Your own style.",
        image: "Marahuyo-Studio/images/home-gyaru.jpg"
    },
    filipiniana: {
        tagline: "A modern Pinay look with a classic touch.",
        image: "Marahuyo-Studio/images/home-filipiniana.jpg"
    },
    skool: {
        tagline: "Playful school-inspired looks, reimagined.",
        image: "Marahuyo-Studio/images/home-skool.jpg"
    },
    gengsta: {
        tagline: "Street style with confidence and attitude.",
        image: "Marahuyo-Studio/images/home-gengsta.jpg"
    }
};

const heroPhoto = document.getElementById("heroPhoto");
const heroTagline = document.getElementById("heroTagline");
const styleTabs = document.querySelectorAll(".style-tab");

const styleKeys = Object.keys(styles);
let activeStyle = 0;
let slideshowTimer;

function showStyle(index) {
    const key = styleKeys[index];
    const style = styles[key];

    heroPhoto.style.backgroundImage = `url("${style.image}")`;

    if (heroTagline) {
        heroTagline.textContent = style.tagline;
    }

    styleTabs.forEach(tab => {
        tab.classList.toggle("active", tab.dataset.style === key);
    });
}

if (heroPhoto) {
    showStyle(0);

    slideshowTimer = setInterval(() => {
        activeStyle = (activeStyle + 1) % styleKeys.length;
        showStyle(activeStyle);
    }, 4000);
}

styleTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const index = styleKeys.indexOf(tab.dataset.style);

        if (index !== -1) {
            activeStyle = index;
            showStyle(activeStyle);

            clearInterval(slideshowTimer);

            slideshowTimer = setInterval(() => {
                activeStyle = (activeStyle + 1) % styleKeys.length;
                showStyle(activeStyle);
            }, 4000);
        }
    });
});

    
    styleTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const selectedStyle = tab.dataset.style;
            const index = styleKeys.indexOf(selectedStyle);

            if (index !== -1) {

                activeStyle = index;

                showStyle(activeStyle);

              
                if (slideshowTimer) {
                    clearInterval(slideshowTimer);
                }

                slideshowTimer = setInterval(function () {

                    activeStyle = (activeStyle + 1) % styleKeys.length;

                    showStyle(activeStyle);

                }, 4000);
            }
        });
    });

    const workCollections = document.querySelectorAll(".work-collection");

    workCollections.forEach(function (collection) {

        const galleryTiles = collection.querySelectorAll(".gallery-tile");

        collection.addEventListener("mouseenter", function () {

            if (window.innerWidth > 600) {
                collection.classList.add("expanded");
            }

        });

        collection.addEventListener("mouseleave", function () {

            if (window.innerWidth > 600) {
                collection.classList.remove("expanded");
            }

        });

        galleryTiles.forEach(function (tile) {

            tile.addEventListener("click", function () {

                if (window.innerWidth <= 600) {
                    collection.classList.toggle("expanded");
                }
            });
        });
    });

    const packageCards = document.querySelectorAll(".package-card");

    packageCards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            if (event.target.closest("a")) {
                return;
            }

            packageCards.forEach(function (otherCard) {
                otherCard.classList.remove("selected");
            });

            card.classList.add("selected");

        });

    });


    const googleFormURL =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLScebJNdrgXkMOALDURaBMTULw8mxdzI0dCUVvA5dRvM6GV8Qw/formResponse";

    const formLinks = document.querySelectorAll(".google-form-link");

    formLinks.forEach(function (link) {
        link.setAttribute("href", googleFormURL);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

});
