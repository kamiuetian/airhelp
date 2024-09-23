import { createSlice } from "@reduxjs/toolkit";

export const claimSlice = createSlice({
  name: "claim",
  initialState: {
    departureAirport: "",
    destinationAirport: "",
    directFlight: null,
    flightIssue: "",
    delayDuration: "",
    cancellationInfo: "",
    volunteeredSeat: "",
    informedByAirline: null,
    disruptionReason: "",
    situationDescription: "", // For Step 4
    email: "", // User's email for Step 4
    acceptTerms: false, // Whether terms are accepted for Step 4
    acceptNews: false, // Whether news subscription is accepted for Step 4
    // Step 5 State
    flightDate: "", // User-selected flight date
    bookingReference: "", // Booking reference
    airline: "", // Airline name
    flightNumber: "", // Flight number
    firstName: "",
    lastName: "",
    birthdate: "", // ISO format
    passengers: [], // Array to hold additional passenger info
    contactEmail: "", // Confirm email field
    address: "", // User address
    city: "", // User city
    country: "", // Selected country value
    phone: "", // Phone number field
    signature: null,
    documentFile: null,
  },
  reducers: {
    setDepartureAirport: (state, action) => {
      state.departureAirport = action.payload;
    },
    setDestinationAirport: (state, action) => {
      state.destinationAirport = action.payload;
    },
    setDirectFlight: (state, action) => {
      state.directFlight = action.payload;
    },
    setFlightIssue: (state, action) => {
      state.flightIssue = action.payload;
    },
    setDelayDuration: (state, action) => {
      state.delayDuration = action.payload;
    },
    setCancellationInfo: (state, action) => {
      state.cancellationInfo = action.payload;
    },
    setVolunteeredSeat: (state, action) => {
      state.volunteeredSeat = action.payload;
    },
    setInformedByAirline: (state, action) => {
      state.informedByAirline = action.payload;
    },
    setDisruptionReason: (state, action) => {
      state.disruptionReason = action.payload;
    },
    setSituationDescription: (state, action) => {
      state.situationDescription = action.payload; // For Step 4
    },
    // Reducers for Step 4
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAcceptTerms: (state, action) => {
      state.acceptTerms = action.payload;
    },
    setAcceptNews: (state, action) => {
      state.acceptNews = action.payload;
    },
    // New reducers for Step 5
    setFlightDate: (state, action) => {
      state.flightDate = action.payload;
    },
    setBookingReference: (state, action) => {
      state.bookingReference = action.payload;
    },
    setAirline: (state, action) => {
      state.airline = action.payload;
    },
    setFlightNumber: (state, action) => {
      state.flightNumber = action.payload;
    }, // New reducers for Step 6
    updateClaim: (state, action) => {
      // Action will be dispatched with a key-value pair, e.g., {firstName: 'John'}
      Object.assign(state, action.payload);
    },
    addPassenger: (state, action) => {
      state.passengers.push(action.payload); // Adding a new passenger
    },
    updatePassenger: (state, action) => {
      const { index, passenger } = action.payload; // Update passenger at specific index
      state.passengers[index] = passenger;
    },
    clearClaim: (state) => {
      return initialState;
    },
    setSignature: (state, action) => {
      state.signature = action.payload;
    },
    setDocumentFile: (state, action) => {
      state.documentFile = action.payload;
    },
  },
});

export const {
  setDepartureAirport,
  setDestinationAirport,
  setDirectFlight,
  setFlightIssue,
  setDelayDuration,
  setCancellationInfo,
  setVolunteeredSeat,
  setInformedByAirline,
  setDisruptionReason,
  setSituationDescription, // Step 4
  setEmail, // Step 4
  setAcceptTerms, // Step 4
  setAcceptNews, // Step 4
  setFlightDate, // Step 5
  setBookingReference, // Step 5
  setAirline, // Step 5
  setFlightNumber, // Step 5
  updateClaim,
  addPassenger,
  updatePassenger,
  setSignature,
  clearClaim,
  setDocumentFile,
} = claimSlice.actions;

export default claimSlice.reducer;
