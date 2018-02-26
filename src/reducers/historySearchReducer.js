const historySearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VIDEO_HISTORY_SEARCH':
      return [...state, action.title];
    default:
      return state;
  }
};

// export default historySearchReducer;
module.exports = historySearchReducer;
