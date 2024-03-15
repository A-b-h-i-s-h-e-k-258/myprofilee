// Let's initialize the primitives
var startTime, endTime, fileSize;

// Set up the AJAX to perform
var xhr = new XMLHttpRequest();

// Rig the call-back... THE important part
xhr.onreadystatechange = function () {

  // we only need to know when the request has completed
  if (xhr.readyState === 4 && xhr.status === 200) {

    // Here we stop the timer & register end time
    endTime = (new Date()).getTime();

    // Also, calculate the file-size which has transferred
    fileSize = xhr.responseText.length;
    // N.B: fileSize reports number of Bytes

    // Calculate the connection-speed
    var speed = fileSize / ((endTime - startTime)/1000) / 1024;
    // Use (fileSize * 8) instead of fileSize for kBps instead of kbps

    // Report the result, or have fries with it...
    console.log(speed + " kbps\n");
  }
}

// Snap back; here's where we start the timer
startTime = (new Date()).getTime();

// All set, let's hit it!
xhr.open("GET", "URL/TO/PROBE.FILE", true);
xhr.send();