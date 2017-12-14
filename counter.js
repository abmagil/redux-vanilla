var counter = (function($) {
  var $el;
  
  function init() {
    $el = $('.counter').first();
    store.subscribe(updatecounter);
  };
  
  function updatecounter() {
    $el.html(store.getState().counter);
  }
  
  return {
    init: init
  };
}(jQuery));

$(document).ready(function() {
  counter.init()
});
