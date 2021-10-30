/* 
 *From: https://www.npmjs.com/package/typewriter-effect
*/ 

/* -------------------------------------------------------------------------- */

/*                       Logo typewrite from lg deskpot                       */

/* -------------------------------------------------------------------------- */

(function() {
      
    const appLogoName = document.getElementById('appLogoNameTxt');

    const typewriterLogoName = new Typewriter(appLogoName, {
      loop: true,
      delay: 75,
    });
    
    typewriterLogoName 
      .pauseFor(2500)
      .typeString('<span style="color: #FF3E60;">szórakozásból.</span>')
      .pauseFor(1000)
      .deleteChars(14)
      .typeString('<span style="color: #2D74FF;">tájékoztatni.</span>')
      .pauseFor(1000)
      .deleteChars(13)
      .typeString('<span style="color: #343A3B;">eladni.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('<span style="color: var(--fontColor);">neked.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .start();

 })();


/* -------------------------------------------------------------------------- */

/*                     Logo typewrite from lg deskpot EN                      */

/* -------------------------------------------------------------------------- */

(function() {
      
    const appLogoNameEn = document.getElementById('appLogoNameEn');

    const typewriterLogoNameEn = new Typewriter(appLogoNameEn, {
      loop: true,
      delay: 75,
    });
    
    typewriterLogoNameEn 
      .pauseFor(2500)
      .typeString('<span style="color: #FF3E6C;">design.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('<span style="color: #117ecf;">fun.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('<span style="color: #343A3B;">selling.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .typeString('<span style="color: #2bf406;">you.</span>')
      .pauseFor(1000)
      .deleteChars(10)
      .start();

 })();



