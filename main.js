(()=>{
  makeScrollSlide({
    stepSelector: '.step',
    graphicSelector: '.graphic-item'
  })

  function makeScrollSlide({ stepSelector, graphicSelector }) {

    const stepElems = document.querySelectorAll(stepSelector)
    const graphicElemes = document.querySelectorAll(graphicSelector)

    let currentItem = graphicElemes[0];
    activate(currentItem)

    for (let i = 0; i < stepElems.length; i++) {
      stepElems[i].dataset.index = i
      graphicElemes[i].dataset.index = i
    }

    window.addEventListener('scroll', scrollHandler)

    function activate(item) {
      item.classList.add('visible')
    }

    function inactivate(item) {
      item.classList.remove('visible')
    }

    function scrollHandler() {
      let step, rect;

      for (let i = 0; i < stepElems.length; i++) {
        step = stepElems[i]
        rect = step.getBoundingClientRect()


        if (rect.top > window.innerHeight * 0.1 && rect.top < window.innerHeight * 0.9) {
          /* inactivate */
          if (currentItem) inactivate(currentItem)
          /* activate */
          currentItem = graphicElemes[i]
          activate(currentItem)
        }
      }
    }
  }
})()