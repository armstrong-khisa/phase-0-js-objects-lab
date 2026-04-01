//Write your code here
// attendee object with correct properties
let attendee = {
  id: 1,
  name: "Alice",
  event: "Tech Conference",
  ticketType: "VIP",
  ticketPrice: 100
};

// log name
function logAttendeeName() {
  console.log(attendee.name);
}

// log ticket price
function logTicketPrice() {
  console.log(attendee.ticketPrice);
}

// update ticket type
function updateTicketType(newType) {
  attendee.ticketType = newType;
}

// update ticket price
function updateTicketPrice(newPrice) {
  attendee.ticketPrice = newPrice;
}

// remove event property
function removeEventProperty() {
  delete attendee.event;
}

// add checkedIn property
function addCheckedInProperty() {
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