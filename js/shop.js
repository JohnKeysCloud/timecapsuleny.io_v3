const COLOR_RADIOS = document.querySelectorAll('input[type="radio"]');

function switchItemColor(e) {
    let itemColorRegEx = /(?<=\[)(.*?)(?=\])/g;
    let radioValue = e.target.value;
    let closestItemImages = e.target.closest('.item-card').querySelectorAll('.item-img');
    let currentItemColor = closestItemImages[0].src.match(itemColorRegEx)[0];

    if (radioValue === currentItemColor) return;

    closestItemImages.forEach(source => {
        let newSource = source.getAttribute('src').replaceAll(itemColorRegEx, radioValue);
        source.setAttribute('src', newSource);
    });
}

COLOR_RADIOS.forEach(radio => {
    radio.addEventListener('click', switchItemColor);
});
