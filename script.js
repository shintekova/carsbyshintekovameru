/* =====================================================
   VELOCITY — SCRIPT
===================================================== */


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        if (preloader) {
            preloader.classList.add("hidden");
        }

    }, 1900);

});



/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    if (!menu) return;

    menu.classList.toggle("open");

}


/* Закрываем меню после нажатия */

document.querySelectorAll(
    ".mobile-menu a"
).forEach(link => {

    link.addEventListener("click", () => {

        const menu =
            document.getElementById("mobileMenu");

        if (menu) {
            menu.classList.remove("open");
        }

    });

});



/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");


if (
    cursor &&
    cursorRing &&
    window.innerWidth > 800
) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener(
        "mousemove",
        (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursor.style.left =
                mouseX + "px";

            cursor.style.top =
                mouseY + "px";

        }
    );


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * 0.15;

        ringY +=
            (mouseY - ringY) * 0.15;


        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";


        requestAnimationFrame(
            animateCursor
        );

    }

    animateCursor();

}



/* =====================================================
   CURSOR HOVER EFFECT
===================================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .brand-card"
    );


interactiveElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            if (!cursorRing) return;

            cursorRing.style.width =
                "55px";

            cursorRing.style.height =
                "55px";

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            if (!cursorRing) return;

            cursorRing.style.width =
                "35px";

            cursorRing.style.height =
                "35px";

        }
    );

});



/* =====================================================
   HERO CAR MOUSE PARALLAX
===================================================== */

const heroCar =
    document.getElementById("heroCar");


if (
    heroCar &&
    window.innerWidth > 800
) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (event.clientX /
                window.innerWidth) - 0.5;


            const y =
                (event.clientY /
                window.innerHeight) - 0.5;


            const moveX =
                x * 25;

            const moveY =
                y * 15;


            heroCar.style.transform =
                `
                translate(${moveX}px, ${moveY}px)
                scale(1.02)
                `;

        }
    );

}



/* =====================================================
   3D BRAND CARDS
===================================================== */

const cards =
    document.querySelectorAll(
        ".brand-card"
    );


cards.forEach(card => {


    card.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 800) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                centerY) * -4;


            const rotateY =
                ((x - centerX) /
                centerX) * 4;


            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-12px)
                scale(1.01)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".brand-card, .history-image, .history-content, .stats"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 250;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);



/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                !targetId
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});



/* =====================================================
   CARD IMAGE PARALLAX
===================================================== */

cards.forEach(card => {

    const image =
        card.querySelector("img");


    if (!image) return;


    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth <= 800) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const moveX =
                ((x / rect.width) - 0.5) * 15;


            const moveY =
                ((y / rect.height) - 0.5) * 15;


            image.style.transform =
                `
                scale(1.08)
                translate(
                    ${moveX}px,
                    ${moveY}px
                )
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            image.style.transform = "";

        }
    );

});



/* =====================================================
   RANDOM FLOATING LIGHT MOVEMENT
===================================================== */

const lights =
    document.querySelectorAll(
        ".light"
    );


window.addEventListener(
    "mousemove",
    event => {

        if (window.innerWidth <= 800) {
            return;
        }


        const x =
            event.clientX /
            window.innerWidth;


        const y =
            event.clientY /
            window.innerHeight;


        lights.forEach((light, index) => {

            const speed =
                index === 0 ? 20 : -15;


            light.style.transform =
                `
                translate(
                    ${x * speed}px,
                    ${y * speed}px
                )
                `;

        });

    }
);



/* =====================================================
   ANIMATED COUNTERS
===================================================== */

const stats =
    document.querySelectorAll(
        ".stats strong"
    );


let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;


    stats.forEach(stat => {

        const original =
            stat.textContent.trim();


        if (
            original === "∞"
        ) {
            return;
        }


        const number =
            parseInt(
                original.replace(
                    /\D/g,
                    ""
                )
            );


        if (isNaN(number)) {
            return;
        }


        let current = 0;

        const duration = 1200;

        const step =
            number /
            (duration / 20);


        const timer =
            setInterval(() => {

                current += step;


                if (
                    current >= number
                ) {

                    current = number;

                    clearInterval(
                        timer
                    );

                }


                stat.textContent =
                    Math.floor(current) +
                    (original.includes("+")
                        ? "+"
                        : "");

            }, 20);

    });

}


const statsSection =
    document.querySelector(
        ".stats"
    );


if (statsSection) {

    const statsObserver =
        new IntersectionObserver(
            entries => {

                if (
                    entries[0].isIntersecting
                ) {

                    startCounters();

                    statsObserver.disconnect();

                }

            },
            {
                threshold: .5
            }
        );


    statsObserver.observe(
        statsSection
    );

}



/* =====================================================
   PREVENT IMAGE DRAGGING
===================================================== */

document.querySelectorAll(
    "img"
).forEach(img => {

    img.addEventListener(
        "dragstart",
        event => {
            event.preventDefault();
        }
    );

});



/* =====================================================
   PAGE READY
===================================================== */

console.log(
    "VELOCITY — Automotive Experience loaded."
);




