


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
   
    const name = document.getElementById("name").value.trim();
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const time = document.getElementById("time").value.trim();

   
    if (!name || !food || !quantity || !address || !phone || !time) {
      alert("Please fill in all the fields before submitting!");
    } else {
      alert(`Thank you, ${name}! Your donation has been submitted successfully.`);
    }
  });
});
