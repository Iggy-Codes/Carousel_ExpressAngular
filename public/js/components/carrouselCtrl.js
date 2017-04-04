(function () {
  angular
  .module('Carrousel')
  .controller('SliderController', SliderController)

  function SliderController (ImageFactory) {
    let vm = this
    ImageFactory.getImages()
    .then((resp) => {
      vm.blocks = resp.data.Images
      return vm.blocks
    })
    .catch(err => { console.log(err) })
  }
})()
