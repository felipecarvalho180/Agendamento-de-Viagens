const standardAction = "TRIP::";

export const UPDATE_TRIP_LIST = `${standardAction}UPDATE_TRIP_LIST`;

export const updateTripList = (trip) => {
  return {
    type: UPDATE_TRIP_LIST,
    payload: {
      trip,
    },
  };
};
