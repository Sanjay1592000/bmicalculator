let num1 = document.getElementById("weight");
let num2 = document.getElementById("height");
let out = document.getElementById("content2");
function tran(){
    let a;
    a = document.getElementById("content2");
    a.style.transition = "500ms";
    a.style.color = "white";
}
function BMI(){
    let a, b, c, d;
    a = parseFloat(num1.value);
    b = parseFloat(num2.value);
    c = a/Math.pow(b,2);
    d = out;
    if((c >30))
    {
        d.innerHTML = "the BMI value is "+c+" you're in the obese range.";
        d.style.backgroundColor = "red";
        tran();
    }
    else if((c >= 25) && (c <= 30))
    {
        d.innerHTML = "the BMI value is "+c+" you're in the overweight range";
        d.style.backgroundColor = "orange";
        tran();
    }
    else if((c >= 18.5) && (c <=24.9))
    {
        d.innerHTML = "the BMI value is "+c+" you're in the healthy weight range.";
        d.style.backgroundColor = "green";
        tran();
    }
    else
    {
        d.innerHTML = "the BMI value is "+c+" you're in the underweight range.";
        d.style.backgroundColor = "red";
        tran();
    }
} 
function veri(){
    let a, b, c, d;
    a = num1.value;
    b = num2.value;
    c = a.length;
    d = b.length;
    if((c==0)&&(d==0))
    {
        alert("Please enter the weigth and height");
        return false;
    }
    else if(c==0)
    {
        alert("Please enter the weigth");
        return false;
    }
    else if(d==0)
    {
        alert("Please enter the height");
        return false;
    }
    return true
}
function ref(){
    let n1, n2, n3;
    n1 = num1;
    n2 = num2;
    n3 = out;
    n1.value = "";
    n2.value = "";
    n3.innerHTML = "Display your Result";
    n3.style.backgroundColor = "white";
    n3.style.color = "black";
}
function exce(){
    if(veri().valueOf() == true){
        BMI();
    }
}