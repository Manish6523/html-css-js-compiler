let htmlInp = document.querySelector(".text1456");
let cssInp = document.querySelector(".text2456");
let jsInp = document.querySelector(".text3456");
let output = document.querySelector(".op456")
let js = document.querySelector("#java456");

let codeBtn = document.querySelector('.codeBtn')
let outputBtn = document.querySelector('.outputBtn')

let mainButton = document.querySelector("#mb456")
function add2(){
    output.contentDocument.body.innerHTML = htmlInp.value+"<style>"+cssInp.value+"</style>";
    output.contentWindow.eval(jsInp.value);
    
    outputBtn.style.backgroundColor = '#9c9c9c'
    codeBtn.style.backgroundColor = ''
    document.querySelector('.text456').style.display = 'flex'
    document.querySelector('.op456').style.display = 'flex'
}
function add1(){
    output.contentDocument.body.innerHTML = htmlInp.value+"<style>"+cssInp.value+"</style>";
}

/** HTML functions */
function addDIV(){
    document.querySelector('.text1456').value += `<div class='a'>\n\t\n</div>\n\n`
}
function addInput(){
    document.querySelector('.text1456').value += `<input type="text" name="" id="">\n\n`
}
function addButton(){
    document.querySelector('.text1456').value += `<button> Button </button>\n\n`
}
function addSpan(){
    document.querySelector('.text1456').value += `<span>\t</span>\n\n`
}


/** CSS functions */
function DisplayFlex(){
    document.querySelector('.text2456').value += `\tdisplay: flex ;\n`
}
function COLOR(){
    document.querySelector('.text2456').value += `\tcolor: green ;\n`
}
function BGCOLOR(){
    document.querySelector('.text2456').value += `\tbackground-color: red ;\n`
}
function Margin(){
    document.querySelector('.text2456').value += `\theight: 90px ;\n`
}
function Padding(){
    document.querySelector('.text2456').value += `\twidth: 90px ;\n`
}
function Border(){
    document.querySelector('.text2456').value += `\tborder: 2px solid black ;\n`
}


/** JS functions */
function addConsole(){
    document.querySelector('.text3456').value += `console.log(\t );\n`
}
function addAlert(){
    document.querySelector('.text3456').value += `alert(\t);\n`
}
function addConfirm(){
    document.querySelector('.text3456').value += `confirm(\t);\n`
}
function addFunc(){
    document.querySelector('.text3456').value += `function xyz(\t ){\n\t\n}\n`
}




document.getElementById("bx1").addEventListener("click",()=>{
    document.querySelector('.HTML ').style.display = 'flex'
    document.querySelector('.CSS').style.display = 'none'
    document.querySelector('.JS').style.display = 'none'
    document.getElementById("bx1").style.backgroundColor="#3e4045";
    document.getElementById("bx2").style.backgroundColor="#1f2023";
    document.getElementById("bx3").style.backgroundColor="#1f2023";
    document.querySelector(".text1456").style.zIndex = "5";
    document.querySelector(".text2456").style.zIndex = "1";
    document.querySelector(".text3456").style.zIndex = "1";
})

document.getElementById("bx2").addEventListener("click",()=>{
    document.querySelector('.CSS').style.display = 'flex'
    document.querySelector('.HTML').style.display = 'none'
    document.querySelector('.JS').style.display = 'none'
    document.getElementById("bx2").style.backgroundColor="#3e4045";
    document.getElementById("bx1").style.backgroundColor="#1f2023";
    document.getElementById("bx3").style.backgroundColor="#1f2023";
    document.querySelector(".text2456").style.zIndex = "5";
    document.querySelector(".text1456").style.zIndex = "1";
    document.querySelector(".text3456").style.zIndex = "1";
})

document.getElementById("bx3").addEventListener("click",()=>{
    document.querySelector('.JS').style.display = 'flex'
    document.querySelector('.HTML').style.display = 'none'
    document.querySelector('.CSS').style.display = 'none'
    document.getElementById("bx3").style.backgroundColor="#3e4045";
    document.getElementById("bx2").style.backgroundColor="#1f2023";
    document.getElementById("bx1").style.backgroundColor="#1f2023";
    document.querySelector(".text3456").style.zIndex = "5";
    document.querySelector(".text2456").style.zIndex = "1";
    document.querySelector(".text1456").style.zIndex = "1";
})



function toggleCode(params) {
    console.log("code clicked")
    codeBtn.style.backgroundColor = '#9c9c9c'
    outputBtn.style.backgroundColor = ''
    document.querySelector('.text456').style.display = 'flex'
    document.querySelector('.changer').style.display = 'flex'
    document.querySelector('.op456').style.display = 'none'
}
function toggleOutput(params) {
    output.contentDocument.body.innerHTML = htmlInp.value+"<style>"+cssInp.value+"</style>";
    output.contentWindow.eval(jsInp.value);
    console.log("code clicked")
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



