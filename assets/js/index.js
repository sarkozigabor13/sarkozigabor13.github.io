/* -------------------------------------------------------------------------- */

/*                                Switch theme                                */

/* -------------------------------------------------------------------------- */


(function () {

    // DOM Elements

    const creditCardLogo = document.querySelector('.credit-card-logo');
    const firstButton = document.getElementById('first-theme');
    const secondButton = document.getElementById('second-theme');
    const thirdButton = document.getElementById('third-theme');
    const section = document.getElementById('switchSection');
    const sectionClass = section.classList;

    // Button Event Handlers

    secondButton.onclick = () => {

        if (sectionClass.contains('third-theme')) {
            sectionClass.replace('third-theme', 'second-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_r.svg";

        } else {
            sectionClass.replace('first-theme', 'second-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_r.svg";
        }
    };

    firstButton.onclick = () => {

        if (sectionClass.contains('second-theme')) {
            sectionClass.replace('second-theme', 'first-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_p.svg";
        } else {
            sectionClass.replace('third-theme', 'first-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_p.svg";

        }
    };


    thirdButton.onclick = () => {
        if (sectionClass.contains('second-theme')) {
            sectionClass.replace('second-theme', 'third-theme');
            if (creditCardLogo.classList.contains('darkVisa')) {
                creditCardLogo.src = "assets/img/illustrations/visa_d.svg";
            } else {
                creditCardLogo.src = "assets/img/illustrations/visa_b.svg";
            }

        } else {
            sectionClass.replace('first-theme', 'third-theme');
            if (creditCardLogo.classList.contains('darkVisa')) {
                creditCardLogo.src = "assets/img/illustrations/visa_d.svg";
            } else {
                creditCardLogo.src = "assets/img/illustrations/visa_b.svg";
            }

        }
    };

})();



/* -------------------------------------------------------------------------- */

/*                               Pushing Learn                                */

/* -------------------------------------------------------------------------- */


(function () {

    var btn = document.getElementById('btnProgress');
    var bar = document.getElementById('bar');
    var txt = document.getElementById('textProgress');
    var count = 0;
    let CountClicks = 1;


    // Emoji confetti 
    // https://github.com/loonywizard/js-confetti
    const canvas = document.getElementById('custom_canvas')
    const button = document.getElementById('buttonConfetti')
    const jsConfetti = new JSConfetti({ canvas })


    // Listen for an event on the button
    // Increase the width of the bar by 10 percent(10%)

    btn.addEventListener('click', () => {

        bar.style.width = count + '%';


        if (count == 10) {
            txt.innerHTML = 'Javascript haladó';
        }
        if (count == 20) {
            txt.innerHTML = 'Javascript középhaladó';
        }
        if (count == 30) {
            txt.innerHTML = 'Javascript expert';
        }
        if (count == 40) {
            txt.innerHTML = 'Javascript zseni';
        }
        if (count == 50) {
            txt.innerHTML = 'React bemutatkozó';
        }
        if (count == 60) {
            txt.innerHTML = 'React kezdő';
        }
        if (count == 70) {
            txt.innerHTML = 'React amatőr';
        }
        if (count == 80) {
            txt.innerHTML = 'React értő';
        }
        if (count == 90) {
            txt.innerHTML = 'React pro';
        }

        if (count == 100) {



            txt.innerHTML = 'React pápa';
            btn.innerHTML = "Köszi";
            bar.classList.add('bar-success');



            setTimeout(() => {
                jsConfetti.addConfetti({
                    emojiSize: 100,
                    confettiNumber: 50,
                })
            }, 250);




            CountClicks += 1;



        }
        else {
            count = count + 10;
        }
    });
    count = count + 10;

})();
