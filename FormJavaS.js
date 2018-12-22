// function validateFormInput(FirstForm) {
// //Example using the “required” attribute
//     var numN = FirstForm.elements; 

//     for(var i = 0; i < numN.length; i++) {
//       if ((numN[i].value == null) || (elements[i].value == "")) {
//       	// if numN values is Null or empty do this:

//         var numN_name= numN[i].getAttribute("name");
//         var element_req= elements[i].getAttribute("required");
	
// if (element_req) {
// 	  msg+=element_name + "\n";
// 	}
//       }
        
//     }
//       alert(msg);
//     }
function Validation(){

	for(var i = 0; i< 5;i++){
		var x = document.forms["FirstForm"][i].value;
		var name = document.forms["FirstForm"][i].id;
  		document.getElementById(name).style.background = 'white';
  		var bol= false;
  		if(i < 5){
			if((x=="") || (x == null)){
				//alert(document.forms["FirstForm"][i].name +" must be filled in.");
				var name = document.forms["FirstForm"][i].id;
	  			document.getElementById(name).style.background = 'red';
	  			 e.preventDefault();
	  			// return false;
	  			if(1==3){
	  				return false;
	  			}
			}
		}

	}
}