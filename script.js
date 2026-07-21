/* ============================================================
BHALU LOVE STORY — COMPLETE SCRIPT.JS
Built specifically for the supplied index.html
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

```
"use strict";

/* ============================================================
   ELEMENTS
============================================================ */

const loadingScreen = document.getElementById("loadingScreen");
const loadingProgress = document.getElementById("loadingProgress");
const loadingStatus = document.querySelector(".loading-status");

const musicToggle = document.getElementById("musicToggle");
const backgroundMusic = document.getElementById("backgroundMusic");

const floatingHearts = document.getElementById("floatingHearts");
const petals = document.getElementById("petals");
const confettiContainer = document.getElementById("confettiContainer");
const heartBurstContainer = document.getElementById("heartBurstContainer");

const beginJourney = document.getElementById("beginJourney");

const reasonNumber = document.getElementById("reasonNumber");
const reasonText = document.getElementById("reasonText");
const nextReason = document.getElementById("nextReason");

const unlockSecret = document.getElementById("unlockSecret");
const secretContent = document.getElementById("secretContent");

const yesButton = document.getElementById("yesButton");
const thinkButton = document.getElementById("thinkButton");
const questionResponse = document.getElementById("questionResponse");

const finalHugButton = document.getElementById("finalHugButton");
const finalSurpriseMessage =
    document.getElementById("finalSurpriseMessage");

const revealElements =
    document.querySelectorAll(".reveal");

const typingElements =
    document.querySelectorAll(".typing-text");

const navLinks =
    document.querySelectorAll(".main-navigation a");

const allVideos =
    document.querySelectorAll("video");


/* ============================================================
   GLOBAL STATE
============================================================ */

let musicPlaying = false;
let reasonIndex = 0;
let secretUnlocked = false;
let finalSurpriseOpened = false;


/* ============================================================
   01 — LOADING SCREEN
============================================================ */

function startLoadingScreen() {

    if (!loadingScreen || !loadingProgress) {
        return;
    }

    document.body.classList.add("loading-active");

    let progress = 0;

    const loadingMessages = [
        "Preparing our memories...",
        "Collecting beautiful moments...",
        "Writing a little love story...",
        "Adding lots of love...",
        "Almost ready, Bhalu...",
        "Everything is ready for you ❤️"
    ];

    let messageIndex = 0;

    const interval = setInterval(() => {

        progress += Math.floor(
            Math.random() * 8
        ) + 4;

        if (progress >= 100) {
            progress = 100;
        }

        loadingProgress.style.width =
            `${progress}%`;

        if (
            progress > 15 &&
            progress < 35
        ) {
            messageIndex = 1;
        }

        if (
            progress >= 35 &&
            progress < 55
        ) {
            messageIndex = 2;
        }

        if (
            progress >= 55 &&
            progress < 75
        ) {
            messageIndex = 3;
        }

        if (
            progress >= 75 &&
            progress < 95
        ) {
            messageIndex = 4;
        }

        if (progress >= 95) {
            messageIndex = 5;
        }

        if (loadingStatus) {
            loadingStatus.textContent =
                loadingMessages[messageIndex];
        }

        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                loadingScreen.classList.add(
                    "hidden"
                );

                document.body.classList.remove(
                    "loading-active"
                );

                setTimeout(() => {

                    loadingScreen.style.display =
                        "none";

                }, 1000);

                startAmbientEffects();

            }, 800);

        }

    }, 150);

}

startLoadingScreen();


/* ============================================================
   02 — BEGIN JOURNEY BUTTON
============================================================ */

