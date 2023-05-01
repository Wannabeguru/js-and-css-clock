const secondHand = document.querySelector('.second-hand');

    function setDate(){
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360 + 90);
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


   // makes the minute hand move according to current minute.
  const minsHand = document.querySelector('.min-hand');
      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360 + 90);
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  // makes the hours hand move according to the current hour.
  const hrsHand = document.querySelector('.hour-hand');
      const hrs = now.getHours();
      const hrsDegrees = ((hrs / 12) * 360 + 90);
      hrsHand.style.transform = `rotate(${hrsDegrees}deg)`;

    }


  setInterval(setDate, 1000);