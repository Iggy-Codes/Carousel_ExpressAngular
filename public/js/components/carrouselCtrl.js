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

    vm.randImgIndex = function (block) {
      return block.images[Math.floor(Math.random() * block.images.length)]
    }

    vm.previous = function () {}
    vm.next = function () {}
  }
})()
