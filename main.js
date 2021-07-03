const passId = "anto26";
const passPw = "1q2w3e4r";

function clickOkButton() {
    const id = document.getElementById("inputId").value;
    const pw = document.getElementById("inputPw").value;

    if(passId == id && passPw == pw){
        alert("pass");
    }
    else{
        alert("no");
    }
}