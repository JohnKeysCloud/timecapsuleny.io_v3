const itemOneRadios = document.querySelectorAll('input[name="item-1"]');
const itemTwoRadios = document.querySelectorAll('input[name="item-2"]');
const itemThreeRadios = document.querySelectorAll('input[name="item-3"]');
const itemFourRadios = document.querySelectorAll('input[name="item-4"]');
const itemFiveRadios = document.querySelectorAll('input[name="item-5"]');

const itemVideos = document.querySelectorAll('.item-video');
const itemSources = document.querySelectorAll('.item-source');


function switchColor(e) {
    console.log(e.target);
    if (e.target.value === 'Kuro') {
        itemVideos[0].pause();
        itemSources[0].src = 'assets/images/productsAnimated/hoodie-theCloud-K.webm';
        itemVideos[0].load();
        itemVideos[0].play();
    } else if (e.target.value === 'Mashumaro') {
        itemVideos[0].pause();
        itemSources[0].src = 'assets/images/productsAnimated/hoodie-theCloud-M.webm';
        itemVideos[0].load();
        itemVideos[0].play();
    }
}

function switchColorTwo(e) {
    console.log(e.target);
    if (e.target.value === 'Kuro') {
        itemVideos[1].pause();
        itemSources[1].src = 'assets/images/productsAnimated/beanie-cycloneV1-K.webm';
        itemVideos[1].load();
        itemVideos[1].play();
    } else if (e.target.value === 'Mashumaro') {
        itemVideos[1].pause();
        itemSources[1].src = 'assets/images/productsAnimated/beanie-cycloneV1-M.webm';
        itemVideos[1].load();
        itemVideos[1].play();
    } else if (e.target.value === 'Sora') {
        itemVideos[1].pause();
        itemSources[1].src = 'assets/images/productsAnimated/beanie-cycloneV1-S.webm';
        itemVideos[1].load();
        itemVideos[1].play();
    }
}

function switchColorThree(e) {
    console.log(e.target);
    if (e.target.value === 'Kuro') {
        itemVideos[2].pause();
        itemSources[2].src = 'assets/images/productsAnimated/socks-cyclone-K.webm';
        itemVideos[2].load();
        itemVideos[2].play();
    } else if (e.target.value === 'Mashumaro') {
        itemVideos[2].pause();
        itemSources[2].src = 'assets/images/productsAnimated/socks-cyclone-M.webm';
        itemVideos[2].load();
        itemVideos[2].play();
    } else if (e.target.value === 'Sora') {
        itemVideos[2].pause();
        itemSources[2].src = 'assets/images/productsAnimated/socks-cyclone-S.webm';
        itemVideos[2].load();
        itemVideos[2].play();
    }
}

itemOneRadios.forEach(radio => {
    radio.addEventListener('click', switchColor);
});

itemTwoRadios.forEach(radio => {
    radio.addEventListener('click', switchColorTwo);
});

itemThreeRadios.forEach(radio => {
    radio.addEventListener('click', switchColorThree);
});