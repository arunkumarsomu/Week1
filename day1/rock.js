

var name = prompt("Enter your name");

confirm("do you wanna play Rock paper sicssor? enter yes or no ");


	while (true){
		var input1 = prompt("Enter R for Rock, P for Paper, or S for scissor");
		if ( input1 === 'R' ) 
		{
			 console.log("You picked Rock",input1);
			 break;
		}
		else if (input1 === 'S')
		{
				console.log("You picked Scissor",input1);
				 break; 
			}
		else if  (input1 === 'P') {
				console.log("You picked Paper",input1);
			 break;		
		}
		else 
		{
			console.log("Incorrect input");
			}
	}
	
	var comp = Math.floor(Math.random() * 3); 
var comp_pick = "A";
if (comp ===0)
{ comp_pick = 'R';
}
if (comp ===1)
{ comp_pick = 'P';
}
if (comp ===2)
{ comp_pick = 'S';
}
console.log(" Computer Pick is ", comp_pick);
if (comp_pick === input1)
{ console.log("You and computer tied");
}
if (comp_pick === 'R' && input1 === 'P')
{ console.log("You won");
}
if (comp_pick === 'R' && input1 === 'S')
{ console.log(" computer won");
}
if (comp_pick === 'P' && input1 === 'R')
{ console.log("computer won");
}
if (comp_pick === 'P' && input1 === 'S')
{ console.log("You won");
}
if (comp_pick === 'S' && input1 === 'R')
{ console.log("You won");
}
if (comp_pick === 'S' && input1 === 'P')
{ console.log("computer won");
}




