var stockUpdate = (function() {
  
  function thunkToUpdateStock() {
    return function(dispatch) {
      console.log('two');
      return $.ajax({
        url: 'https://api.iextrading.com/1.0/stock/CMPR/quote',
        success: (data, textStatus, jqXHR) => {
          dispatch({
            type: "STOCK_UPDATE",
            lastPrice: data.delayedPrice
          })
        }
      });
    }
  }
  
  function init() {
      $(".update-stock").on('click', function() {
        console.log("one");
        store.dispatch(thunkToUpdateStock());
      })
  }

  return { init: init };
}());

$(document).ready(function() {stockUpdate.init()});
