function handleRSVP() {
  if (document.getElementById("rsvpMessage")) {
    return;
  }

  const message = document.createElement("p");
  message.id = "rsvpMessage";
  message.textContent = "You're on the list — see you there!";
  message.classList.add("feedback-message");

  const rsvpButton = document.getElementById("rsvpBtn");
  rsvpButton.after(message);
}

function increaseRSVPCount() {
  const count = document.getElementById("rsvpCount");
  count.textContent = Number(count.textContent) + 1;
}
