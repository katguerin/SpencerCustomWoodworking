
function ShowHideDiv() {
    var otherText = document.getElementById("otherText");
    otherText.style.display = gridRadios4.checked ? "block" : "none";
}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("Please enter a valid email address")
    return (false)
}

// validate phone number 