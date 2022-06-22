let num1 = document.getElementById("weight");
let num2 = document.getElementById("height");
let num3 = document.getElementById("lbs");
let out = document.getElementById("content2");
function tran(){
    let a;
    a = document.getElementById("content2");
    a.style.transition = "500ms";
    a.style.color = "white";
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