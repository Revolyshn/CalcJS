let input1 = document.querySelector("#firstInput");
let input2 = document.querySelector("#secondInput");
let input3 = document.querySelector("#thirdInput");

let mainINput = document.querySelector("#myinput")

let button = document.querySelector("#plusBtn");
let button1 = document.querySelector("#minusBtn");
let button2 = document.querySelector("#multiplayBtn");
let button3 = document.querySelector("#devideBtn");


if(plusBtn)
{
    plusBtn.onclick = function()
    {
        let a = parseFloat(input1.value);
        let b = parseFloat(input2.value);
        let c = a + b;
        input3.value = c;
    };
}
if(minusBtn)
{
    minusBtn.onclick = function()
    {
        let a = parseFloat(input1.value);
        let b = parseFloat(input2.value);
        let c = a - b;
        input3.value = c;
    };
}
if(multiplayBtn)
{
    multiplayBtn.onclick = function()
    {
        let a = parseFloat(input1.value);
        let b = parseFloat(input2.value);
        let c = a * b;
        input3.value = c;
    };
}
if(devideBtn)
{
    devideBtn.onclick = function()
    {
        let a = parseFloat(input1.value);
        let b = parseFloat(input2.value);
        let c = a / b;
        input3.value = c;
    };
}
let main = document.querySelector("main");
let m = [
    "1","2","3","/",
    "4","5","6","*",
    "7","8","9","-",
    "0",".","+","=",
];

for(let i of m){
    let b = document.querySelector(".btns");
    b.textContent = i;
    main.append(b);
}

let listbuttons = document.querySelectorAll(".btns")

let value = "";

listbuttons.forEach(Element=>{
Element.onclick = function(){
    if(Element){
        value = value +Element.textContent;
        mainINput.value = value
    }
}
});

let plusbutton = document.querySelector("#plusB");
let minusbutton = document.querySelector("#minusB");
let devidebutton = document.querySelector("#devideB");
let multpbutton = document.querySelector("#multpB");
let equalbutton = document.querySelector("#equalB");

let firstElement = false;

let num;
let result;
let currentnum;

if(plusbutton)
{
    plusbutton.onclick = function()
    {
        firstElement = "+"
        num = Number(mainINput.value);
        result = num;
        value = ""
        mainINput.value = ""
    };
}

if(minusbutton)
{
    minusbutton.onclick = function()
    {
        firstElement = "-"
        num = Number(mainINput.value);
        result = num;
        value = ""
        mainINput.value = ""
    };
}

if(multpbutton)
{
    multpbutton.onclick = function()
    {
        firstElement = "*"
        num = Number(mainINput.value);
        result = num;
        value = ""
        mainINput.value = ""
    };
}

if(devidebutton)
{
    devidebutton.onclick = function()
    {
        firstElement = "/"
        num = Number(mainINput.value);
        result = num;
        value = ""
        mainINput.value = ""
    };
}

if(equalbutton)
{
    equalbutton.onclick = function()
    {
        num = Number(mainINput.value);
        result = num;
        value = ""
        mainINput.value = ""
    };
}
if(equalbutton){
    equalbutton.onclick = function(){
        switch(firstElement){
            case "+":
                currentnum = Number(mainINput.value)
                result = result + currentnum;
                mainINput.value = result
                break;

            case "-":
                currentnum = Number(mainINput.value)
                result = result - currentnum;
                mainINput.value = result
                break;

            case "*":
                currentnum = Number(mainINput.value)
                result = result + currentnum;
                mainINput.value = result
                break;

            case "/":
                currentnum = Number(mainINput.value)
                if(currentnum === 0){
                    mainINput.value
                }
        }
    }
}