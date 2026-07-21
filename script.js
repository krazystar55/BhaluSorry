/* =========================================================
BHALU LOVE WEBSITE — COMPLETE SCRIPT.JS
Interactive • Romantic • Cinematic
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

```
/* =====================================================
   1. LOADING SCREEN
===================================================== */

const loadingScreen =
    document.querySelector(".loading-screen");

const loadingProgress =
    document.querySelector(".loading-progress");

let progress = 0;

if (loadingScreen) {

    const loadingInterval = setInterval(() => {

        progress += Math.floor(Math.random() * 8) + 3;

        if (progress >= 100) {

            progress = 100;

            clearInterval(loadingInterval);

            if (loadingProgress) {
                loadingProgress.style.width = "100%";
            }

            setTimeout(() => {

                loadingScreen.classList.add("hidden");

            }, 700);

        }

        if (loadingProgress) {

            loadingProgress.style.width =
                `${progress}%`;

        }

    }, 150);

}


/* =====================================================
   2. MUSIC PLAYER
===================================================== */

const musicToggle =
    document.querySelector(".music-toggle");

const birthdaySong =
    document.querySelector("#birthdaySong");

const musicIcon =
    document.querySelector(".music-icon");

let musicPlaying = false;

if (musicToggle && birthdaySong) {

    musicToggle.addEventListener("click", () => {

        if (musicPlaying) {

            birthdaySong.pause();

            musicPlaying = false;

            musicToggle.classList.remove("playing");

            if (musicIcon) {
                musicIcon.textContent = "🎵";
            }

        } else {

            birthdaySong.play()
                .then(() => {

                    musicPlaying = true;

                    musicToggle.classList.add(
                        "playing"
                    );

                    if (musicIcon) {
                        musicIcon.textContent = "⏸️";
                    }

                })
                .catch(() => {

                    alert(
                        "Click the music button again to start the music ❤️"
                    );

                });

        }

    });

}


/* =====================================================
   3. AUTOPLAY AFTER FIRST USER INTERACTION
===================================================== */

let musicStarted = false;

document.addEventListener(
    "click",
    () => {

        if (
            !musicStarted &&
            birthdaySong
        ) {

            birthdaySong.play()
                .then(() => {

                    musicStarted = true;

                    musicPlaying = true;

                    if (musicToggle) {
                        musicToggle.classList.add(
                            "playing"
                        );
                    }

                })
                .catch(() => {});

        }

    },
    { once: true }
);


/* =====================================================
   4. FLOATING HEARTS
===================================================== */

const floatingHearts =
    document.querySelector(
        ".floating-hearts"
    );

const heartEmojis = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💓",
    "💞",
    "💘",
    "💝"
];

function createFloatingHeart() {

    if (!floatingHearts) return;

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        heartEmojis[
            Math.floor(
                Math.random() *
                heartEmojis.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    const duration =
        Math.random() * 8 + 7;

    heart.style.animationDuration =
        duration + "s";

    floatingHearts.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}

setInterval(
    createFloatingHeart,
    900
);


/* =====================================================
   5. FALLING PETALS
===================================================== */

const petalsContainer =
    document.querySelector(".petals");

const petalEmojis = [
    "🌸",
    "🌹",
    "🌷",
    "💮",
    "🌺"
];

function createPetal() {

    if (!petalsContainer) return;

    const petal =
        document.createElement("div");

    petal.className =
        "petal";

    petal.textContent =
        petalEmojis[
            Math.floor(
                Math.random() *
                petalEmojis.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.fontSize =
        Math.random() * 15 + 12 + "px";

    const duration =
        Math.random() * 8 + 7;

    petal.style.animationDuration =
        duration + "s";

    petalsContainer.appendChild(
        petal
    );

    setTimeout(() => {

        petal.remove();

    }, duration * 1000);

}

setInterval(
    createPetal,
    1800
);


/* =====================================================
   6. SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   7. TYPING EFFECT
===================================================== */

const typingElements =
    document.querySelectorAll(
        "[data-typing]"
    );

function typeText(
    element,
    text,
    speed = 60
) {

    element.textContent = "";

    let index = 0;

    const typing =
        setInterval(() => {

            if (
                index < text.length
            ) {

                element.textContent +=
                    text.charAt(index);

                index++;

            } else {

                clearInterval(
                    typing
                );

            }

        }, speed);

}


const typingObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting &&
                        !entry.target.dataset.typed
                    ) {

                        const text =
                            entry.target.dataset.typing;

                        entry.target.dataset.typed =
                            "true";

                        typeText(
                            entry.target,
                            text
                        );

                    }

                }
            );

        },
        {
            threshold: 0.5
        }
    );


