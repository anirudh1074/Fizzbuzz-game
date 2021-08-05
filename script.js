function calc()
{
var num=document.getElementById('input').value;
  
 if(num%3==0 && num%5==0)
    {
      display="FIZZ-BUZZ"
      
    }
    else if(num%3==0){
    display= "FIZZ"
  }
  else if(num%5==0)
    {
      display="BUZZ"
    }
  
  else
    {
     display = num ;
    }
  document.getElementById("result").innerHTML = display;
}