if (beginJourney) {

    beginJourney.addEventListener(
        "click",
        () => {

            const intro =
                document.getElementById("intro");

            if (intro) {

                intro.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

            createHeartBurst(
                beginJourney
            );

            createConfetti(20);

        }
    );

}


/* ============================================================
   03 — MUSIC CONTROL
============================================================ */

if (
    musicToggle &&
    backgroundMusic
) {

    musicToggle.addEventListener(
        "click",
        toggleMusic
    );

}


function toggleMusic() {

    if (!backgroundMusic) {
        return;
    }

    if (musicPlaying) {

        backgroundMusic.pause();

        musicPlaying = false;

        musicToggle.textContent = "🎵";

        musicToggle.classList.remove(
            "playing"
        );

    } else {

        backgroundMusic.play()
            .then(() => {

                musicPlaying = true;

                musicToggle.textContent =
                    "🔊";

                musicToggle.classList.add(
                    "playing"
                );

            })
            .catch(() => {

                console.log(
                    "Music could not autoplay. Click the music button."
                );

            });

    }

}


/* ============================================================
   04 — FLOATING HEARTS
============================================================ */

function createFloatingHeart() {

    if (!floatingHearts) {
        return;
    }

    const heart =
        document.createElement("span");

    heart.className =
        "floating-heart";

    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞",
        "💘",
        "💝"
    ];

    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        `${Math.random() * 100}%`;

    heart.style.fontSize =
        `${12 + Math.random() * 22}px`;

    heart.style.animationDuration =
        `${6 + Math.random() * 7}s`;

    heart.style.animationDelay =
        `${Math.random() * 2}s`;

    floatingHearts.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    }, 15000);

}


function startAmbientEffects() {

    for (
        let i = 0;
        i < 15;
        i++
    ) {

        setTimeout(
            createFloatingHeart,
            i * 200
        );

    }

    setInterval(
        createFloatingHeart,
        900
    );

    setInterval(
        createPetal,
        1200
    );

}


/* ============================================================
   05 — FALLING PETALS
============================================================ */

function createPetal() {

    if (!petals) {
        return;
    }

    const petal =
        document.createElement("span");

    petal.className =
        "petal";

    petal.style.left =
        `${Math.random() * 100}%`;

    petal.style.animationDuration =
        `${5 + Math.random() * 6}s`;

    petal.style.animationDelay =
        `${Math.random() * 2}s`;

    petal.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    petals.appendChild(
        petal
    );

    setTimeout(() => {

        petal.remove();

    }, 14000);

}


/* ============================================================
   06 — SCROLL REVEAL
============================================================ */

if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* ============================================================
   07 — TYPING EFFECT
============================================================ */

function typeText(
    element,
    text,
    speed = 35
) {

    if (!element) {
        return;
    }

    element.textContent = "";

    let index = 0;

    const cursor =
        document.createElement("span");

    cursor.className =
        "typing-cursor";

    cursor.textContent =
        "|";

    element.appendChild(
        cursor
    );


    const interval =
        setInterval(() => {

            if (
                index >= text.length
            ) {

                clearInterval(interval);

                setTimeout(() => {

                    cursor.remove();

                }, 1500);

                return;

            }

            cursor.before(
                document.createTextNode(
                    text[index]
                )
            );

            index++;

        }, speed);

}


if (
    "IntersectionObserver" in window
) {

    const typingObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            const element =
                                entry.target;

                            if (
                                element.dataset.typed ===
                                "true"
                            ) {
                                return;
                            }

                            const text =
                                element.dataset.typing ||
                                element.textContent;

                            element.dataset.typed =
                                "true";

                            typeText(
                                element,
                                text,
                                28
                            );

                            typingObserver.unobserve(
                                element
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.3
            }
        );


    typingElements.forEach(
        (element) => {

            typingObserver.observe(
                element
            );

        }
    );

}


/* ============================================================
   08 — 100 REASONS
============================================================ */

