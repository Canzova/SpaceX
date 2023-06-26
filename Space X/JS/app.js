// With the below code we are creating a box like structure all the codes which will write into it it will be limited to this block only and will not affect the code which we will write outside this. Because of this--->() in the last it will be called by itself

// This same technique is used my NodeJs internally

// It is know as modules
(function () {
    let socials = document.querySelectorAll('.social div')

    socials.forEach(function(social, index){
        social.style.animation = `movein .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + .2}s`
    })

    // With the below code we are storing all the span inside the rocke-body class
    let rocketPieces = document.querySelectorAll('.rocket-body span')

    // Here we are section our rockey section
    let rocket = document.querySelector('.rocket');

    // Here we are storing the value of height of the browser window which is divided by 5
    let trigerStart = window.innerHeight/5;

    // Here we are caluclating the offset height of the rocket section
    let rocketOffsetTop = rocket.offsetTop;

    // Here we are storing the height of 2nd img of rocket
    let thirdOffsetTop = rocketPieces[2].offsetTop;


    // In JavaScript, window.scrollY is a property that represents the number of pixels that the document has been scrolled vertically. It provides the current vertical scroll position of the window or document.


    // Here we are adding an event listener scroll
    document.addEventListener('scroll', () =>{
        if(window.scrollY > (rocketOffsetTop - trigerStart)){
            rocketPieces[0].classList.add('active');
            rocketPieces[1].classList.add('active');
            // rocketPieces[2].classList.add('active');
        }
        else
        {
            rocketPieces[0].classList.remove('active');
            rocketPieces[1].classList.remove('active');
        }

        if(window.scrollY > (thirdOffsetTop - trigerStart))
        {
            rocketPieces[2].classList.add('active');
        }
        else
        {
            rocketPieces[2].classList.remove('active');
        }
    })

// ------------------------------Mobile Nav-----------------------------------

    // Creating a variable with let keyword
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobilenav = document.querySelector('.mobile-nav');

    hamberger.addEventListener("click", function (){
        mobilenav.classList.add('open');
        // For adding transition only when hamberger class is clicked 
        mobilenav.classList.add('transition');
    })

    times.addEventListener('click', function(){

        // Remove property will simply remove that class

        mobilenav.classList.remove('open');
        // For adding transition only when times class is clicked 
        mobilenav.classList.add('transition');
    });

}())