function nextPage(pageNumber) {

    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    document.getElementById("page" + pageNumber)
        .classList.add("active");

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showEvidence() {

    const evidence = document.getElementById("evidence");

    evidence.classList.remove("hidden");

}


function openLetter() {

    const letter = document.getElementById("letter");

    letter.classList.remove("hidden");

    // Create a little celebration
    createConfetti();

}


function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = Math.random() * 15 + 10 + "px";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const animation = confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: Math.random() * 2000 + 2000,
                easing: "ease-out"
            }
        );

        animation.onfinish = () => {
            confetti.remove();
        };

    }

                  }