const reasons = [

    "Because your smile can instantly make my worst day better. ❤️",

    "Because you make ordinary moments feel extraordinary.",

    "Because I can be completely myself when I am with you.",

    "Because your happiness genuinely matters to me.",

    "Because you understand me even when I don't know how to explain myself.",

    "Because being with you feels like coming home.",

    "Because your voice is one of my favorite sounds in the world.",

    "Because you are beautiful inside and outside.",

    "Because you inspire me to become a better person.",

    "Because every memory with you is precious to me.",

    "Because you believe in me when I sometimes struggle to believe in myself.",

    "Because you know how to make me laugh.",

    "Because your hugs feel like the safest place.",

    "Because you are my favorite person to talk to.",

    "Because you make my life brighter.",

    "Because you are genuinely one of the most special people in my life.",

    "Because I love the way you care about the people you love.",

    "Because you can still make my heart skip a beat.",

    "Because you are my safe place.",

    "Because every day with you is a gift.",

    "Because your laugh is completely contagious.",

    "Because your presence makes difficult days easier.",

    "Because I love all your little habits and quirks.",

    "Because you are the person I want beside me.",

    "Because you make my world feel more complete.",

    "Because seeing you happy makes me happy.",

    "Because I love listening to your stories.",

    "Because seeing your name on my phone still makes me smile.",

    "Because even silence with you feels comfortable.",

    "Because you bring peace into my heart.",

    "Because you are stronger than you realize.",

    "Because I admire the person you are.",

    "Because you never stop surprising me.",

    "Because you inspire me every day.",

    "Because your heart is beautiful.",

    "Because you make moments unforgettable.",

    "Because you are responsible for so many of my favorite smiles.",

    "Because you make me believe beautiful things are possible.",

    "Because your eyes are beautiful.",

    "Because you make my heart feel warm.",

    "Because you are my favorite adventure.",

    "Because I love growing alongside you.",

    "Because you make love feel special.",

    "Because there is nobody exactly like you.",

    "Because I feel incredibly lucky to know you.",

    "Because you make my dreams feel a little closer.",

    "Because I love every little thing that makes you who you are.",

    "Because you are my favorite hello.",

    "Because saying goodbye to you is always difficult.",

    "Because you make my world brighter just by being in it.",

    "Because your laugh can change my mood instantly.",

    "Because you know me in ways most people don't.",

    "Because I trust you with my heart.",

    "Because you make me feel understood.",

    "Because our silly conversations are some of my favorites.",

    "Because you are my favorite memory in the making.",

    "Because every day with you is worth celebrating.",

    "Because you bring out the best in me.",

    "Because I admire your passion.",

    "Because you make me feel special.",

    "Because you are always somewhere in my thoughts.",

    "Because I love sharing my dreams with you.",

    "Because you make my heart smile.",

    "Because you are my favorite person.",

    "Because you make life more beautiful.",

    "Because you comfort me without always needing words.",

    "Because you make me feel loved.",

    "Because I love your kindness.",

    "Because your soul is beautiful.",

    "Because you can make almost anywhere feel like home.",

    "Because I want to create thousands of memories with you.",

    "Because you are worth every effort.",

    "Because you make my life meaningful.",

    "Because I love the way you care.",

    "Because you make me feel lucky.",

    "Because you are my favorite chapter.",

    "Because I love the story we are creating.",

    "Because I want to write many more chapters with you.",

    "Because you make me believe in love.",

    "Because you are my person.",

    "Because you bring peace to my heart.",

    "Because I genuinely love being around you.",

    "Because you are my favorite human.",

    "Because you make every moment special.",

    "Because your smile is one of my favorite things.",

    "Because you are a huge part of my happiness.",

    "Because I want to see you achieve every dream you have.",

    "Because I will always cheer for you.",

    "Because you deserve to feel loved every single day.",

    "Because I want to give you my best.",

    "Because you make my life unforgettable.",

    "Because I love even the imperfect little things about you.",

    "Because you are perfectly yourself.",

    "Because I would choose you again.",

    "Because you make me feel alive.",

    "Because meeting you was one of the most beautiful surprises of my life.",

    "Because I love every moment we share.",

    "Because my heart chooses you.",

    "Because I hope our future has many beautiful chapters.",

    "Because you are my today.",

    "Because you are a part of the future I dream about.",

    "Because simply... you are you.",

    "And finally, because I love you more than these 100 reasons could ever explain. ❤️"

];


