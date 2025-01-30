let htmlInp = document.querySelector(".text1456");
let cssInp = document.querySelector(".text2456");
let jsInp = document.querySelector(".text3456");
let output = document.querySelector(".op456")
let utils = document.querySelector(".addCbtn")
let js = document.querySelector("#java456");

let codeBtn = document.querySelector('.codeBtn')
let outputBtn = document.querySelector('.outputBtn')

let mainButton = document.querySelector("#mb456")


window.addEventListener("load",(e)=>{
    // htmlInp.value = localStorage.getItem("html")
    // cssInp.value =  localStorage.getItem("css")
    // jsInp.value = localStorage.getItem("js")

    let data = JSON.parse(localStorage.getItem("code"))
    if(data){
        htmlInp.value = data.html
        cssInp.value =  data.css
        jsInp.value = data.js
    }
})


function add2(){
    output.contentWindow.eval(jsInp.value);
    
    outputBtn.style.backgroundColor = '#9c9c9c'
    codeBtn.style.backgroundColor = ''
    document.querySelector('.text456').style.display = 'flex'
    document.querySelector('.op456').style.display = 'flex'
    
    localStorage.setItem("code",JSON.stringify({
        "html": htmlInp.value,
        "css": cssInp.value,
        "js": jsInp.value
    }))
    output.contentDocument.body.innerHTML = htmlInp.value+"<style>"+cssInp.value+"</style>";
    
}
function add1(){
    output.contentDocument.body.innerHTML = htmlInp.value+"<style>"+cssInp.value+"</style>";
}
function deleteHistory(){
    let res = confirm("Do you want to delete History")
    if(res){
        localStorage.removeItem("code")
        htmlInp.value = ""
        cssInp.value = ""
        jsInp.value = ""
    }
}


// utility
function insertText(id,value) {
    // Get the textarea element
    const textarea = id 
    // Save the cursor position
    const cursorPosition = textarea.selectionStart;
    // Get the current text of the textarea
    const currentText = textarea.value;
    // Insert "Hello World" at the cursor's position
    const textBeforeCursor = currentText.slice(0, cursorPosition);
    const textAfterCursor = currentText.slice(cursorPosition);
    textarea.value = textBeforeCursor + value + textAfterCursor;
    // Move the cursor to the end of the inserted text
    textarea.selectionStart = textarea.selectionEnd = cursorPosition + value.length;
    // Focus back on the textarea
    textarea.focus();
}



/** HTML functions */
function addDIV(){
    insertText(htmlInp,"<div>\t\n\n</div>\n")
}
function addInput(){
    insertText(htmlInp, "<input type=\"text\" placeholder=\"Enter text here\">\n")
}
function addButton(){
    insertText(htmlInp,"<button> btn </button>\n")
}
function addSpan(){
    insertText(htmlInp,"<span>\t</span>\n")
}
function addImg(){
    insertText(htmlInp,"<img src=\"./heart.svg\" alt=\"img\">\n")
}


/** CSS functions */
function DisplayFlex(){
    insertText(cssInp, "display: flex;\n")
}
function COLOR(){
insertText(cssInp, "color: #000000;\n")
}
function BGCOLOR(){
    insertText(cssInp, "background-color: #ffffff;\n")
}
function Margin(){
    insertText(cssInp, "height: 100px;\n")
}
function Padding(){
    insertText(cssInp, "width: 100px;\n")
}
function Border(){
    insertText(cssInp, "border: 1px solid #000000;\n")
}


/** JS functions */
function addConsole(){
    insertText(jsInp, "console.log();")
}
function addAlert(){
    insertText(jsInp, "alert('');")
}
function addConfirm(){
    insertText(jsInp, "let result = confirm('');")
}
function addFunc(){
    insertText(jsInp, "function functionName() {\n\n}")
}



