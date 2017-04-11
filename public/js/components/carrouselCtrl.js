(function () {
  angular.module('Carrousel')
  .controller('SliderController', SliderController)

  function SliderController (ImageFactory) {
    let vm = this
    vm.indexBlock = 0  // index of initial block of data to be shown
    vm.disablePrev = true
    vm.disableNext = false

    // calling factory to get json and bind it to a scope variable
    ImageFactory.getImages()
    .then((resp) => {
      vm.blocks = resp.data.Images
      // function to randomize image of the current block
      vm.randImgIndex = (block) => block.images[Math.floor(Math.random() * block.images.length)]
      return vm.blocks
    })
    .catch(err => { console.log(err) })

    // function that changes index value of current block on click & disable condition
    function iterateImg (nowIndex) {
      vm.indexBlock += nowIndex
      vm.indexBlock >= (vm.blocks.length - 1) ? vm.disableNext = true : vm.disableNext = false
      vm.indexBlock <= 0 ? vm.disablePrev = true : vm.disablePrev = false
    }

    // button controls for next and previous blocks
    vm.controls = (event, changeBy) => {
      event.preventDefault()
      iterateImg(changeBy)
    }
  }
})()
