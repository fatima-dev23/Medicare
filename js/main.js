const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Appointment request submitted successfully!");

    form.reset();
});