(() => {
  const graphicElements = document.querySelectorAll('.graphic-item');
  const stepElements = document.querySelectorAll('.step');
  let currentItem = graphicElements[0];

  for (let i = 0; i < stepElements.length; i++) {
    stepElements[i].setAttribute('data-index', i);
    graphicElements[i].setAttribute('data-index', i);
  }

  const activate = () => {
    currentItem.classList.add('visible');
  };

  const inactivate = () => {
    currentItem.classList.remove('visible');
  };

  window.addEventListener('scroll', () => {
    let step;
    let boundingRect;
    // console.log(window.innerHeight);

    for (let i = 0; i < stepElements.length; i++) {
      step = stepElements[i];
      boundingRect = step.getBoundingClientRect();
      // console.log(boundingRect);

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        if (currentItem) {
          inactivate();
        }

        currentItem = graphicElements[step.dataset.index];
        activate();
      }
    }
  });

  activate();
})();
