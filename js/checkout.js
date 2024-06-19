
// Exercise 6
function validate() {
	
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorEmail = document.getElementById("errorAdress");  
	var errorEmail = document.getElementById("errorLastN");  
	var errorEmail = document.getElementById("errorPassword");  
	var errorEmail = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email
	const validName = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
	const validLastN = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
	const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validPhone = /^[0-9]+$/;
    const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;

	if (!validName.test(fName.value)) {
        error++;
        errorName.style.display = "block";
    } else {
        errorName.style.display = "none";
    }

	if (!validEmail.test(fEmail.value)) {
        error++;
        errorEmail.style.display = "block";
    } else {
        errorEmail.style.display = "none";
    }

    if (fAddress.value.length < 3) {
        error++;
        errorAddress.style.display = "block";
    } else {
        errorAddress.style.display = "none";
    }

    if (!validLastN.test(fLastN.value)) {
        error++;
        errorLastN.style.display = "block";
    } else {
        errorLastN.style.display = "none";
    }

    if (!validPassword.test(fPassword.value)) {
        error++;
        errorPassword.style.display = "block";
    } else {
        errorPassword.style.display = "none";
    }

    if (!validPhone.test(fPhone.value)) {
        error++;
        errorPhone.style.display = "block";
    } else {
        errorPhone.style.display = "none";
    }
	 
	if(error > 0){
		alert("Error");
	}else{
		alert("OK");
	}
}
