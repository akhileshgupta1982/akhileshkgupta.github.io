function V_avg() 
{
var x; 
var Vp=document.myForm.Vp.value
Vm=Number(Vp);
var Va=document.myForm.Average_Voltage1.value
Vavg=Number(Va);
var FA=document.myForm.FA.value;
fir=Number(FA);
if(fir>90)
{
	alert("enter firing angle below 90 degree")
	}
	else{
y=Math.PI;
x=Math.sqrt(2)*Vm*(1+Math.cos(fir*y/180))/(Math.PI)
document.forms["myForm"]["Average_Voltage"].value = " = " + x +"   V";
if((x-0.1)<Vavg && Vavg<(x+0.1))
{
	alert("Right Answer")
	}
else
{
	alert("Wrong Answer")
	}
	}	
			}
			 
