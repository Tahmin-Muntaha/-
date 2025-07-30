document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const role = document.getElementById("select").value;

    if (role === "donor") {
        window.location.href = "Donor_Sign_Up_Form.html";
    } else if (role === "ngo") {
        window.location.href = "NGO_Sign_Up_form.html";
    } else {
        alert("⚠️ Please select a valid role to proceed.");
    }
});