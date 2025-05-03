 var para = 0;
    function Theory() {
        para += 1;
        if(para==1){
		document.getElementById("Theory").innerHTML = "For positive half cycle, thyristors T1 and T4 both are gated at an angle α and both thyristors conduct from ωt=α to ωt=π+α. Therefore, the current conduction starts in the direction Vs →T1→R→T4→Vs as shown by red line for π radian. Therefore, the output voltage is given by: "+"<br>"+"Vo = VS"+"<br>"+" The output voltage and output current diagram is shown in figure.";
		document.getElementById("FWR_RL").src="FWR1_RL.png" 
		document.getElementById("FWR_O").src="output1_RL.png" 
		}
		
		else if(para==2){
		document.getElementById("Theory").innerHTML = "At to ωt=π+α, thyristors T3 and T2 both which are already forward biased, are triggered together and current conduction starts in the direction Vs →T3→R→T2→Vs. The input supply voltage turns off T1 and T4 by natural commutation. Therefore, the output voltage is given by:"+"<br>"+" Vo = -VS "+"<br>"+"The output voltage and output current diagram is shown in figure.";
		document.getElementById("FWR_RL").src="FWR2_RL.png" 
		document.getElementById("FWR_O").src="output2_RL.png" 
		}
    else if(para==3){
		document.getElementById("Theory").innerHTML = "Finally, the output waveforms for full cycle with α degree delay are shown in figure.";
		document.getElementById("FWR_RL").src="FWR_RL.png" 
		document.getElementById("FWR_O").src="output_RL.png" 
		}
	 else{
		document.getElementById("Theory").innerHTML = "The average and RMS output voltage for full controlled bridge rectifier for R load is given as:"+"<br>"+"Vo,avg=(2Vs cos α /π)\n"+"<br>"+"Now go to calculation section to calculate output voltage";
		}
	};