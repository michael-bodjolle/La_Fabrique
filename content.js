window.addEventListener('load', (e) => {

    // e.preventDefault();

    const box = document.querySelector("#content");
    const img = document.createElement("img");
    const imgTwo = document.createElement("img");


    img.src = "images/SHOW-28.JPG";
    img.classList.add("imgone");

    const src = document.getElementById("myImg");
    src.appendChild(img);




    imgTwo.src = "images/sourir.JPG";
    imgTwo.classList.add("imgtwo");

    const src2 = document.getElementById("myimgtwo");
    src2.appendChild(imgTwo);

})