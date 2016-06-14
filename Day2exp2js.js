 var event1 = document.getElementById("button");
     event1.addEventListener('click',myfirst,false);


    var userinput1 = 23;
    document.getElementById("demo1").innerHTML = userinput1 + " is outside variable value"
function myfirst()
{
    var userunput2 = parseInt(document.getElementById("input2").value);
    document.getElementById("demo2").innerHTML = userunput2 + " is inside variable value"
    
}