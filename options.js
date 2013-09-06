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
    localStorage['words']=JSON.stringify($scope.words);
    $scope.word = '';
  }
}
