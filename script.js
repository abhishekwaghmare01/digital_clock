const time = document.getElementById('.time');
const timeFormat = document.getElementById('.timeformat');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime, 1000);
})
const showTime = ()=>{
    const date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // console.log("hour"+ hr + "min"+ min + "sec "+ sec);
    
}