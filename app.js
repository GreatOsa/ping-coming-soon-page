document.addEventListener("DOMContentLoaded", () => {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("emailInput");
  const errorMessage = document.getElementById("errorMessage");

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle form submission
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value;

    if (!emailRegex.test(email)) {
      // Show error state
      emailInput.classList.add("error");
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.classList.add("visible");
    } else {
      // Reset error state
      emailInput.classList.remove("error");
      errorMessage.classList.remove("visible");
      errorMessage.textContent = "";

      // Here you would typically send the email to your backend
      console.log("Form submitted with email:", email);

      // Optional: Clear the input
      emailInput.value = "";
    }
  });

  // Reset error state when user starts typing
  emailInput.addEventListener("input", () => {
    emailInput.classList.remove("error");
    errorMessage.classList.remove("visible");
    errorMessage.textContent = "";
  });
});
