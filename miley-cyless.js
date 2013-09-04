(function(){
  var mileyCyless = {
    wordsToCensor : [
     'Miley Cyrus',
     'MileyCyrus',
     'Miley Ray Cyrus'
    ],
    init: function(){
      $.each(this.wordsToCensor, function(i,el){
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
