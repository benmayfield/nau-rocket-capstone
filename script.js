/* =========================================================
   VIDEO HOVER PREVIEW
   Plays the entire launch video on hover with seamless
   looping. Muted by default with a mute button to unmute.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const video = document.querySelector("#launchPreview");
    const muteButton = document.querySelector("#muteButton");
    const videoContainer = document.querySelector(".video-container");
    let isHovering = false;

    if (!video) return;

    // Mute by default
    video.muted = true;
    video.volume = 0.05;

    // Add mute button class
    muteButton.classList.add("muted");

    // Hover to play with seamless looping
    videoContainer.addEventListener("mouseenter", () => {
        isHovering = true;
        video.play();
    });

    // Stop playing when mouse leaves container
    videoContainer.addEventListener("mouseleave", () => {
        isHovering = false;
        video.pause();
    });

    // Seamless loop while hovering
    video.addEventListener("ended", () => {
        if (isHovering) {
            video.play();
        }
    });

    // Click video to toggle play/pause
        video.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

    // Navigate to launches page on caption click
    const videoCaption = document.querySelector(".video-caption");
    if (videoCaption) {
        videoCaption.addEventListener("click", () => {
            location.href = "launches.html";
        });
    }

    // Mute button toggle
    muteButton.addEventListener("click", (e) => {
        e.stopPropagation();
        video.muted = !video.muted;

        if (video.muted) {
            muteButton.classList.add("muted");
            muteButton.classList.remove("unmuted");
            muteButton.title = "Unmute";
        } else {
            muteButton.classList.add("unmuted");
            muteButton.classList.remove("muted");
            muteButton.title = "Mute";
        }
    });

});

/* =========================================================
   MOBILE HAMBURGER MENU
   Toggles side panel navigation on mobile devices
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sidePanel = document.getElementById("sidePanel");
    const bars = document.querySelectorAll(".bar");

    if (hamburger && sidePanel) {
        hamburger.addEventListener("click", () => {
            sidePanel.classList.toggle("open");
            
            // Animate hamburger bars
            bars.forEach((bar, index) => {
                if (sidePanel.classList.contains("open")) {
                    if (index === 0) bar.style.transform = "rotate(45deg) translate(5px, 5px)";
                    if (index === 1) bar.style.opacity = "0";
                    if (index === 2) bar.style.transform = "rotate(-45deg) translate(7px, -6px)";
                } else {
                    bar.style.transform = "none";
                    bar.style.opacity = "1";
                }
            });
        });

        // Close side panel when clicking on a link
        const mobileLinks = document.querySelectorAll(".mobile-nav-links a");
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                sidePanel.classList.remove("open");
                bars.forEach(bar => {
                    bar.style.transform = "none";
                    bar.style.opacity = "1";
                });
            });
        });
    }
});