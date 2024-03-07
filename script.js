function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    let   periods = document.getElementById("periods");
  
    // avoid railway time

    if (hours > 12) {
      periods.innerHTML = "Pm"
      hours = parseInt(hours);
      hours = hours - 12;
      if(hourse < 10){
        hours = "0" + hours.toString();
      }
      else{
        hours = hours.toString();
      }
    }
    //  change am and pm
    else{
      periods.innerHTML = "Am"
    }
  
    //  set the position of digits

    updateFlip("hours-tens", hours[0]);
    updateFlip("hours-ones", hours[1]);
    updateFlip("minutes-tens", minutes[0]);
    updateFlip("minutes-ones", minutes[1]);
    updateFlip("seconds-tens", seconds[0]);
    updateFlip("seconds-ones", seconds[1]);
  }

//    showing the time on screen

  function updateFlip(id, value) {
    const flip = document.getElementById(id);
    const front = flip.querySelector(".front");
    const back = flip.querySelector(".back");
  
    front.querySelector(".flip-digit").textContent = value;
    back.querySelector(".flip-digit").textContent = value;
  }
  
  // Update the clock every second

  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately

  updateClock();