

setInterval(function(){
 const clock=document.querySelector(".display");
 let time=new Date();
 let sec =time.getSeconds();
 let min =time.getMinutes();
 let hr =time.getUTCHours();
 let day='AM';
 if(hr >12){
     day='PM';
     hr=hr-12;
 }
 if(hr ==0){
     hr=12;
 }
 if(sec<10){
     sec='0'+sec;
 }
 
 // alert(hr + "hr" + min + "min" + sec + "sec");
 clock.textContent=hr+':'+min+':'+sec+""+day;
});