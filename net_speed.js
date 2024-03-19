// // Let's initialize the primitives
// var startTime, endTime, fileSize;

// // Set up the AJAX to perform
// var xhr = new XMLHttpRequest();

// // Rig the call-back... THE important part
// xhr.onreadystatechange = function () {

//   // we only need to know when the request has completed
//   if (xhr.readyState === 4 && xhr.status === 200) {

//     // Here we stop the timer & register end time
//     endTime = (new Date()).getTime();

//     // Also, calculate the file-size which has transferred
//     fileSize = xhr.responseText.length;
//     // N.B: fileSize reports number of Bytes

//     // Calculate the connection-speed
//     var speed = fileSize / ((endTime - startTime)/1000) / 1024;
//     // Use (fileSize * 8) instead of fileSize for kBps instead of kbps

//     // Report the result, or have fries with it...
//     console.log(speed + " kbps\n");
//   }
// }

// // Snap back; here's where we start the timer
// startTime = (new Date()).getTime();

// // All set, let's hit it!
// xhr.open("GET", "URL/TO/PROBE.FILE", true);
// xhr.send();
let startTime,endTime;
let imageSize="";
let image=new Image();
let bitSpeed=document.getElementById("bits"),
kbSpeed=document.getElementById("kbs"),
mbSpeed=document.getElementById("mbs"),
info=document.getElementById("info");
let totalBitSpeed=0;
let totalKbSpeed=0;
let totalMbSpeed=0;
let numTests=2;
let testCompleted=0;

let imageApi="https://source.unsplash.com/random?topic=nature";
image.onload=async function(){
  endTime=new Date().getTime();
  await fetch(imageApi).then((response)=>{
    imageSize=response.headers.get("content-length");
    calculateSpeed();
  });
}

function calculateSpeed(){
  let timeduration=(endTime-startTime)/1000;
  let loadedbits=imageSize*8;
  let speedinbits=loadedbits/timeduration;
  let speedinkbs=speedinbits/1024;
  let speedinmbs=speedinkbs/1024;

  totalBitSpeed +=speedinbits;
  totalKbSpeed +=speedinkbs;
  totalMbSpeed+=speedinmbs;
  testCompleted++;
if(testCompleted==numTests)
{
  let averagespeedinbps=(totalBitSpeed/numTests).toFixed(2);
  let averagespeedinkbps=(totalKbSpeed/numTests).toFixed(2);
  let averagespeedinmbps=(totalMbSpeed/numTests).toFixed(2);
  bitSpeed.innerHTML +=`${averagespeedinbps}`;;
  kbSpeed.innerHTML +=`${averagespeedinkbps}`;;
  mbSpeed.innerHTML +=`${averagespeedinmbps}`;;
}
else{
  startTime=new Date().getTime();
  image.src=imageApi;

}
}
const init=async()=>{
  info.innerHTML="Testing...";
  startTime=new Date().getTime();
  image.src=imageApi;
};
window.onload=()=>{
  for(let i=0;i<numTests;i++)
  {
    init();
  }
}