 function updateClock(){
    const date=new Date();
    let  hour=date.getHours()
    const meridium=hour>=12?  "PM" : "AM"
    hour=hour%12 || 12;
    hour = hour.toString().padStart(2,0)
    
    const minute=date.getMinutes().toString().padStart(2,0);
    const secon=date.getSeconds().toString().padStart(2,0);
    const Time=`${hour}:${minute}:${secon} ${meridium}`
    document.getElementById("clock").textContent=Time;
  
 }
 updateClock();
 setInterval(updateClock)
  