typingElements.forEach(
    (element) => {

        typingObserver.observe(
            element
        );

    }
);


/* =====================================================
   8. MEMORY NAVIGATION
===================================================== */

const memorySections =
    document.querySelectorAll(
        ".memory-section"
    );

const nextButtons =
    document.querySelectorAll(
        ".next-btn"
    );

let currentMemory = 0;

function showMemory(index) {

    memorySections.forEach(
        (section, i) => {

            section.style.display =
                i === index
                    ? "flex"
                    : "none";

        }
    );

    if (
        memorySections[index]
    ) {

        memorySections[index]
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}


nextButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                currentMemory++;

                if (
                    currentMemory >=
                    memorySections.length
                ) {

                    currentMemory = 0;

                }

                showMemory(
                    currentMemory
                );

            }
        );

    }
);


/* =====================================================
   9. 100 REASONS
===================================================== */

const reasons = [

    "Because your smile can fix even my worst day ❤️",

    "Because you make ordinary moments feel magical ✨",

    "Because you understand me without me saying anything.",

    "Because your voice is my favorite sound.",

    "Because I feel safe when I am with you.",

    "Because you make me want to become a better person.",

    "Because you believe in me even when I don't believe in myself.",

    "Because you are my favorite notification.",

    "Because your happiness matters to me more than anything.",

    "Because you make my heart feel at home.",

    "Because every memory with you is precious.",

    "Because you make me laugh when I don't feel like smiling.",

    "Because I love the way you care about little things.",

    "Because you are beautiful inside and outside.",

    "Because you make my life brighter.",

    "Because I can be completely myself around you.",

    "Because you make distance feel smaller.",

    "Because you are the person I want to tell everything to.",

    "Because you make my heart skip a beat.",

    "Because your hugs feel like home.",

    "Because you are my favorite person.",

    "Because you make every day more special.",

    "Because your happiness makes me happy.",

    "Because you know how to calm my chaos.",

    "Because you are patient with me.",

    "Because you make me feel loved.",

    "Because I love your little habits.",

    "Because I love your laugh.",

    "Because I love your eyes.",

    "Because I love your personality.",

    "Because I love the way you care.",

    "Because you are my biggest comfort.",

    "Because I can talk to you for hours.",

    "Because silence with you is never awkward.",

    "Because you make me feel understood.",

    "Because you are my favorite memory.",

    "Because you are my present.",

    "Because I hope you will be my future.",

    "Because you make me believe in love.",

    "Because you are worth every effort.",

    "Because you inspire me.",

    "Because you motivate me.",

    "Because you make me proud.",

    "Because I love your kindness.",

    "Because I love your strength.",

    "Because I love your heart.",

    "Because you are uniquely you.",

    "Because there is no one else like you.",

    "Because you make my world beautiful.",

    "Because I choose you.",

    "Because I will keep choosing you.",

    "Because you are my favorite hello.",

    "Because I never want to say goodbye.",

    "Because every day with you is a gift.",

    "Because you make my dreams feel possible.",

    "Because I love growing with you.",

    "Because I love learning about you.",

    "Because you are my best friend.",

    "Because you are my partner in everything.",

    "Because I trust you.",

    "Because I respect you.",

    "Because I admire you.",

    "Because I appreciate you.",

    "Because I cherish you.",

    "Because I miss you when you're away.",

    "Because I think about you randomly.",

    "Because you are always in my heart.",

    "Because you are part of my happiest memories.",

    "Because you make my future exciting.",

    "Because I want to travel with you.",

    "Because I want to create more memories with you.",

    "Because I want to watch sunsets with you.",

    "Because I want to watch movies with you.",

    "Because I want to laugh with you.",

    "Because I want to grow old with you.",

    "Because I want to see you achieve your dreams.",

    "Because I want to celebrate your victories.",

    "Because I want to support you during difficult days.",

    "Because I want to be there for you.",

    "Because I want to protect your smile.",

    "Because I want to make you proud.",

    "Because I want to make you feel special.",

    "Because I want you to know how loved you are.",

    "Because you deserve the world.",

    "Because you deserve happiness.",

    "Because you deserve love.",

    "Because you deserve peace.",

    "Because you deserve everything beautiful.",

    "Because you are my favorite chapter.",

    "Because I don't want our story to end.",

    "Because our story is still being written.",

    "Because there are so many memories left to make.",

    "Because I want to fill our future with laughter.",

    "Because I want to hold your hand through life.",

    "Because I want to be your safe place.",

    "Because I want you to always feel loved.",

    "Because my heart chose you.",

    "Because my soul feels connected to you.",

    "Because you are my Bhalu 🐻❤️",

    "Because simply... I love you."

];


