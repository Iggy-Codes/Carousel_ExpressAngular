(function () {
  angular
  .module('Carrousel')
  .factory('ImageFactory', ImageFactory)

  function ImageFactory ($http) {
    let reqMethods = { getImages }

    function getImages () {
      return $http.get('/images/')
    }
    return reqMethods
  }
})()
