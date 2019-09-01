
function setup() {
    noCanvas();
    let userinput = select('#userinput');
    userinput.input(changeText);
}

function changeText(tab){

    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs){
    let message = userinput.value();
    let msg = {
        txt: userinput.value()
    }
    chrome.tabs.sendMessage(tabs[0].id, msg);
    }
    
}