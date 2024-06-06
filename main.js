var modImages = document.querySelectorAll('img');

modImages.forEach(element => {
    element.addEventListener("error", function() {
        element.onerror=null;
        element.src='images/sad-cat.svg';
    });
});