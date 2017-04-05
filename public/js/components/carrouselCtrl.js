(function () {
  angular.module('Carrousel')
  .controller('SliderController', SliderController)

  function SliderController (ImageFactory) {
    let vm = this
    vm.indexBlock = 0  // initial block of data to be shown

    // calling factory to get json and bind it to a scope variable
    ImageFactory.getImages()
    .then((resp) => {
      vm.blocks = resp.data.Images
      return vm.blocks
    })
    .catch(err => { console.log(err) })

    // function to randomize image of the current block
    vm.randImgIndex = function (block) {
      console.dir(block)
      return block.images[Math.floor(Math.random() * block.images.length)]
    }

    // function that changes index value of current block on click
    function iterateImg (nowIndex) {
      vm.indexBlock += nowIndex
      if (vm.indexBlock > vm.blocks.length - 1) vm.indexBlock = 0
      if (vm.indexBlock < 0) vm.indexBlock = vm.blocks.length - 1
    }

    // button controls for next and previous blocks
    vm.controls =  (event, changeBy) => {
      event.preventDefault()
      iterateImg(changeBy)
    }
  }
})()
