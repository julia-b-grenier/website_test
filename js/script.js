// Wrap every letter in a span
var textWrapper = document.querySelector('.moving_letters .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})

.add({
    targets: '.moving_letters .letter',
    translateY: ["1.5em", 0],
    translateZ: 0,
    duration: 1000,
    delay: (el, i) => 20 * i
});