function updateReason() {

    if (
        !reasonText ||
        !reasonNumber
    ) {
        return;
    }

    reasonText.classList.add(
        "reason-changing"
    );

    setTimeout(() => {

        reasonNumber.textContent =
            `REASON ${reasonIndex + 1} OF ${reasons.length}`;

        reasonText.textContent =
            reasons[reasonIndex];

        reasonText.classList.remove(
            "reason-changing"
        );

    }, 250);

}


if (nextReason) {

    nextReason.addEventListener(
        "click",
        () => {

            reasonIndex++;

            if (
                reasonIndex >=
                reasons.length
            ) {

                reasonIndex = 0;

            }

            updateReason();

            createHeartBurst(
                nextReason
            );

        }
    );

}


/* ============================================================
   09 — SECRET MESSAGE
============================================================ */

if (
    unlockSecret &&
    secretContent
) {

    unlockSecret.addEventListener(
        "click",
        () => {

            if (!secretUnlocked) {

                secretUnlocked = true;

                secretContent.hidden =
                    false;

                secretContent.classList.add(
                    "secret-open"
                );

                unlockSecret.textContent =
                    "🔓 My Secret Is Revealed ❤️";

                createHeartBurst(
                    unlockSecret
                );

                createConfetti(40);

            } else {

                secretContent.hidden =
                    true;

                secretContent.classList.remove(
                    "secret-open"
                );

                unlockSecret.textContent =
                    "🔐 Unlock My Secret";

                secretUnlocked = false;

            }

        }
    );

}


/* ============================================================
   10 — SPECIAL QUESTION
============================================================ */

if (yesButton) {

    yesButton.addEventListener(
        "click",
        () => {

            questionResponse.textContent =
                "YAYYY! 🥹❤️ Then let's keep creating beautiful memories together. I promise I will keep trying to make you smile.";

            questionResponse.classList.add(
                "response-visible"
            );

            yesButton.disabled =
                true;

            thinkButton.disabled =
                true;

            createConfetti(80);

            createHeartBurst(
                yesButton
            );

        }
    );

}


if (thinkButton) {

    thinkButton.addEventListener(
        "click",
        () => {

            questionResponse.textContent =
                "Take your time, Bhalu... 🥺❤️ I'll be right here. I just hope one day you'll say yes.";

            questionResponse.classList.add(
                "response-visible"
            );

            thinkButton.textContent =
                "Still Thinking? 🥺";

            createHeartBurst(
                thinkButton
            );

        }
    );

}


/* ============================================================
   11 — HEART BURST
============================================================ */

function createHeartBurst(
    element
) {

    if (
        !element ||
        !heartBurstContainer
    ) {
        return;
    }

    const rect =
        element.getBoundingClientRect();

    const centerX =
        rect.left +
        rect.width / 2;

    const centerY =
        rect.top +
        rect.height / 2;

    const symbols = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓"
    ];


    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const heart =
            document.createElement("span");

        heart.className =
            "burst-heart";

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        heart.style.left =
            `${centerX}px`;

        heart.style.top =
            `${centerY}px`;

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            70 +
            Math.random() *
            150;

        heart.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        heart.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        heartBurstContainer.appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        }, 1800);

    }

}


/* ============================================================
   12 — CONFETTI
============================================================ */

