var counterReducer = function counter(state, action) {
  if (state === undefined) { return 0 } 

  switch(action.type) {
    case 'INCREMENT': return state + 1
    default: return state
  }
};

var stockPriceReducer = function stockPrice(state, action) {
  if (state === undefined) { return 0.00 }

  switch(action.type) {
    case 'STOCK_UPDATE': return action.lastPrice;
    default: return state;
  }
}
