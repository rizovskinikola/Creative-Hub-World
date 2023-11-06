export function programToggle() {
    const acc = document.getElementsByClassName("accordion");

    const toggleAccordion = (accordion) => {
        accordion.classList.toggle("active");
        accordion.children[0].classList.toggle("program-item-number")
        accordion.children[0].classList.toggle("program-active-number")
        accordion.children[1].classList.toggle("program-item-name")
        accordion.children[1].classList.toggle("program-active-name")
        const panel = accordion.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    for (let i = 0; i < acc.length; i++) {
        if (i === 0) toggleAccordion(acc[0]);
        acc[i].addEventListener("click", () => toggleAccordion(acc[i]));
    }

    const accEmployment = document.getElementsByClassName("accordion-employment");

    for (let i = 0; i < accEmployment.length; i++) {
        accEmployment[i].addEventListener("click", function () {
            this.classList.toggle("active");
            const panelEmployment = this.nextElementSibling;
            if (panelEmployment.style.display === "block") {
                panelEmployment.style.display = "none";
            } else {
                panelEmployment.style.display = "block";
            }
        });
    }
}