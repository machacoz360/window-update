 let progress = 0;

let bar =
document.getElementById("progress");

let percent =
document.getElementById("percent");

let message =
document.getElementById("message");


let timer=setInterval(()=>{


if(progress < 99){

progress++;

bar.style.width =
progress+"%";

percent.innerHTML =
progress+"%";


}


if(progress == 30){

message.innerHTML =
"Installing security components<span class='dots'></span>";

}


if(progress == 70){

message.innerHTML =
"Configuring updates<span class='dots'></span>";

}


if(progress == 99){

clearInterval(timer);

message.innerHTML =
"Please wait a moment<span class='dots'></span>";

}



},150);

