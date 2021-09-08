let input1 = document.querySelector("#firstInput");
let input2 = document.querySelector("#secondInput");
let input3 = document.querySelector("#thirdInput");

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
calcKeys.each(function () {
    var current = $(this).attr('#btns');
    $(this).text(current);
});
calcButton.on('click', function () {
    calcDisplay.val( calcDisplay.val() + $(this).attr("#btns") );
});
