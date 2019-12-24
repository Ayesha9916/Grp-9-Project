function GEEKFORGEEKS()
{
    var name = document.forms["RegForm"]["FullName"];
    var designation = document.forms["RegForm"]["designation"];
    var organization = document.forms["RegForm"]["organization"];
    var phone = document.forms["RegForm"]["contactNumber"];
    var number =  document.forms["RegForm"]["faxNnumber"];

    var email = document.forms["RegForm"]["email"];

    if (name.value == "")
    {
        window.alert("Please enter your Full name.");
        name.focus();
        return false;
    }

    if (designation.value == "")
    {
        window.alert("Please enter designation.");
        address.focus();
        return false;
    }

    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "")
    {
        window.alert("Please enter your Phone number.");
        phone.focus();
        return false;
    }

    if (number.value == "")
    {
        window.alert("Please enter your Fax Number");
        password.focus();
        return false;
    }

    if (organization.value == "")
    {
        alert("Please enter organization.");
        what.focus();
        return false;
    }

    return true;
}
