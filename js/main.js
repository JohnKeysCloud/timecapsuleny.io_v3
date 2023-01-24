const root = document.documentElement;
const themeSwitch = document.getElementById('theme-switcher');
const navButton = document.querySelector('#nav-btn');
const navList = document.querySelector('#nav-list');
const cloudEncapsulator = document.getElementById('cloud-encapsulator');
const moonCart = document.getElementById('moonCart');
const cloudOne = document.getElementById('cloud');

let cloudState = 'mobile';

let nightMode = localStorage.getItem('nightMode');

function remobilizeCloud() {
    if (root.clientWidth < 768 && cloudState === 'mobile') return;
    if (navButton.classList.contains('open')) navButton.click();
}

function driftCloud(e) {
    const clientX = e.clientX;
    const clientY = e.clientY;  
    
    let halfCloudEncapsulatorHeight = cloudEncapsulator.offsetHeight / 2;
    let halfCloudEncapsulatorWidth = cloudEncapsulator.offsetWidth / 2;

    cloudOne.style.transform = `translate(${clientX - halfCloudEncapsulatorWidth}px, ${clientY - halfCloudEncapsulatorHeight}px)`;
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

function setLocalStorage() {
    nightMode = localStorage.getItem('nightMode');

    if (themeSwitch.checked) {
        localStorage.setItem('nightMode', 'enabled');
    } else if (!themeSwitch.checked) {
        localStorage.setItem('nightMode', null);
    }
}

function toggleTheme() {
    if (themeSwitch.checked) {
        // * NiTE MODE
        root.style.setProperty('--cyclone-filter', 'var(--cyclone-filter-night)');
        root.style.setProperty('--cloud-color', 'var(--cloud-color-night)');
        root.style.setProperty('--moon-filter', 'var(--moon-filter-night)');

        root.style.setProperty('--color-text-primary', 'var(--color-text-primary-night)');
        root.style.setProperty('--background', 'var(--background-night)');
        root.style.setProperty('--theme-switch-box-shadow', 'var(--theme-switch-box-shadow-night)');

        root.style.setProperty('--nav-button-color', 'var(--nav-button-color-night)');
        root.style.setProperty('--nav-button-shadow', 'var(--nav-button-shadow-night)');
        root.style.setProperty('--nav-link-color', 'var(--nav-link-color-night');
        root.style.setProperty('--footer-text', 'var(--footer-text-night)');
        root.style.setProperty('--footer-background', 'var(--footer-background-night)');

        root.style.setProperty('--shop-background-item', 'var(--shop-background-item-night)');
        root.style.setProperty('--shop-item-background', 'var(--shop-item-background-night)');
        root.style.setProperty('--shop-item-box-shadow', 'var(--shop-item-box-shadow-night)');
        root.style.setProperty('--shop-item-box-shadow-hover', 'var(--shop-item-box-shadow-hover-night)');
        root.style.setProperty('--shop-item-title', 'var(--shop-item-title-night)');
        root.style.setProperty('--shop-radio-background', 'var(--shop-radio-background-night)'); 
        root.style.setProperty('--shop-radio-shadow', 'var(--shop-radio-shadow-night)');
        root.style.setProperty('--shop-radio-shadow-one', 'var(--shop-radio-shadow-one-night)');
        root.style.setProperty('--shop-radio-shadow-two', 'var(--shop-radio-shadow-two-night)');    
    } else if (!themeSwitch.checked) {
        // * DAY MODE 
        root.style.setProperty('--cyclone-filter', 'var(--cyclone-filter-day)');
        root.style.setProperty('--cloud-color', 'var(--cloud-color-day)');
        root.style.setProperty('--moon-filter', 'var(--moon-filter-day)');

        root.style.setProperty('--color-text-primary', 'var(--color-text-primary-day)');
        root.style.setProperty('--background', 'var(--background-day)');
        root.style.setProperty('--theme-switch-box-shadow', 'var(--theme-switch-box-shadow-day)');

        root.style.setProperty('--nav-button-color', 'var(--nav-button-color-day)');
        root.style.setProperty('--nav-button-shadow', 'var(--nav-button-shadow-day)');
        root.style.setProperty('--nav-link-color', 'var(--nav-link-color-day');
        root.style.setProperty('--footer-text', 'var(--footer-text-day)');
        root.style.setProperty('--footer-background', 'var(--footer-background-day)');

        root.style.setProperty('--shop-background-item', 'var(--shop-background-item-day)');
        root.style.setProperty('--shop-item-background', 'var(--shop-item-background-day)');
        root.style.setProperty('--shop-item-box-shadow', 'var(--shop-item-box-shadow-day)');
        root.style.setProperty('--shop-item-box-shadow-hover', 'var(--shop-item-box-shadow-hover-day)');
        root.style.setProperty('--shop-item-title', 'var(--shop-item-title-day)');
        root.style.setProperty('--shop-radio-background', 'var(--shop-radio-background-day)'); 
        root.style.setProperty('--shop-radio-shadow', 'var(--shop-radio-shadow-day)');
        root.style.setProperty('--shop-radio-shadow-one', 'var(--shop-radio-shadow-one-day)');
        root.style.setProperty('--shop-radio-shadow-two', 'var(--shop-radio-shadow-two-day)');
    }

    return setLocalStorage();
}

function loadSavedTheme() { 
    nightMode = localStorage.getItem('nightMode');

    if (localStorage.getItem('nightMode') === 'enabled') {
        themeSwitch.checked = true;
        toggleTheme();
    } 
}

loadSavedTheme();
themeSwitch.addEventListener('click', toggleTheme);
navButton.addEventListener('click', toggleNav);
window.addEventListener('mousemove', driftCloud);
window.addEventListener('resize', remobilizeCloud);