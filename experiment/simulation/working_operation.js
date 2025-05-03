 var para = 0;
    function Theory() {
        para += 1;
        if(para==1){
		document.getElementById("Theory").innerHTML = "For positive half cycle, thyristors T1 and T4 both are fired together at an angle α and the current conduction starts in the direction Vs →T1→R→T4→Vs as shown by red line. Therefore, the output voltage is given by: "+"<br>"+"Vo = VS"+"<br>"+" The output voltage and output current diagram is shown in figure.";
		document.getElementById("FWR").src="FWR1.png" 
		document.getElementById("FWR_O").src="output1.png" 
		}
		
		else if(para==2){
		document.getElementById("Theory").innerHTML = "In negative half cycle, thyristors T3 and T4 both are also fired together at an angle α and current conduction starts in the direction Vs →T3→R→T2→Vs. Therefore, the output voltage is given by: "+"<br>"+"Vo = -VS "+"<br>"+"The output voltage and output current diagram is shown in figure.";
		document.getElementById("FWR").src="FWR2.png" 
		document.getElementById("FWR_O").src="output2.png" 
		}
    else if(para==3){
		document.getElementById("Theory").innerHTML = "Finally, the output waveforms for full cycle with α degree delay are shown in figure.";
		document.getElementById("FWR").src="FWR.png" 
		document.getElementById("FWR_O").src="output.png" 
		}
		else{
				document.getElementById("Theory").innerHTML = "The average and RMS output voltage for full controlled bridge rectifier for R load is given as:"+"<br>"+"Vo,avg=(√2Vs/π)(1 + cos α)"+"<br>"+"Now go to calculation section to calculate output voltage";
		}
	};