function MileyCylessCtrl($scope) {
  if (localStorage["mc_words"]) {
    $scope.words = JSON.parse(localStorage["mc_words"]);
  }else{
    $scope.words = [
      'learn angular', 
      'something else'
    ];
  }
  
  $scope.addWord = function(){
    $scope.words.push($scope.word);
    localStorage['mc_words']=JSON.stringify($scope.words);
    $scope.word = '';
  }

  $scope.remove = function(word){
    var index=$scope.words.indexOf(word)
    $scope.words.splice(index,1);  
    localStorage['mc_words']=JSON.stringify($scope.words);
  }
}
