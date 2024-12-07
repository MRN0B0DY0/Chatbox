let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatcontainerEl = document.getElementById("chatContainer");
let userinputEl = document.getElementById("userInput");

function sendMsgBtn() {
    let indexoflist = Math.ceil(((Math.random()) * 5) - 1);

    let userinputvalue = userinputEl.value;

    let usermsgcontenerEl = document.createElement("div");
    usermsgcontenerEl.classList.add("msg-to-chatbot-container");
    chatcontainerEl.appendChild(usermsgcontenerEl);

    let usermsg = document.createElement("span");
    usermsg.textContent = userinputvalue;
    usermsg.classList.add("msg-to-chatbot");
    usermsgcontenerEl.appendChild(usermsg);

    let botmsgcontenerEl = document.createElement("div");
    botmsgcontenerEl.classList.add("msg-from-chatbot-container");
    chatcontainerEl.appendChild(botmsgcontenerEl);

    let botmsg = document.createElement("span");
    botmsg.textContent = chatbotMsgList[indexoflist];
    botmsg.classList.add("msg-from-chatbot");
    botmsgcontenerEl.appendChild(botmsg);

    userinputEl.value = "";

}