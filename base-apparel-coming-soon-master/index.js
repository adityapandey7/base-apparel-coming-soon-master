function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form.email.focus();
return true;
}
else
{
document.getElementById("email_text").style.visibility= "visible";
document.getElementById("error").style.visibility= "visible";
document.form.email.focus();
return false;
}
}
