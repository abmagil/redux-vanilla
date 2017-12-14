var reducers = Redux.combineReducers({
  counter: counterReducer,
  stockPrice: stockPriceReducer
})

var store = Redux.createStore(
  reducers,
  window.datum,
  Redux.compose(
    Redux.applyMiddleware(ReduxThunk.default),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
