(function () {
  angular
  .module('Carrousel')
  .factory('ImageFactory', ImageFactory)

  function ImageFactory ($http) {
    let reqMethods = { getImages }

    function getImages () {
      const url = `/images/`
      return $http.get(url)
    }
    return reqMethods
  }
})()
