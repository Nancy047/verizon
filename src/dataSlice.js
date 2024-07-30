import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected_services: [],
};

const dataSlice = createSlice({
  name: "selected_service",
  initialState,
  reducers: {
    addService: (state, action) => {
      state.selected_services.push(action.payload.key);
    },
    removeService: (state, action) => {
      state.selected_services = state.selected_services.filter(
        (service) => service.name !== action.payload.key.name
      );
    },
    clearService: (state) => {
      state.selected_services = [];
    },
    updateService: (state, action) => {
      const updatedSelectedServices = state.selected_services.map((service) => {
        if (service.name === action.payload.key.name) {
          // Use spread operator to create a new object with updated values
          return { ...service, ...action.payload.key };
        }
        return service;
      });

      // Create a new state object with the updated array
      return {
        ...state.data,
        selected_services: updatedSelectedServices,
      };
    },
  },
});

export const { addService, removeService, updateService, clearService } =
  dataSlice.actions;
export default dataSlice.reducer;
