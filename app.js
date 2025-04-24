const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {  
            entry.target.classList.add('card-show');
        }
        else {
            entry.target.classList.remove('card-show');
        }
    });
});

const cardsHidden = document.querySelectorAll('.card-hidden');
cardsHidden.forEach((el) => observer.observe(el));