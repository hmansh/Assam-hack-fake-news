// JavaScript source code

window.addEventListener('click', wordSelected);

function wordSelected() {
    let selectedText = window
        .getSelection()
        .toString()
        .trim();

    let hostName = window.location.hostname;
    console.log(selectedText);
    console.log(hostName);

    if (selectedText.length > 5) {
        let message = {
            text: selectedText
        };
        let host = {
            text: hostName
        };
        chrome.runtime.sendMessage("oloaomebnahhjkdfgeogemdijnhhmlag",message);
        chrome.runtime.sendMessage("oloaomebnahhjkdfgeogemdijnhhmlag",host);
    }
}

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.method == 'Fake')
      alert("Fake news MF");
    if(message.method == 'Real')
      alert("Real news");
  
})

/*chrome.runtime.onMessage.addListener(
 function(request, sender) {
  alert("Contentscript has received a message from from background script: '" + request.message + "'");
  });*/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  // JavaScript source code

window.addEventListener('click', wordSelected);

function wordSelected() {
    let selectedText = window
        .getSelection()
        .toString()
        .trim();

    let hostName = window.location.hostname;
    console.log(selectedText);
    console.log(hostName);

    if (selectedText.length > 5) {
        let message = {
            text: selectedText
        };
        let host = {
            text: hostName
        };
        chrome.runtime.sendMessage("oloaomebnahhjkdfgeogemdijnhhmlag",message);
        chrome.runtime.sendMessage("oloaomebnahhjkdfgeogemdijnhhmlag",host);
    }
}

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.method == 'Fake')
      alert("Fake news MF");
    if(message.method == 'Real')
      alert("Real news");
  
})

/*chrome.runtime.onMessage.addListener(
 function(request, sender) {
  alert("Contentscript has received a message from from background script: '" + request.message + "'");
  });*/
