// utils/emailSender.js

export const sendEmailWithClaimDetails = (email, claimDetails) => {
  const {
    departureAirport,
    destinationAirport,
    flightDate,
    airline,
    flightNumber,
    bookingReference,
    firstName,
    lastName,
  } = claimDetails;

  const emailContent = `
    Dear ${firstName} ${lastName},
    
    Your claim with the following details has been received:
    
    - Departure Airport: ${departureAirport}
    - Destination Airport: ${destinationAirport}
    - Flight Date: ${flightDate}
    - Airline: ${airline}
    - Flight Number: ${flightNumber}
    - Booking Reference: ${bookingReference}
    
    Please check your email regularly for updates.
    
    Thank you.
  `;

  // Call your email API here (e.g., SendGrid, Nodemailer, etc.)
  console.log(`Sending email to ${email} with the following content:`);
  console.log(emailContent);

  // Example API call for email service (pseudo-code)
  /*
  fetch('/api/send-email', {
    method: 'POST',
    body: JSON.stringify({
      to: email,
      subject: 'Your Claim Details',
      text: emailContent,
    }),
  });
  */
};
