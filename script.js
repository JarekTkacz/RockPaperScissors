function check(){
	  var user1 = prompt("User 1 please select: Rock, Paper or Scissors?");
	  var user2 = prompt("User 2 please select: Rock, Paper or Scissors?");
	
	if(user1!="Paper" && user1!="Rock" && user1!="Scissors"){
		alert("Invalid input, please try again!");
		}
		else if(user2!="Paper" && user2!="Rock" && user2!="Scissors"){
		  alert("Invalid input, please try again!");
		  }
	  
	  			else if(user1=="Paper" && user2=="Paper"){
		  		alert("It's a draw");
		 	 	}
				else if(user1=="Rock" && user2=="Rock"){
				alert("It's a draw");
				}
				else if(user1=="Scissors" && user2=="Scissors"){
				alert("It's a draw");
				}
				else if(user1=="Rock" && user2=="Paper"){
				alert("User 2 winning!");
				}
				else if(user1=="Paper" && user2=="Rock"){
				alert("User 1 winning!");
				}
				else if(user1=="Rock" && user2=="Scissors"){
				alert("User 1 winning!");
				}
				else if(user1=="Scissors" && user2=="Rock"){
				alert("User 2 winning!");
				}
				else if(user1=="Paper" && user2=="Scissors"){
				alert("User 2 winning!");
				}
				else if(user1=="Scissors" && user2=="Paper"){
				alert("User 1 winning!");
				}
				else{
					alert("Invalid input, please try again!");
				}
	
}

