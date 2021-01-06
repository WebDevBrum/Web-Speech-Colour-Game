window.SpeechRecognition =
  window.SpeechRecogntion || window.webkitSpeechRecognition;

function start() {
  // see if their browser supports this
  if (!("SpeechRecognition" in window)) {
    console.log("Sorry your browser does not support speech recognition");
    return;
  }
  // if does work
  console.log("Starting...");
  // make a new specch reco
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
