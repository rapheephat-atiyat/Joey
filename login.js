    let currentIndex = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    const slideWidth = 200; // ความกว้างรูปแต่ละรูป

    function updateSlide() {
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // เลื่อนอัตโนมัติ
    setInterval(() => {
        currentIndex = (currentIndex + 1) ;
        if(currentIndex >=4){
            currentIndex =0
        }
        updateSlide();
    }, 3000); 

    /**//* */
        function changeClass(){
            let element = document.getElementById("mytext");
            element.className = "bluetext";
            let element1 = document.getElementById("click0");
            element1.className = "nonebut";
        }
        /** */
        function changeClass1(){
            let element11 = document.getElementById("mytext");
            element11.className = "grid-container";
            let element1 = document.getElementById("click0");
            element1.className = "";
        }