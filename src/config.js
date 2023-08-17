export const COMMON_OPTIONS = {
  focus: 0,
  type: 'loop',
  gap: '1rem',
  autoplay: true,
  speed: 1000,
  dragAngleThreshold: 30,
  autoWidth: false,
  rewind: false,
  rewindSpeed: 400,
  waitForTransition: false,
  updateOnMove: true,
  trimSpace: false
};


// Helper Functions and Configuration
const defaultAnimationProperties = {
  duration: 1,
  ease: "power2.out",
};

const dataAttributeConfig = {
  "split-type": "words",
  target: "0",
  "plus-sign": "false",
};

function checkElementExistence(element) {
  return element !== null;
}

function checkLibrariesAvailability() {
  return "gsap" in window && "ScrollTrigger" in window;
}

function getDataAttribute(element, attributeName) {
  return (
    element.getAttribute(`data-${attributeName}`) ||
    dataAttributeConfig[attributeName]
  );
}

export {
  defaultAnimationProperties,
  dataAttributeConfig,
  checkElementExistence,
  checkLibrariesAvailability,
  getDataAttribute
};
