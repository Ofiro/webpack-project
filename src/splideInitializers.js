// splideInitializers.js

import Splide from '@splidejs/splide';
import { COMMON_OPTIONS } from './config.js';

export function initializeGallery() {
    const gallerySplide = new Splide('#gallery-splide', {
        ...COMMON_OPTIONS,
        perPage: 1,
        padding: '10%',
        arrows: false,
        pagination: false,
        cloneStatus: false
    });

    if (gallerySplide) {
        gallerySplide.mount();
        const galleryArrowNext = document.querySelector('.custom_arrow_next');
        const galleryArrowPrev = document.querySelector('.custom_arrow_prev');

        if (galleryArrowNext) {
            galleryArrowNext.addEventListener('click', () => gallerySplide.go('+1'));
        }
        else if (galleryArrowPrev) {
            galleryArrowPrev.addEventListener('click', () => gallerySplide.go('-1'));
        }
    }
}

export function initializeOurWork() {
    const ourWorkSplide = new Splide('#splide-our-work', {
        ...COMMON_OPTIONS,
        perPage: 2,
        focus: 'left',
        padding: { right: '10%', left: 0 },
        arrows: false,
        pagination: false,
        breakpoints: { 990: { perPage: 1 } }
    });

    if (ourWorkSplide) {
        ourWorkSplide.mount();
        const arrowNext = document.querySelector('#arrowNext');
        const arrowPrev = document.querySelector('#arrowPrev');
        const barProgress = document.querySelector('#barProgress');
        const currentSlideCounter = document.querySelector('#currentSlideCounter');

        if (arrowNext) {
            arrowNext.addEventListener('click', () => ourWorkSplide.go('+1'));
        }

        if (arrowPrev) {
            arrowPrev.addEventListener('click', () => ourWorkSplide.go('-1'));
        }



        ourWorkSplide.on('move', () => {
            const currentIndex = ourWorkSplide.index + 1;
            barProgress.style.width = `${(currentIndex / ourWorkSplide.length) * 100}%`;
            currentSlideCounter.textContent = `0${currentIndex}`;
        });
    }
}