let reasonIndex = 0;


const reasonText =
    document.querySelector(
        ".reason-text"
    );

const reasonNumber =
    document.querySelector(
        ".reason-number"
    );

const reasonButton =
    document.querySelector(
        ".heart-button"
    );


function showReason() {

    if (
        !reasonText ||
        !reasonNumber
    ) return;

    reasonText.style.opacity =
        "0";

    reasonText.style.transform =
        "translateY(15px)";

    setTimeout(() => {

        reasonText.textContent =
            reasons[reasonIndex];

        reasonNumber.textContent =
            `REASON ${reasonIndex + 1} OF ${reasons.length}`;

        reasonText.style.opacity =
            "1";

        reasonText.style.transform =
            "translateY(0)";

    }, 250);

    reasonIndex++;

    if (
        reasonIndex >=
        reasons.length
    ) {

        reasonIndex = 0;

    }

}


if (reasonButton) {

    reasonButton.addEventListener(
        "click",
        () => {

            showReason();

            createHeartBurst(
                reasonButton
            );

        }
    );

}


showReason();


/* =====================================================
   10. SECRET MESSAGE
===================================================== */

const secretButton =
    document.querySelector(
        ".secret-btn"
    );

const secretContent =
    document.querySelector(
        ".secret-content"
    );


if (
    secretButton &&
    secretContent
) {

    secretButton.addEventListener(
        "click",
        () => {

            secretContent.classList.add(
                "show"
            );

            secretButton.style.display =
                "none";

            createConfetti();

        }
    );

}


/* =====================================================
   11. SPECIAL QUESTION
===================================================== */

const questionButtons =
    document.querySelectorAll(
        ".question-btn"
    );

const questionResponse =
    document.querySelector(
        ".question-response"
    );


questionButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const answer =
                    button.dataset.answer ||
                    button.textContent;

                if (
                    questionResponse
                ) {

                    questionResponse.textContent =
                        answer;

                }

                createHeartBurst(
                    button
                );

            }
        );

    }
);


/* =====================================================
   12. YES BUTTON
===================================================== */

const yesButton =
    document.querySelector(
        ".yes-btn"
    );


if (yesButton) {

    yesButton.addEventListener(
        "click",
        () => {

            if (
                questionResponse
            ) {

                questionResponse.textContent =
                    "YAYYY! I knew it! 🥹❤️ I love you forever, Bhalu!";

            }

            createConfetti();

            createMassiveHeartBurst();

        }
    );

}


/* =====================================================
   13. NO BUTTON PLAYFUL ESCAPE
===================================================== */

const noButton =
    document.querySelector(
        ".no-btn"
    );


if (noButton) {

    noButton.addEventListener(
        "mouseenter",
        () => {

            const maxX =
                window.innerWidth -
                noButton.offsetWidth -
                30;

            const maxY =
                window.innerHeight -
                noButton.offsetHeight -
                30;

            noButton.style.position =
                "fixed";

            noButton.style.left =
                Math.max(
                    20,
                    Math.random() *
                    maxX
                ) + "px";

            noButton.style.top =
                Math.max(
                    20,
                    Math.random() *
                    maxY
                ) + "px";

        }
    );

}


