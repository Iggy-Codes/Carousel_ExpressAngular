(function () {
  angular
  .module('Carrousel')
  .controller('SliderController', SliderController)

  function SliderController (ImageFactory) {
    let vm = this
    vm.randNum = (imgArr) => Math.floor(Math.random() * imgArr.length)

    ImageFactory.getImages()
    .then((resp) => {
      vm.blocks = resp.data.Images
      console.log(vm.blocks)
      return vm.blocks
    })
    .catch(err => { console.log(err) })
  }
})()
