document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = {
    name: this.name.value,
    phone: this.phone.value,
    email: this.email.value,
    message: this.message.value
  };

  try {
    const res = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (data.success) {
      showToast("Message sent successfully!", "success");
      this.reset();
    } else {
      showToast("Failed to send message.", "error");
    }

  } catch (err) {
    console.error(err);
    alert("Error sending message.");
  }
});