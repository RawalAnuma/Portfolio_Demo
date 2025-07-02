document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();     //prevent form from reloading the page

    const name = document.getElementById("name").value;

    const confirmation = document.getElementById("confirmationMessage");

    alert(`Thankyou, ${name}! Your message has been sent.`);        //show popup message

    confirmation.style.display = "block";

    document.getElementById("contactForm").reset();     //reset the form fields
});
