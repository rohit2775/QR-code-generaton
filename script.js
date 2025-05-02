 
var imageBox = document.querySelector("#imageBox")
var qrImage = document.querySelector("#qrImage")
var qrText = document.querySelector("#qrText")



function generateqr(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
}

