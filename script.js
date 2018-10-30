"use strict";

$(document).ready(() => {
    let defaults = {
        keyboard: true,
        arrows: true,
        infobar: true,
    };

    $.get("https://www.reddit.com/r/EarthPorn.json?limit=10").then((response) => {
    const arr = response.data.children;
    for(let post of arr) {
        $(".content").append(`
        <section class="post">
        <a href="https://www.reddit.com${post.data.permalink}">${post.data.title}</a>
        <a data-fancybox="gallery" href="${post.data.preview.images[0].source.url}"><img src="${post.data.thumbnail}"></a>
        </section>`
        )}
    });

    $(".image").fancybox({
        'transitionIn' : 'elastic',
        'transitionOut' : 'elastic'
    });
});