let num1 = document.getElementById("weight");
let num2 = document.getElementById("height");
let num3 = document.getElementById("lbs");
let out = document.getElementById("content2");
let bg = document.getElementsByClassName("container")
let gradbg = "linear-gradient(180deg, rgb(36, 36, 36) 0%, rgb(83, 83, 83) 80%, 	rgb(126, 93, 51) 80% , rgb(124, 104, 78)100%)";
let gradbg1 = "linear-gradient(180deg, rgb(111, 188, 194) 0%, rgb(169, 195, 197) 80%, 	rgb(189, 138, 72) 80% , rgb(247, 207, 156)100%)";
let gradbg2 = "linear-gradient(180deg, rgb(194, 189, 111) 0%, rgb(197, 194, 169) 80%, 	rgb(189, 138, 72) 80% , rgb(247, 207, 156)100%)";
let gradbg3 = "linear-gradient(180deg, rgb(194, 144, 111) 0%, rgb(255, 224, 157) 80%, 	rgb(189, 138, 72) 80% , rgb(247, 207, 156)100%)";
let gradsun1 = "radial-gradient(circle at top left,#eeff00 0% 8%, transparent 15% 100%)";
let gradsun2 = "radial-gradient(circle at top center,#ffbb00 0% 8%, transparent 15% 100%)";
let gradsun3 = "radial-gradient(circle at top right,#ff0000 0% 8%, transparent 15% 100%)";
function tran(){
    let a;
    a = document.getElementById("content2");
    a.style.transition = "500ms";
    a.style.color = "black";
}
function BMI(){
    let a, b, b1, a1, a2, a3, c, d, e;
    a = parseFloat(num1.value);
    b = parseFloat(num2.value);
    a1 = parseFloat(num3.value);
    b1 = b*0.01;
    a2 = Math.round(a1*0.45359237);
    a3 = num1.value.length;
    d = out;
    switch (a3){
    case 0: c = Math.round(a2/(b1*b1));
    break;
    default: c = Math.round(a/(b1*b1));
    }
    console.log(a3);
    console.log(c);
    if(c >30)
    {
        d.innerHTML = "the BMI value is "+c+" you're in the obese range.";
        bg[0].style.background = gradsun3;
        document.body.style.background = gradbg3;
        tran();
    }
    else if((c >= 25) && (c <= 30))
    {
        d.innerHTML = "the BMI value is "+c+" you're in the overweight range";
        bg[0].style.background = gradsun2;
        document.body.style.background = gradbg2;
        tran();
    }
    else if((c >= 18.5) && (c <=24.9))
    {
        d.innerHTML = "the BMI value is "+c+" you're in the healthy weight range.";
        bg[0].style.background = gradsun1;
        document.body.style.background = gradbg1;
        tran();
    }
    else
    {
        d.innerHTML = "the BMI value is "+c+" you're in the underweight range.";
        bg[0].style.background = "none";
        document.body.style.background = gradbg;
        tran();
    }
} 
function veri(){
    let a, b, c, d, e, f;
    a = num1.value;
    b = num2.value;
    c = num3.value;
    d = a.length;
    e = b.length;
    f = c.length;
    if((d==0)&&(e==0)&&(f==0))
    {
        alert("Please enter the weigth and height");
        return false;
    }
    else if((d==0)&&(f==0))
    {
        alert("Please enter the weigth");
        return false;
    }
    else if(e==0)
    {
        alert("Please enter the height");
        return false;
    }
    return true
}
function ref(){
    let n1, n2, n3, n4;
    n1 = num1;
    n2 = num2;
    n3 = num3;
    n4 = out;
    n1.value = "";
    n2.value = "";
    n3.value = "";
    n1.style.display = "block";
    n3.style.display = "none";
    n4.innerHTML = "Display your Result";
    n4.style.backgroundColor = "white";
    n4.style.color = "gray";
}
function exce(){
    if(veri().valueOf() == true){
        BMI();
    }
}
function swit(){
    let a1, a2;
    a1 = num1;
    a2 = num3;
    a1.style.display = "none";
    a2.style.display = "block";
}