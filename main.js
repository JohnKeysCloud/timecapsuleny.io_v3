const colorRadios = document.querySelectorAll('input[type="radio"]');

function switchItemColor(e) {
    let itemColorRegEx = /(?<=\[)(.*?)(?=\])/g;
    let radioItemValue = e.target.value; 
    let closestVideoElement = e.target.closest('.item-card').querySelector('.item-source').parentElement;

    let closestItemSources = e.target.closest('.item-card').querySelectorAll('.item-source');
    let newHVECItemSource = closestItemSources[0].src.replaceAll(itemColorRegEx, radioItemValue);
    let newWebMItemSource = closestItemSources[1].src.replaceAll(itemColorRegEx, radioItemValue);

    closestVideoElement.pause();
    closestItemSources[0].src = newHVECItemSource;
    closestItemSources[1].src = newWebMItemSource;
    closestVideoElement.load();
    closestVideoElement.play();
}

colorRadios.forEach(radio => {
    radio.addEventListener('click', switchItemColor)
})