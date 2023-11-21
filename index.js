const hourEl=document.querySelector(".hour");
const minuteEl=document.querySelector(".minutes");
const secondsEl=document.querySelector(".seconds");

function updateClock(){
    const cuurentDate=new Date();
   // setTimeout(updateClock,1000);
    const hour=cuurentDate.getHours()
    const minutes=cuurentDate.getMinutes()
    const seconds=cuurentDate.getSeconds()

    const hourDeg=(hour/12)*360;
    hourEl.style.transform=`rotate(${hourDeg}deg)`;

    const minuteDeg=(minutes/60)*360;
    minuteEl.style.transform=`rotate(${minuteDeg}deg)`;

    const secondDeg=(seconds/60)*360;
    secondsEl.style.transform=`rotate(${secondDeg}deg)`;
   
}
//updateClock();
setInterval(updateClock)



