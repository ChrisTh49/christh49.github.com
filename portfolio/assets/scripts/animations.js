
//HEADER
ScrollReveal().reveal('.logo', {delay: 200});
ScrollReveal().reveal('.yellow-part', {delay: 300});
ScrollReveal().reveal('.content', {delay: 500});
ScrollReveal().reveal('.links', {delay: 700});

//ABOUT ME

ScrollReveal().reveal('.title_about_me', {delay: 200});
ScrollReveal().reveal('.img__info', {delay: 400});
ScrollReveal().reveal('.skills', {delay: 500});
ScrollReveal().reveal('.skills_names', {delay: 700});
ScrollReveal().reveal('.skills_names_1', {delay: 900});

//PROJECTS

ScrollReveal().reveal('.project-title', {delay: 200});
ScrollReveal().reveal('.projects-card', {delay: 400});
ScrollReveal().reveal('.projects-text', {delay: 500});

//CONTACTS

ScrollReveal().reveal('.github', {delay: 200});
ScrollReveal().reveal('.ig', {delay: 400});
ScrollReveal().reveal('.email', {delay: 600});
ScrollReveal().reveal('.phone', {delay: 700});



function Circle(el){
    $(el).circleProgress({fill: { color: '#dd4444', startAngle: 50.0 }}).on('circle-animation-progress', function(event, progress, stepValue){
        $(this).find('strong').text(String(stepValue.
                                           toFixed(2).
                                           substr(2) + '%'));
    });
};

Circle('.round');