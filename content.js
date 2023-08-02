window.addEventListener('load', (e) => {

    // e.preventDefault();

    
    const box_el =document.querySelector("#box_el");
    const box = document.querySelector("#content"); 
    const img = document.createElement("img");
    const imgTwo = document.createElement("img");
    const imgThree = document.createElement("img");
    const imgFour = document.createElement("img");
    
    
    img.src = "images/SHOW-28.JPG";
    img.classList.add("imgone");

    const src = document.getElementById("myImg");
    src.appendChild(img);


    imgTwo.src = "images/sourir.JPG";
    imgTwo.classList.add("imgtwo");

    const src2 = document.getElementById("myimgtwo");
    src2.appendChild(imgTwo);


    imgThree.src = "images/IMG_3496.JPG";
    imgThree.classList.add("imgthree");

    const src3 = document.getElementById("myimgthree");
    src3.appendChild(imgThree);

    imgFour.src = "images/IMG_3496.JPG";
    imgFour.classList.add("imgfour");

    const src4 = document.getElementById("myimgfour");
    src4.appendChild(imgFour);

     //    IMAGE5
    //  imgFive.src = "images/VALID-HH-13.JPG";
    //  imgFive.classList.add("imgfive");
 
    //  const src5 = document.getElementById("myimgfive");
    //  src5.appendChild(imgFive);

    
    // box1
    const elem1 = document.createElement("div");
    elem1.classList.add("elem1");

    src2.appendChild(elem1);
    
    
    
    // box2
    const elem2 = document.createElement("div");
    elem2.classList.add("elem2");
     
    
    src2.appendChild(elem2);
    console.log(elem2);

  

   

})

