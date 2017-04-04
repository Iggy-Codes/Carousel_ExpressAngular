angular
.module('Carrousel')
.config(['$stateProvider', '$urlRouterProvider', statesManager])

function statesManager ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {
          templateUrl: '/js/components/carrousel.html',
          controller: 'SliderController',
          controllerAs: 'vm'
        }
      }
    })
}
