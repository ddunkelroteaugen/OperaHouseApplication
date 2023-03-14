const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

function arrow(arrow, readme, next) {
    document.getElementById(next).classList.remove('hide');
    document.getElementById(arrow).classList.add('hide');
    document.getElementById(readme).classList.add('hide');
    document.getElementById(next).scrollIntoView();
}

function nav(item) {

    switch (item) {
        case 'profile':
            document.getElementById('profile').classList.remove('hide');
            document.getElementById('question-one').classList.add('hide');
            document.getElementById('question-two').classList.add('hide');
            document.getElementById('supporting-documents').classList.add('hide');
            break;
        case 'question-one':
            document.getElementById('profile').classList.add('hide');
            document.getElementById('question-one').classList.remove('hide');
            document.getElementById('question-two').classList.add('hide');
            document.getElementById('supporting-documents').classList.add('hide');
            document.getElementById('question-one').scrollIntoView();
            break;
        case 'question-two':
            document.getElementById('profile').classList.add('hide');
            document.getElementById('question-one').classList.add('hide');
            document.getElementById('question-two').classList.remove('hide');
            document.getElementById('supporting-documents').classList.add('hide');
            document.getElementById('question-two').scrollIntoView();
            break;
        case 'supporting-documents':
            document.getElementById('profile').classList.add('hide');
            document.getElementById('question-one').classList.add('hide');
            document.getElementById('question-two').classList.add('hide');
            document.getElementById('supporting-documents').classList.remove('hide');
            break;

    }
}