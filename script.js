function clrS()
{ 
    document.getElementById("result").value = "";

}
function calculate()
{
    var a= document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}
function delLast()
{ var s= document.getElementById("result").value;
  var str = (s.substring(0, s.length - 1)); 
document.getElementById("result").value = str; 
}