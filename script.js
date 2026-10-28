function handleRSVP() {
  if (document.querySelector("feedback-message")) {
    const message = document.createElement("p");
    message.textContent = "You're on the list — see you there!";
    message.classList.add("feedback-message");

    const rsvpButton = document.getElementById("rsvpBtn");
    rsvpButton.after(message);
  }
}