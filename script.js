const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("bookingForm");
const formNote = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const method = data.get("contact_method");
    const enquiry = data.get("enquiry");
    const preferred = data.get("preferred_time");
    const message = data.get("message");

    // IMPORTANT: replace this placeholder with the real business email.
    const recipient = "YOUR_EMAIL@example.com";
    const subject = encodeURIComponent(`Therapy enquiry from ${name}`);
    const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Preferred contact method: ${method}
Enquiry: ${enquiry}
Preferred day / time: ${preferred || "Not specified"}

Message:
${message || "No additional message provided."}

Please note: this enquiry form is not intended for emergency or crisis support.`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    formNote.textContent = "Opening your email app… If nothing happens, please contact the business directly using the contact details shown.";
  });
}
