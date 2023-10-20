document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      let valid = true;
  
      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const message = form.querySelector("#message");
  
      if (name.value.trim() === "") {
        valid = false;
        name.classList.add("error");
      } else {
        name.classList.remove("error");
      }
  
      if (email.value.trim() === "" || !isValidEmail(email.value)) {
        valid = false;
        email.classList.add("error");
      } else {
        email.classList.remove("error");
      }
  
      if (message.value.trim() === "") {
        valid = false;
        message.classList.add("error");
      } else {
        message.classList.remove("error");
      }
  
      if (!valid) {
        event.preventDefault();
      } else {
        // Clear the form
        form.reset();
        
        // Show success message
        showMessage("Message successfully submitted");
      }
    });
  
    function isValidEmail(email) {
      // Basic email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function showMessage(message) {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.textContent = message;
        document.body.appendChild(popup);
      
        setTimeout(function() {
          popup.remove();
        }, 5000); // Display the popup for 5 seconds
      }
      
  });
  