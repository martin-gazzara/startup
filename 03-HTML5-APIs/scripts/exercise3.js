var wsUri = "wss://echo.websocket.org/";
var webSocket;

let chat = document.getElementById("chat"),
    connectButton = document.getElementById("connect"),
    sendButton = document.getElementById("send-button"),
    message_field = document.getElementById("message"),
    state = document.getElementById("status");

sendButton.onclick = () => {

    let div = document.createElement("div");
    let text = message_field.value;
    div.classList = "message you";
    div.innerHTML = "<b>You</b><br><p>" + text;
    chat.appendChild(div);
    webSocket.send(text);
}

connectButton.onclick = () => {
    
    if(state.innerHTML == "Offline"){
        connect();
    }else{
        disconnect();
    }
};

function connect(){

    webSocket = new WebSocket(wsUri);
    webSocket.onopen = event => onOpen(event);
    webSocket.onclose = event =>  onClose(event) ;
    webSocket.onmessage = event => onMessage(event);
    webSocket.onerror = event => onError(event);

    state.innerHTML = "Online";
    state.style.color = "#24e40b";

    connectButton.innerHTML = "Disconnect";
}

function disconnect(){
    webSocket.close();

    state.innerHTML = "Offline";
    state.style.color = "#e40b0b";

    connectButton.innerHTML = "Connect";
}

function changeStatus(){

    
    
}

function onOpen(event){
    changeStatus();
}

function onMessage(event){

    console.log("flag");
    let div = document.createElement("div");
    let text = event.data;
    div.classList = "message eco";
    div.innerHTML = "<b>Eco</b><br><p>" + text;
    chat.appendChild(div);

}

