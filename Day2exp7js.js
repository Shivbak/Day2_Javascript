var event1 = document.getElementById("button");
    event1.addEventListener('click',myfirst,false);

function myfirst()
{
    
    var userinput = document.getElementById("input").value;
    
    switch(userinput)
        {
            case 'D':
                var date = new Date();
                document.getElementById("demo").innerHTML = date.getDate();
                break;
                
            case 'T':
                var date = new Date();
                var hr = date.getHours();
                var min = date.getMinutes();
                var sec = date.getSeconds();
                document.getElementById("demo").innerHTML = hr + ":" + min + ":" + sec;
                break;
                
           
        }
}