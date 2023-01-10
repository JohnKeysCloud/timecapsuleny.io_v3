const root = document.documentElement;
const navButton = document.querySelector('#nav-btn');
const navList = document.querySelector('#nav-list');
const COLOR_RADIOS = document.querySelectorAll('input[type="radio"]');
const cloudOne = document.getElementById('cloud');
let cloudState = 'mobile';

function remobilizeCloud() {
    if (root.clientWidth < 768 && cloudState === 'mobile') return;
    if (navButton.classList.contains('open')) navButton.click(); 
}

function driftCloud(e) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    cloudOne.style.transform = `translate(${clientX - 500}px, ${clientY - 500}px)`;
}

function toggleNav() {
    navButton.classList.toggle('open');
    navList.classList.toggle('open');
    
    if (navList.classList.contains('open')) {
        window.removeEventListener('mousemove', driftCloud);
        cloudState = 'immobile';
    } else {
        window.addEventListener('mousemove', driftCloud);
        cloudState = 'mobile';
    }
}

function setTempDimensions(e) {
    let targetedItemContainer = e.target.closest('.item-card').firstElementChild;
    let width = targetedItemContainer.offsetWidth;

    targetedItemContainer.style.height = `${width}px`;
    targetedItemContainer.style.width = `${width}px`;
}

function revertDimensions(e) {
    let targetedItemContainer = e.target.closest('.item-card').firstElementChild;

    targetedItemContainer.style.height = 'auto';
    targetedItemContainer.style.width = 'auto'; 
}

function switchItemColor(e) {
    let itemColorRegEx = /(?<=\[)(.*?)(?=\])/g;
    let radioValue = e.target.value;
    let closestVideoElement = e.target.closest('.item-card').querySelector('.item-source').parentElement;
    let closestItemSources = e.target.closest('.item-card').querySelectorAll('.item-source');
    let currentItemColor = closestItemSources[0].src.match(itemColorRegEx)[0];

    if (radioValue === currentItemColor) return;
    closestVideoElement.pause();
    setTempDimensions(e);
    closestItemSources.forEach(source => {
        let newSource = source.getAttribute('src').replaceAll(itemColorRegEx, radioValue);
        source.setAttribute('src', newSource);
    });
    closestVideoElement.load();
    closestVideoElement.play();

    closestVideoElement.addEventListener('loadeddata', () => {
        if (closestVideoElement.readyState >= 2) {
            revertDimensions(e);
        }
    });
}

COLOR_RADIOS.forEach(radio => {
    radio.addEventListener('click', switchItemColor);
});

navButton.addEventListener('click', toggleNav);
window.addEventListener('mousemove', driftCloud);
window.addEventListener('resize', remobilizeCloud);