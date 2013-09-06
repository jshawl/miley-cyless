(function(){
  var mileyCyless = {
      
    init: function(){
      if(localStorage["mc_words"]){
        var wordsToCensor = JSON.parse(localStorage['mc_words'])
      } else {
        wordsToCensor = [
          'Miley Cyrus'
        ]
      }
      $.each(wordsToCensor, function(i,el){
        mileyCyless.censor(el);
      });
    },
    censor: function(term){
      var expression = new RegExp(term,"ig");
      var matches = $('body').text().match(expression);
      if (matches){
        $('body').html($('body').html().replace(expression, "<span class='mc_censored'>"+term+"</span>"));
      }
    }
  }
  mileyCyless.init();
})();
