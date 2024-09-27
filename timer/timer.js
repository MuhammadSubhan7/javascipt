// function updateClock() {
//     const now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();

//     // Format time as HH:MM:SS
//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById('clock').textContent = timeString;
// }

// // Update the clock every second
// setInterval(updateClock, 1000);

// // Initialize clock on page load
// updateClock();


const clock = document.getElementById('clock');

setInterval(function() {


    let date = new Date();

    clock.innerHTML =  date.toLocaleTimeString();
}, 1000);