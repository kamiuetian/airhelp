import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    registrationError: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    register: (state, action) => {
      const { email, password, confirmPassword } = action.payload;

      if (password !== confirmPassword) {
        state.registrationError = "Passwords do not match!";
        return;
      }

      // Normally you'd make an API call here to register the user.
      state.isAuthenticated = true;
      state.user = { email }; // Store the user with just the email in this example.
      state.registrationError = null; // Clear error on successful registration.
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.registrationError = null;
    },
    clearRegistrationError: (state) => {
      state.registrationError = null; // Clear registration error
    },
  },
});

export const { login, register, logout, clearRegistrationError } =
  authSlice.actions;

export default authSlice.reducer;
