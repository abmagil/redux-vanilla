var button = (function() {
  
  function init() {
      $(".increment-button").on('click', function() {
        store.dispatch({
          type: "INCREMENT"
        })
      })
  }

  return { init: init };
}());

$(document).ready(function() {button.init()});
