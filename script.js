console.log('CONNECTED')

document.getElementById("form-user").addEventListener("submit", function (event) {

    let fullName = document.getElementById("input-full").value.trim();
    let email = document.getElementById("input-email").value.trim();

    if (fullName === "" || email === "") {
        alert("Please fill in both your Fullname and Email.");
    } else {
        alert("Form submitted successfully!");
        event.target.submit();
    }
});
