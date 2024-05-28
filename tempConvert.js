
function fahrenheitconvert(){
    let celsius=Number(document.getElementById("C").value);
    let fresult=0;
    try{
    fresult=(celsius*1.8)+32;
    document.getElementById("fahrenheitresult").innerHTML=`${fresult} °F`;
    }
    catch{
        document.getElementById("fahrenheitresult").innerHTML="Enter values";
    }
}

function celsiusconvert(){
    let fahrenheit=document.getElementById("F");
    let cresult=0;
    try{
        cresult=(fahrenheit.value-32)*5/9;
        document.getElementById("celsiusresult").innerHTML=`${cresult} °C`;
        }
        catch{
            document.getElementById("celsiusresult").innerHTML="Enter values";
        }
}