/* =====================================================
   14. CONFETTI
===================================================== */

function createConfetti() {

    let container =
        document.querySelector(
            ".confetti-container"
        );

    if (!container) {

        container =
            document.createElement(
                "div"
            );

        container.className =
            "confetti-container";

        document.body.appendChild(
            container
        );

    }


    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );

        confetti.className =
            "confetti";

        confetti.style.left =
            Math.random() * 100 +
            "%";

        confetti.style.top =
            "-20px";

        confetti.style.background =
            `hsl(
                ${Math.random() * 360},
                80%,
                65%
            )`;

        confetti.style.animationDelay =
            Math.random() * 1.5 +
            "s";

        container.appendChild(
            confetti
        );

        setTimeout(() => {

            confetti.remove();

        }, 4500);

    }

}


/* =====================================================
   15. HEART BURST
===================================================== */

function createHeartBurst(
    element
) {

    if (!element) return;

    let container =
        document.querySelector(
            ".heart-burst-container"
        );

    if (!container) {

        container =
            document.createElement(
                "div"
            );

        container.className =
            "heart-burst-container";

        document.body.appendChild(
            container
        );

    }


    const rect =
        element.getBoundingClientRect();


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );

        heart.className =
            "burst-heart";

        heart.textContent =
            heartEmojis[
                Math.floor(
                    Math.random() *
                    heartEmojis.length
                )
            ];

        heart.style.left =
            rect.left +
            rect.width / 2 +
            "px";

        heart.style.top =
            rect.top +
            rect.height / 2 +
            "px";


        heart.style.setProperty(
            "--x",
            (
                Math.random() * 300 -
                150
            ) + "px"
        );

        heart.style.setProperty(
            "--y",
            (
                Math.random() * 300 -
                150
            ) + "px"
        );


        container.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}


/* =====================================================
   16. MASSIVE HEART BURST
===================================================== */

function createMassiveHeartBurst() {

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        setTimeout(() => {

            const heart =
                document.createElement(
                    "div"
                );

            heart.textContent =
                heartEmojis[
                    Math.floor(
                        Math.random() *
                        heartEmojis.length
                    )
                ];

            heart.style.position =
                "fixed";

            heart.style.left =
                "50%";

            heart.style.top =
                "50%";

            heart.style.zIndex =
                "99999";

            heart.style.fontSize =
                Math.random() * 30 +
                15 +
                "px";

            heart.style.pointerEvents =
                "none";

            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                Math.random() *
                500 +
                100;

            heart.animate(
                [

                    {
                        transform:
                            "translate(-50%, -50%) scale(0)",

                        opacity:
                            1

                    },

                    {

                        transform:
                            `translate(
                                calc(-50% + ${Math.cos(angle) * distance}px),
                                calc(-50% + ${Math.sin(angle) * distance}px)
                            )
                            scale(1.5)`,

                        opacity:
                            0

                    }

                ],
                {

                    duration:
                        2000,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)"

                }
            );

            document.body.appendChild(
                heart
            );

            setTimeout(() => {

                heart.remove();

            }, 2200);

        }, i * 25);

    }

}


/* =====================================================
   17. FINAL SURPRISE
===================================================== */

const finalHugButton =
    document.querySelector(
        ".final-hug-button"
    );

const finalSurprise =
    document.querySelector(
        ".final-surprise-message"
    );


if (
    finalHugButton &&
    finalSurprise
) {

    finalHugButton.addEventListener(
        "click",
        () => {

            finalSurprise.classList.add(
                "show"
            );

            finalHugButton.style.display =
                "none";

            createConfetti();

            createMassiveHeartBurst();

            setTimeout(() => {

                finalSurprise.scrollIntoView({
                    behavior:
                        "smooth",
                    block:
                        "center"
                });

            }, 500);

        }
    );

}


/* =====================================================
   18. CINEMATIC FINAL MESSAGE
===================================================== */

const finalTyping =
    document.querySelector(
        ".final-typing"
    );


