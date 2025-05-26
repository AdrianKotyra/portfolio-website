
function animateOnScroll() {
    if(window.innerWidth>=726) {
        const elements = document.querySelectorAll('.animate-on-scroll');


        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('animate-on-scroll-visible');

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.4
        });


        elements.forEach(element => {
            observer.observe(element);
        });
    }
    else {
        const elements = document.querySelectorAll('.animate-on-scroll')
        elements.forEach(element => {
            element.classList.remove("animate-on-scroll")
        });
    }

}


animateOnScroll();