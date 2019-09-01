console.log("extension ready to go");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message);
    if(message.txt == 'hello'){
        let paragraphs = document.getElementsByTagName('p');
        for(elt of paragraphs){
            elt.innerHTML = message.txt;
        }
    }
}