
function myFunction(){
    let checkBox = document.getElementById("myCheck");
    let progressBar = document.getElementById("file");
    
    if (checkBox.checked == true){
        progressBar.value = "75";
    }
    else{
        progressBar.value = "0";
    }
}
let countDate = new Date('aug 30,2021 00:00:00').getTime();

function CountDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor(gap % (day) / (hour));
    let m = Math.floor(gap % (hour) / (minute));
    let s = Math.floor(gap % (minute) / (second));


    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText= s;
}

setInterval(function(){
    CountDown();
},1000)
// function check() {
//     document.getElementById("myCheck").checked = true;
//   }
  
//   function uncheck() {
//     document.getElementById("myCheck").checked = false;
//   }