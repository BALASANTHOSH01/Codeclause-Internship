function startTimer(duration, display) {
  var timer = duration, hours ,minutes, seconds ;
  var i = 0;
  timeid = setInterval(function () {
      hours = parseInt(timer / 3600 ,10);
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      if(i > 0){
        display.textContent = hours + " : " + minutes + " : " + seconds;
      }
      if (--timer < 0) {
          timer = duration;
        
      } 
    i++;
    if( hours == 0 && minutes == 0 && seconds == 0){
      clearInterval(timeid);
      document.querySelector('#log').textContent = "Done";
      document.querySelector('#output').textContent = "";
      document.querySelector('#b').innerHTML = "Set";
      document.querySelector('#b').dataset.set = 1;
    }
  }, 1000);
}

function StartCount(x) {
if(x.dataset.set == 1){
 hr = document.getElementById('countH').value;
 min = document.getElementById('countM').value;
 sec = document.getElementById('countS').value;
 if(hr || min || sec){
   hr = hr == 0 ? 0 : hr ;
   min = min == 0 ? 0 : min ;
   sec = sec == 0 ? 0 : sec ;
  var time_in_sec =  (parseInt(hr,10)*60*60) + (parseInt(min,10)*60) + (parseInt(sec,10));
  display = document.querySelector('#output');
  startTimer(time_in_sec , display);

 } else {
    display.textContent = "Please Set Time";
 }
 document.querySelector('#b').innerHTML = "Stop";
 document.querySelector('#b').dataset.set = 2;
 document.querySelector('#log').textContent = "";
} else if(x.dataset.set == 2){
 clearInterval(timeid);
 document.querySelector('#b').innerHTML = "Set";
 document.querySelector('#b').dataset.set = 1;
 document.querySelector('#output').textContent = "";
}
  
};
