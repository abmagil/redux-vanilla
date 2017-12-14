var stockTicker = (function($) {
  var $el;
  
  function init() {
    $el = $('.stock-price').first();
    store.subscribe(updatecounter);
  };
  
  function updatecounter() {
    $el.html(store.getState().stockPrice);
  }
  
  return {
    init: init
  };
}(jQuery));

$(document).ready(function() {
  stockTicker.init()
});
