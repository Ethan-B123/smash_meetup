// import stuff

const defaultState = {};

const messagesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    // add cases

    default:
      return state;
  }
};

export default messagesReducer;