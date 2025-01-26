document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    alert(`Thank you, ${name}! We’ve received your message. We’ll get back to you at ${email} soon.`);
});
