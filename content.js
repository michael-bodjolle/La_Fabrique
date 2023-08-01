window.addEventListener('load', (e) => {

    // e.preventDefault();

    
    const box_el =document.querySelector("#box_el");
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
     
    
    // box1
    const elem1 = document.createElement("div");
    elem1.classList.add("elem1");

    box_el.appendChild(elem1);
    console.log(elem1);
    // box2
    const elem2 = document.createElement("div");
    elem2.classList.add("elem2");
   

    box_el.appendChild(elem2);
    console.log(elem2);

  

   

})

