ScrollReveal().reveal('.logo', {delay: 200});
ScrollReveal().reveal('.yellow-part', {delay: 300});
ScrollReveal().reveal('.content', {delay: 500});
ScrollReveal().reveal('.links', {delay: 700});

function Circle(el){
    $(el).circleProgress({fill: { color: '#dd4444', startAngle: 50.0 }}).on('circle-animation-progress', function(event, progress, stepValue){
        $(this).find('strong').text(String(stepValue.
                                           toFixed(2).
                                           substr(2) + '%'));
    });
};

Circle('.round');