function createConfetti(
    amount = 60
) {

    if (!confettiContainer) {
        return;
    }

    const symbols = [
        "❤️",
        "💕",
        "✨",
        "💖",
        "🌸",
        "💗"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement("span");

        piece.className =
            "confetti-piece";

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            `${Math.random() * 100}%`;

        piece.style.animationDuration =
            `${2 + Math.random() * 4}s`;

        piece.style.animationDelay =
            `${Math.random() * 1.5}s`;

        piece.style.fontSize =
            `${10 + Math.random() * 18}px`;

        confettiContainer.appendChild(
            piece
        );

        setTimeout(() => {

            piece.remove();

        }, 7000);

    }

}


/* ============================================================
   13 — FINAL CINEMATIC SURPRISE
============================================================ */

if (finalHugButton) {

    finalHugButton.addEventListener(
        "click",
        () => {

            if (
                finalSurpriseOpened
            ) {
                return;
            }

            finalSurpriseOpened =
                true;

            if (
                finalSurpriseMessage
            ) {

                finalSurpriseMessage.hidden =
                    false;

                finalSurpriseMessage.classList.add(
                    "surprise-revealed"
                );

                setTimeout(() => {

                    finalSurpriseMessage.scrollIntoView({
                        behavior:
                            "smooth",
                        block:
                            "center"
                    });

                }, 300);

            }

            finalHugButton.textContent =
                "🫂 Hug Received ❤️";

            createHeartBurst(
                finalHugButton
            );

            createConfetti(100);

            /* Try music if it wasn't started */

            if (
                backgroundMusic &&
                !musicPlaying
            ) {

                backgroundMusic.play()
                    .then(() => {

                        musicPlaying =
                            true;

                        if (
                            musicToggle
                        ) {

                            musicToggle.textContent =
                                "🔊";

                        }

                    })
                    .catch(() => {});

            }

        }
    );

}


/* ============================================================
   14 — NAVIGATION
============================================================ */

navLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior:
                        "smooth",
                    block:
                        "start"
                });

            }
        );

    }
);


/* ============================================================
   15 — ACTIVE NAVIGATION
============================================================ */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


if (
    "IntersectionObserver" in window
) {

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            navLinks.forEach(
                                (link) => {

                                    link.classList.remove(
                                        "active"
                                    );

                                }
                            );

                            const activeLink =
                                document.querySelector(
                                    `.main-navigation a[href="#${entry.target.id}"]`
                                );

                            if (
                                activeLink
                            ) {

                                activeLink.classList.add(
                                    "active"
                                );

                            }

                        }

                    }
                );

            },
            {
                threshold:
                    0.35
            }
        );


    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );

}


/* ============================================================
   16 — VIDEO AUTO PAUSE
============================================================ */

allVideos.forEach(
    (video) => {

        video.addEventListener(
            "play",
            () => {

                allVideos.forEach(
                    (otherVideo) => {

                        if (
                            otherVideo !==
                            video
                        ) {

                            otherVideo.pause();

                        }

                    }
                );

            }
        );

    }
);


/* ============================================================
   17 — IMAGE LIGHTBOX
============================================================ */

const galleryImages =
    document.querySelectorAll(
        ".gallery-item img"
    );


galleryImages.forEach(
    (image) => {

        image.addEventListener(
            "click",
            () => {

                openLightbox(
                    image.src,
                    image.alt
                );

            }
        );

    }
);


function openLightbox(
    src,
    alt
) {

    const lightbox =
        document.createElement(
            "div"
        );

    lightbox.className =
        "image-lightbox";

    lightbox.innerHTML = `

        <button
            class="lightbox-close"
            type="button"
            aria-label="Close image"
        >
            ×
        </button>

        <img
            src="${src}"
            alt="${alt}"
        >

    `;

    document.body.appendChild(
        lightbox
    );

    document.body.classList.add(
        "lightbox-open"
    );


    const closeButton =
        lightbox.querySelector(
            ".lightbox-close"
        );


    function closeLightbox() {

        lightbox.classList.add(
            "closing"
        );

        setTimeout(
            () => {

                lightbox.remove();

                document.body.classList.remove(
                    "lightbox-open"
                );

            },
            300
        );

    }


    closeButton.addEventListener(
        "click",
        closeLightbox
    );


    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );


    document.addEventListener(
        "keydown",
        function escapeHandler(
            event
        ) {

            if (
                event.key ===
                "Escape"
            ) {

                closeLightbox();

                document.removeEventListener(
                    "keydown",
                    escapeHandler
                );

            }

        }
    );

}


