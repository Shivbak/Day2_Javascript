function loop()
{
    var i =0;
    do
        {
            document.getElementById("demo").innerHTML+= i + "</br>";
            i++;
        }while(i<=10)
}

loop();