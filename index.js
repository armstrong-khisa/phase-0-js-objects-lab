//Write your code here
let attendees = [
    { id: 1, name: "Alice", event: "Tech Conference", ticketType: "VIP", ticketPrice: 100 },
    { id: 2, name: "Bob", event: "Music Festival", ticketType: "Regular", ticketPrice: 50 }
];

// Access
console.log(attendees[0].name);

// Add
attendees.push({ id: 3, name: "Charlie", event: "Art Expo", ticketType: "VIP", ticketPrice: 80 });

// Update
attendees[1].ticketType = "VIP";
attendees[1].ticketPrice = 75;

// Remove
attendees.splice(0, 1);

// Final result
console.log(attendees);


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