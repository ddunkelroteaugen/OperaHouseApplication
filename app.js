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
            document.getElementById('profile-menu').style.color = "rgb(204, 227, 151)";
            document.getElementById('question-one-menu').style.color = "white";
            document.getElementById('question-two-menu').style.color = "white";
            document.getElementById('supporting-documents-menu').style.color = "white";

            break;
        case 'question-one':
            document.getElementById('profile').classList.add('hide');
            document.getElementById('question-one').classList.remove('hide');
            document.getElementById('question-two').classList.add('hide');
            document.getElementById('supporting-documents').classList.add('hide');
            document.getElementById('question-one').scrollIntoView();
            document.getElementById('profile-menu').style.color = "white";
            document.getElementById('question-one-menu').style.color = "rgb(204, 227, 151)";
            document.getElementById('question-two-menu').style.color = "white";
            document.getElementById('supporting-documents-menu').style.color = "white";
            break;
        case 'question-two':
            document.getElementById('profile').classList.add('hide');
            document.getElementById('question-one').classList.add('hide');
            document.getElementById('question-two').classList.remove('hide');
            document.getElementById('supporting-documents').classList.add('hide');
            document.getElementById('question-two').scrollIntoView();
            document.getElementById('profile-menu').style.color = "white";
            document.getElementById('question-one-menu').style.color = "white";
            document.getElementById('question-two-menu').style.color = "rgb(204, 227, 151)";
            document.getElementById('supporting-documents-menu').style.color = "white";
            break;
        case 'supporting-documents':
            document.getElementById('profile').classList.add('hide');
            document.getElementById('question-one').classList.add('hide');
            document.getElementById('question-two').classList.add('hide');
            document.getElementById('supporting-documents').classList.remove('hide');
            document.getElementById('profile-menu').style.color = "white";
            document.getElementById('question-one-menu').style.color = "white";
            document.getElementById('question-two-menu').style.color = "white";
            document.getElementById('supporting-documents-menu').style.color = "rgb(204, 227, 151)";
            break;

    }
}