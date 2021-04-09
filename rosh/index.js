//index.js

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "IROTORI Baroka",
	Password : "rikaelbiz",
	To : 'irotoribaroka@yahoo.fr',
	From : "birotori@gmail.com",
	Subject : "test_mail",
	Body : "super, j'ai réussi à configurer un envoie de mail",
	}).then(
		message => alert("mail sent successfully")
	);
}
