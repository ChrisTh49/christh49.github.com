window.addEventListener('load', function() {
    const img = document.getElementById('slide');

    var images = [];

    images[0] = './assets/img/Python3_Social.png';
    images[1] = './assets/img/React_tasks.png';
    images[2] = './assets/img/Scraping.png';
    images[3] = './assets/img/Weather.png';
    images[4] = '.assets/img/ThPhotos.jpg';

    var index = 0;

    function slider() {
        img.src = images[index];

        if(index < 3) {
            index++;
        }else{
            index = 0;
        }
    };

    setInterval(slider, 5000);
});