const initialState = {
  isFetched: false,
};

const isFetchedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_FETCHED':
      return { isFetched: action.payload };
    default:
      return state;
  }
};

module.exports = isFetchedReducer;
