//Write your code here
// attendee object with correct properties
// Correct attendee object
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Log name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Log ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Update ticket type
function updateTicketType(attendee, newType) {
  attendee.ticketType = newType;
}

// Update ticket price
function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

// Remove event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Add checkedIn property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};