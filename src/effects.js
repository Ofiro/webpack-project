// effects.js

export function applyHoverEffectToSplideWork() {
    if ($(window).width() <= 991) return;

    $('.splide-work').on('mouseenter', function() {
        $(this).addClass('ishovered');
        $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').addClass('ishovered');
    }).on('mouseleave', function() {
        $(this).removeClass('ishovered');
        $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').removeClass('ishovered');
    });
}

export function applyProjectCardHoverEffect() {
    if ($(window).width() <= 991) return;

    $('.project_card').on('mouseenter', function() {
        $(this).addClass('ishovered');
        $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').addClass('ishovered');
    }).on('mouseleave', function() {
        $(this).removeClass('ishovered');
        $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').removeClass('ishovered');
    });
}

export function applyRegionItemHoverEffects() {
    if ($(window).width() <= 991) return;

    $('.region_item_wrapper').on('mouseenter', function() {
        const mapCode = $(this).attr('data-map-code');
        $('.world_map_modded .' + mapCode).addClass('active-region');
    }).on('mouseleave', function() {
        const mapCode = $(this).attr('data-map-code');
        $('.world_map_modded .' + mapCode).removeClass('active-region');
    });
}

export function applyRegionCardHoverEffects() {
    if ($(window).width() <= 991) return;

    $('.region_card').on('mouseenter', function() {
        $(this).addClass('ishovered');
        $(this).find('.region_card_map_svg, .region_card_name, .region_card_arrow').addClass('ishovered');
    }).on('mouseleave', function() {
        $(this).removeClass('ishovered');
        $(this).find('.region_card_map_svg, .region_card_name, .region_card_arrow').removeClass('ishovered');
    });
}
