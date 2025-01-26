document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    alert(`Hi, ${name}! I've received your message. I'll get back to you @ ${email} soon.`);
});
