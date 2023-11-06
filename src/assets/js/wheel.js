export function preInitWheel() {
    const action = ["100$", " 200$", " 300$", "500$", " 1000$", "full scholarship"];
    let deg = 0;
    let shiftNumber = 0;
    function rotatefunction() {
        let radius = Math.round(Math.random() * 6) * 60;
        let leastCircleRadius = 1800;
        deg = deg + radius + leastCircleRadius;
        document.getElementById("wheel").style.transform = "rotate(" + deg + "deg)";
    
        shiftNumber = deg % 360 / 60;
    
    
        setTimeout(function () {
            modal.classList.toggle("show-modal");
            // var closeButton = document.querySelector(".close-button");
        
            // prompt("You won" + action[shiftNumber]);
            let text = action[shiftNumber];
            document.getElementById('category').innerHTML = " ";
            document.getElementById('category').innerHTML = "You Won: " + text;``
            let new_li = document.createElement('li');
            new_li.innerHTML = '<span>' + action[shiftNumber] + '</span>';
            console.log(new_li.innerHTML);
            let Wheel_stopped = document.getElementById('Wheel_stopped');
            Wheel_stopped.prepend(new_li);
        }, 5000); //5000 = 5 second
    
    }
    
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    
}