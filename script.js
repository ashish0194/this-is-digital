//////////////////////////////
//  Main page ke Center Heading Animations
function mainHeadingAnimation(){
gsap.from('.main h1',{
    delay:0.3,
    opacity:0,
    duration:.9,
    y:-60
}) 
}
mainHeadingAnimation();
//////////////////////////////
// Image Left Animations
function leftImageAnimation(){
gsap.from('.main #img1', {
    opacity:0,
    y:60,
    delay:0.6,
    duration:1

})
}
leftImageAnimation();
///////////////////////////////
//////////////////////////////
// Image Right Animations
function rightImageAnimation(){
    gsap.from('.main #img2', {
        opacity:0,
        x:60,
        delay:0.5,
        duration:1

    })
    }
    rightImageAnimation();
    ////////////////////////////
    //////////////////////////////
// Image center Animations
function centerImageAnimation(){
    gsap.from('.main #img3', {
        opacity:0,
        y:-60,
        delay:0.6,
        duration:1

    })
    }
    centerImageAnimation();