document.addEventListener('DOMContentLoaded', function() {
    const specialMessage = document.getElementById('specialMessage');

    // Function to change the color of the message randomly
    function number(){
        return Math.floor(Math.random()*256)
    }
   
    function changeColor() {
        let randomColor = 'rgb(' + number() + ',' + number() + ',' + number() +')';
        specialMessage.style.color = randomColor;
    }

    // Blink the message and change color every 500 milliseconds
    setInterval(function() {
        specialMessage.style.visibility = (specialMessage.style.visibility === 'hidden') ? 'visible' : 'hidden';
        changeColor();
    }, 500);
});
document.addEventListener('DOMContentLoaded', function() {
    const one = document.getElementById('one');

    // Function to change the color of the message randomly
    function number(){
        return Math.floor(Math.random()*256)
    }
    
    function changeColor() {
        let randomColor = 'rgb(' + number() + ',' + number() + ',' + number() +')';
        one.style.color = randomColor;
    }

    // Blink the message and change color every 500 milliseconds
    setInterval(function() {
        one.style.visibility = (one.style.visibility === 'hidden') ? 'visible' : 'hidden';
        changeColor();
    }, 500);
});


document.addEventListener('DOMContentLoaded', function() {
    const two = document.getElementById('two');

    // Function to change the color of the message randomly
    function number(){
        return Math.floor(Math.random()*256)
    }
    
    function changeColor() {
        let randomColor = 'rgb(' + number() + ',' + number() + ',' + number() +')';
        two.style.color = randomColor;
    }

    // Blink the message and change color every 500 milliseconds
    setInterval(function() {
        two.style.visibility = (two.style.visibility === 'hidden') ? 'visible' : 'hidden';
        changeColor();
    }, 800);
});