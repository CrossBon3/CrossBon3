let message = document.querySelector(".msg")
const button = document.querySelector('.btn')
function sendMessage(){
    console.log(message.value)
}
button.addEventListener("click", sendMessage)