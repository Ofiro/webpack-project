// svgHandler.js

export function createSVGElements() {
    const svgElements = document.querySelectorAll('.svg-code');
    svgElements.forEach(el => {
        let svgCode = el.getAttribute('data-svg');
        el.innerHTML = svgCode;
    });
}
