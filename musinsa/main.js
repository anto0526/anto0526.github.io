const passId = "anto26";
const passPw = "anto26";

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