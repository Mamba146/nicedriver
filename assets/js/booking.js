// GOOGLE AUTOCOMPLETE
function initAutocomplete() {
  const pickupInput = document.getElementById("pickup");
  const dropoffInput = document.getElementById("dropoff");

  if (pickupInput) {
    new google.maps.places.Autocomplete(pickupInput, {
      types: ["geocode"],
      componentRestrictions: { country: "fr" }
    });
  }

  if (dropoffInput) {
    new google.maps.places.Autocomplete(dropoffInput, {
      types: ["geocode"],
      componentRestrictions: { country: "fr" }
    });
  }
}


window.addEventListener("load", initAutocomplete);


// SEND TO WHATSAPP
document.getElementById("sendWhatsApp").addEventListener("click", function () {
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const vehicle = document.getElementById("vehicle").value;
  const passengers = document.getElementById("passengers").value;

  if (!pickup || !dropoff || !date || !time || !vehicle || !passengers) {
    alert("Please fill in all fields.");
    return;
  }

  const message =
    "New Booking Request:%0A" +
    "Pickup: " + pickup + "%0A" +
    "Drop-off: " + dropoff + "%0A" +
    "Date: " + date + "%0A" +
    "Time: " + time + "%0A" +
    "Vehicle: " + vehicle + "%0A" +
    "Passengers: " + passengers;

  const phone = "33600000000"; // ← ВСТАВЬ СВОЙ НОМЕР

  const url = "https://wa.me/" + phone + "?text=" + message;

  window.open(url, "_blank");
});