document.getElementById("bx1").addEventListener("click",()=>{
    document.querySelector('.HTML ').style.display = 'flex'
    document.querySelector('.CSS').style.display = 'none'
    document.querySelector('.JS').style.display = 'none'
    document.getElementById("bx1").style.backgroundColor="#643030";
    document.getElementById("bx2").style.backgroundColor="#ff2121";
    document.getElementById("bx3").style.backgroundColor="#ff2121";

    document.getElementById("bx1").style.scale="1.1";
    document.getElementById("bx2").style.scale="1";
    document.getElementById("bx3").style.scale="1";

    document.querySelector(".text1456").style.display = "flex";
    document.querySelector(".text2456").style.display = "none";
    document.querySelector(".text3456").style.display = "none";

    document.querySelector(".text1456").focus()
})

document.getElementById("bx2").addEventListener("click",()=>{
    document.querySelector('.CSS').style.display = 'flex'
    document.querySelector('.HTML').style.display = 'none'
    document.querySelector('.JS').style.display = 'none'
    document.getElementById("bx2").style.backgroundColor="#643030";
    document.getElementById("bx1").style.backgroundColor="#ff2121";
    document.getElementById("bx3").style.backgroundColor="#ff2121";
    
    document.getElementById("bx2").style.scale="1.1";
    document.getElementById("bx1").style.scale="1";
    document.getElementById("bx3").style.scale="1";

    document.querySelector(".text2456").style.display = "flex";
    document.querySelector(".text1456").style.display = "none";
    document.querySelector(".text3456").style.display = "none";

    document.querySelector(".text2456").focus()
})

document.getElementById("bx3").addEventListener("click",()=>{
    document.querySelector('.JS').style.display = 'flex'
    document.querySelector('.HTML').style.display = 'none'
    document.querySelector('.CSS').style.display = 'none'
    document.getElementById("bx3").style.backgroundColor="#643030";
    document.getElementById("bx2").style.backgroundColor="#ff2121";
    document.getElementById("bx1").style.backgroundColor="#ff2121";

    document.getElementById("bx3").style.scale="1.1";
    document.getElementById("bx1").style.scale="1";
    document.getElementById("bx2").style.scale="1";

    document.querySelector(".text3456").style.display = "flex";
    document.querySelector(".text2456").style.display = "none";
    document.querySelector(".text1456").style.display = "none";

    document.querySelector(".text3456").focus()
})



function toggleCode(params) {
    codeBtn.style.backgroundColor = '#9c9c9c'
    outputBtn.style.backgroundColor = ''

    utils.style.display = "flex"
    
    document.querySelector('.text456').style.display = 'flex'
    document.querySelector('.changer').style.display = 'flex'
    document.querySelector('.op456').style.display = 'none'
}
function toggleOutput(params) {
    output.contentDocument.body.innerHTML = htmlInp.value+"<style>"+cssInp.value+"</style>";
    output.contentWindow.eval(jsInp.value);

    localStorage.setItem("code",JSON.stringify({
        "html": htmlInp.value,
        "css": cssInp.value,
        "js": jsInp.value
    }))

    utils.style.display = "none"
    output.style.height = "100%"
    output.style.marginTop = "30px"

    outputBtn.style.backgroundColor = '#9c9c9c'
    codeBtn.style.backgroundColor = ''
    document.querySelector('.text456').style.display = 'none'
    document.querySelector('.changer').style.display = 'none'
    document.querySelector('.op456').style.display = 'flex'
}


document.querySelectorAll('textarea').forEach(function(textarea) {
  textarea.addEventListener('keydown', function(e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
  
      // कैरेट के पहले और बाद के टेक्स्ट के बीच टैब जोड़ें
      this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
  
      // कैरेट को सही स्थिति पर रखें
      this.selectionStart =
        this.selectionEnd = start + 1;
    }
  });
});



function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save preference in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load theme from local storage on page load
document.addEventListener("DOMContentLoaded", (event) => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("modeToggle").checked = true;
    }
});