if (finalTyping) {

    const finalText =
        finalTyping.dataset.typing ||
        "No matter where life takes us, I will always choose you.";

    const finalObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            finalTyping.textContent =
                                "";

                            typeText(
                                finalTyping,
                                finalText,
                                70
                            );

                            finalObserver.unobserve(
                                finalTyping
                            );

                        }

                    }
                );

            },
            {
                threshold:
                    0.5
            }
        );


    finalObserver.observe(
        finalTyping
    );

}


/* =====================================================
   19. DOUBLE CLICK LOVE EFFECT
===================================================== */

document.addEventListener(
    "dblclick",
    (event) => {

        const heart =
            document.createElement(
                "div"
            );

        heart.textContent =
            "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.fontSize =
            "50px";

        heart.style.zIndex =
            "99999";

        heart.style.pointerEvents =
            "none";

        heart.animate(
            [

                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity:
                        1

                },

                {

                    transform:
                        "translate(-50%, -150%) scale(1.5)",

                    opacity:
                        0

                }

            ],
            {

                duration:
                    1000

            }
        );

        document.body.appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        }, 1000);

    }
);


/* =====================================================
   20. IMAGE LIGHTBOX
===================================================== */

const galleryImages =
    document.querySelectorAll(
        ".memory-card img, .gallery img"
    );


galleryImages.forEach(
    (image) => {

        image.style.cursor =
            "pointer";

        image.addEventListener(
            "click",
            () => {

                const overlay =
                    document.createElement(
                        "div"
                    );

                overlay.style.position =
                    "fixed";

                overlay.style.inset =
                    "0";

                overlay.style.zIndex =
                    "99999";

                overlay.style.background =
                    "rgba(0,0,0,0.9)";

                overlay.style.display =
                    "flex";

                overlay.style.alignItems =
                    "center";

                overlay.style.justifyContent =
                    "center";

                overlay.style.padding =
                    "20px";

                overlay.style.cursor =
                    "zoom-out";


                const fullImage =
                    document.createElement(
                        "img"
                    );

                fullImage.src =
                    image.src;

                fullImage.style.maxWidth =
                    "95%";

                fullImage.style.maxHeight =
                    "90vh";

                fullImage.style.objectFit =
                    "contain";

                fullImage.style.borderRadius =
                    "20px";

                fullImage.style.boxShadow =
                    "0 0 80px rgba(255,80,150,0.5)";


                overlay.appendChild(
                    fullImage
                );

                document.body.appendChild(
                    overlay
                );


                overlay.addEventListener(
                    "click",
                    () => {

                        overlay.remove();

                    }
                );

            }
        );

    }
);


/* =====================================================
   21. SMOOTH ANCHOR NAVIGATION
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        (anchor) => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );

                    if (
                        target
                    ) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior:
                                "smooth"
                        });

                    }

                }
            );

        }
    );


/* =====================================================
   22. RANDOM HEART ON SCROLL
===================================================== */

let lastScroll =
    0;

window.addEventListener(
    "scroll",
    () => {

        const currentScroll =
            window.scrollY;

        if (
            Math.abs(
                currentScroll -
                lastScroll
            ) > 300
        ) {

            createFloatingHeart();

            lastScroll =
                currentScroll;

        }

    }
);


/* =====================================================
   23. CONSOLE LOVE MESSAGE
===================================================== */

console.log(
    "%c❤️ Hey Bhalu! ❤️",
    "font-size: 25px; color: #ff416c; font-weight: bold;"
);

console.log(
    "%cSomeone made this entire website just to make you smile. 🐻💕",
    "font-size: 15px; color: #ff758c;"
);

console.log(
    "%cYou are very, very loved. ❤️",
    "font-size: 18px; color: #e91e63;"
);


/* =====================================================
   24. INITIALIZE
===================================================== */

// Start the first memory if memory sections exist

if (
    memorySections.length > 0
) {

    memorySections.forEach(
        (section, index) => {

            section.style.display =
                index === 0
                    ? "flex"
                    : "none";

        }
    );

}


// Initial floating hearts

for (
    let i = 0;
    i < 5;
    i++
) {

    setTimeout(
        createFloatingHeart,
        i * 500
    );

}
```

});
