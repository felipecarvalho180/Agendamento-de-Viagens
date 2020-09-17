import { UPDATE_TRIP_LIST } from "../actions";

const initialState = [];

export const tripsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_TRIP_LIST:
      const trips = state;
      trips.push(payload.trip);

      return [...trips];
    default:
      return state;
  }
};
