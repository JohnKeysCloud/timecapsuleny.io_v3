const COLOR_RADIOS = document.querySelectorAll('input[type="radio"]');

function switchItemColor(e) {
    let itemColorRegEx = /(?<=\[)(.*?)(?=\])/g;
    let radioValue = e.target.value; 
    let closestVideoElement = e.target.closest('.item-card').querySelector('.item-source').parentElement;
    let closestItemSources = e.target.closest('.item-card').querySelectorAll('.item-source');
    let currentItemColor = closestItemSources[0].src.match(itemColorRegEx)[0];

    if (radioValue === currentItemColor) return;
    closestVideoElement.pause();
    closestItemSources.forEach(source => {
        let newSource = source.src.replaceAll(itemColorRegEx, radioValue);
        source.src = newSource;
    });
    closestVideoElement.load();
    closestVideoElement.play();
}

COLOR_RADIOS.forEach(radio => {
    radio.addEventListener('click', switchItemColor);
})