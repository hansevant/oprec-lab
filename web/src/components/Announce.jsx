import React from 'react'

function Announce() {

    var countDownDate = new Date("Sep 22, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    
    if(days === 0){ days = ""}else{days = days + " Hari "}
    if(hours === 0){ hours = ""}else{hours = hours + " Jam "}
    if(minutes === 0){ minutes = ""}else{minutes = minutes + " Menit "}
  
    // Display the result in the element with id="demo"
    const demo = document.getElementById("demo");
    if(demo){
      demo.innerHTML = days + hours + minutes + seconds + " Detik";
    }
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 0);  

  return (
    <div className="bg-c5 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
            Sisa Waktu Pendaftaran <span id='demo' className='text-c4 font-semibold underline'></span> Lagi...
        </p>
    </div>
  )
}

export default Announce