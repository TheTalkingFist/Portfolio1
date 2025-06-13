function updateShadows() {
    const textContainer = document.getElementById("title");
    const letters = textContainer.querySelectorAll("span");
    const centerX = window.innerWidth / 2; // Center of the screen

    letters.forEach(letter => {
        const rect = letter.getBoundingClientRect();
        const letterCenter = rect.left + rect.width / 2;
        const offset = (letterCenter - centerX) / 10; // Adjust sensitivity

        letter.style.setProperty("--shadow-x", `${offset}px`);
    });
}

// Initial calculation
updateShadows();

// Update on window resize
window.addEventListener("resize", updateShadows);

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('title')
    const text = header.innerText;
    header.innerHTML = '';

    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.innerText = letter;
        span.style.position = 'relative';
        span.style.display = 'inline-block';

        let randY = (Math.random() * 2 - 1) * 1000;
        let randX = (Math.random() * 2 - 1) * 1000;

        span.style.transform = `translate(${randX}px, ${randY}px) rotate(${Math.random() * 100}deg)`;
        
        span.style.animation = `backtoPlace 3s ease-in-out forwards ${index * 0.03}s`;

        span.addEventListener("animationend", (event) => {
            if (event.animationName === "backtoPlace") {
                span.style.transform = "translate(0, 0) rotate(0deg)";
                span.style.animation = `float 3s ease-in-out infinite ${index * 0.03}s`;
            }
        });

           
        header.appendChild(span);
    });
});


