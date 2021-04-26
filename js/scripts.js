function validateForm() {
    console.log ("check1");
    var validity = true;
    var msg = "";
    var x = document.forms["firstForm"]["fullName"].value;
    if (validity==false)
        alert (msg);
    return validity;
};