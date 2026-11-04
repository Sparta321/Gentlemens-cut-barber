
const whatsappNumber = "254795473423";



const bookingForm = document.getElementById("bookingForm");

const dateInput = document.getElementById("bookingDate");

if (dateInput) {
    const today = new Date();

    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateInput.min = localDate;
}

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("bookingDate").value;
        const time = document.getElementById("bookingTime").value;
        const notes = document.getElementById("notes").value.trim();

        
const cleanPhone = phone.replace(/[\s-]/g, "");

const validPhone = /^(?:07|01)\d{8}$|^(?:\+254|254)(?:7|1)\d{8}$/.test(cleanPhone);

if (!validPhone) {
    alert("Please enter a valid Kenyan phone number.");
    return;
}

// Prevent past dates
const selectedDate = new Date(date + "T00:00:00");
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

if (selectedDate < currentDate) {
    alert("Please choose today or a future date.");
    return;
}

        const message =
            "HELLO GENTLEMEN'S CUT!\n\n" +
            "I would like to book an appointment.\n\n" +
            "Name: " + name + "\n" +
            "Customer Phone: " + phone + "\n" +
            "Service: " + service + "\n" +
            "Date: " + date + "\n" +
            "Time: " + time + "\n" +
            "Additional Notes: " + (notes || "None") + "\n\n" +
            "Please confirm my booking. Thank you!";

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(message);

        window.location.href = whatsappURL;
    });
}



const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const messageText = document.getElementById("contactMessage").value.trim();

        const message =
            "Hello, I have an enquiry.\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Message: " + messageText;

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(message);

        window.location.href = whatsappURL;
    });
}



const priceServices = document.querySelectorAll(".price-service");

if (priceServices.length > 0) {
    priceServices.forEach(function(service) {
        service.addEventListener("change", function() {
            let total = 0;

            priceServices.forEach(function(item) {
                if (item.checked) {
                    total += Number(item.value);
                }
            });

            const totalPrice = document.getElementById("totalPrice");

            if (totalPrice) {
                totalPrice.textContent = total;
            }
        });
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) return;

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");

        themeToggle.textContent =
            document.body.classList.contains("light-mode")
                ? "🌙 Dark Mode"
                : "☀️ Light Mode";
    });
});
