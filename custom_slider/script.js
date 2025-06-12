const slides = document.querySelectorAll(".slide");
let counter = 0;
slides.forEach((slide, index) => {

    slide.style.left = `${index * 100}%`;
})

const goNext = () => {
    counter++;
    slideImage();
}

const goPrev = () => {
    counter--;
    slideImage();
}

const slideImage = () => {
    slides.forEach((slide) => {

        counter = counter > 3 ? 0 : counter; //if next is pressed on last image show first image.
        counter = counter < 0 ? 3 : counter;
        // if (counter > 3) { //if next is pressed on last image show first image.
        //     counter = 0;
        // }
        // else if (counter < 0) { //if pre
        //     counter = 3;
        // }
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

