
import {
  defaultAnimationProperties,
  checkLibrariesAvailability,
  getDataAttribute
} from './config.js';

function getScrollTriggerConfig(
  triggerElement,
  start = "top 80%",
  end = "center center",
  toggleActions = "play none none none"
) {
  return {
    trigger: triggerElement,
    start: start,
    end: end,
    toggleActions: toggleActions,
    scrub: true,
  };
}

function getRandomAnimationDirection() {
  const directions = [
    { clipPath: "inset(0 100% 0 0)", opacity: 0 }, // Left to Right
    { clipPath: "inset(0 0 0 100%)", opacity: 0 }, // Right to Left
    { clipPath: "inset(100% 0 0 0)", opacity: 0 }, // Bottom to Top
    { clipPath: "inset(0 0 100% 0)", opacity: 0 }, // Top to Bottom
  ];
  return directions[Math.floor(Math.random() * directions.length)];
}
function splitTextContent(element, defaultType = "words") {
  const type = getDataAttribute(element, "split-type") || defaultType;
  const splitChild = new SplitText(element, {
    type: type,
    linesClass: `${type}Child`,
  });
  return splitChild[type] || splitChild.words;
}


function getAnimationProperties(specificProperties) {
  return { ...defaultAnimationProperties, ...specificProperties };
}

export {
  getScrollTriggerConfig,
  getRandomAnimationDirection,
  getAnimationProperties,
  splitTextContent
};

export function elementsExist(selectors) {
  if (Array.isArray(selectors)) {
      return selectors.every(selector => document.querySelector(selector));
  }
  return !!document.querySelector(selectors);
}