/* ============================================================
   18 — HERO HEART INTERACTION
============================================================ */

const heroHeart =
    document.querySelector(
        ".hero-heart"
    );


if (heroHeart) {

    let clicks = 0;

    heroHeart.addEventListener(
        "click",
        () => {

            clicks++;

            createHeartBurst(
                heroHeart
            );

            if (
                clicks === 5
            ) {

                createConfetti(
                    50
                );

                heroHeart.textContent =
                    "💖";

                setTimeout(
                    () => {

                        heroHeart.textContent =
                            "❤️";

                    },
                    2000
                );

                clicks = 0;

            }

        }
    );

}


/* ============================================================
   19 — FINAL HEART INTERACTION
============================================================ */

const finalHeart =
    document.querySelector(
        ".final-heart"
    );


if (finalHeart) {

    finalHeart.addEventListener(
        "click",
        () => {

            createHeartBurst(
                finalHeart
            );

            createConfetti(
                30
            );

        }
    );

}


/* ============================================================
   20 — DOUBLE CLICK HEART EFFECT
============================================================ */

document.addEventListener(
    "dblclick",
    (event) => {

        createClickExplosion(
            event.clientX,
            event.clientY
        );

    }
);


function createClickExplosion(
    x,
    y
) {

    const symbols = [
        "❤️",
        "💕",
        "💖",
        "✨"
    ];


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const element =
            document.createElement(
                "span"
            );

        element.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        element.style.position =
            "fixed";

        element.style.left =
            `${x}px`;

        element.style.top =
            `${y}px`;

        element.style.zIndex =
            "99999";

        element.style.pointerEvents =
            "none";

        element.style.fontSize =
            `${12 + Math.random() * 18}px`;

        document.body.appendChild(
            element
        );

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            50 +
            Math.random() *
            100;

        element.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0.5)",
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
                    1000 +
                    Math.random() *
                    500,
                easing:
                    "ease-out"
            }
        );


        setTimeout(
            () => {

                element.remove();

            },
            1600
        );

    }

}


/* ============================================================
   21 — RIPPLE EFFECT FOR BUTTONS
============================================================ */

document
    .querySelectorAll(
        "button"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                function (event) {

                    const ripple =
                        document.createElement(
                            "span"
                        );

                    ripple.className =
                        "button-ripple";

                    const rect =
                        button.getBoundingClientRect();

                    ripple.style.left =
                        `${event.clientX - rect.left}px`;

                    ripple.style.top =
                        `${event.clientY - rect.top}px`;

                    button.appendChild(
                        ripple
                    );

                    setTimeout(
                        () => {

                            ripple.remove();

                        },
                        700
                    );

                }
            );

        }
    );


/* ============================================================
   22 — KEYBOARD SHORTCUT
   Press M = Music
============================================================ */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase() ===
            "m"
        ) {

            toggleMusic();

        }

    }
);


/* ============================================================
   23 — PAGE VISIBILITY
   Pause music when tab hidden
============================================================ */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden &&
            backgroundMusic &&
            musicPlaying
        ) {

            backgroundMusic.pause();

        }

    }
);


/* ============================================================
   24 — CONSOLE MESSAGE
============================================================ */

console.log(
    "%c❤️ BHALU LOVE STORY ❤️",
    "font-size:24px;font-weight:bold;color:#ff5c8a;"
);

console.log(
    "%cMade with love for the most special Bhalu 🐻💕",
    "font-size:14px;color:#e83e70;"
);
```

});
