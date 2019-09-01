// console.log('background running');

// chrome.runtime.onMessage.addListener(receiver);

// window.word = "coding train";

// function receiver(request, sender, sendResponse) {
//   console.log(request);
//   word = request.text;
// }

chrome.runtime.onMessage.addListener(receiver);

// A "global" variable to store the word selected by the user
var word;

// Get the message from the content script
function receiver(request, sender, sendResponse) {
  // Save the word
  word = request.word;
}