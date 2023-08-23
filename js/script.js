// $(function() {
//     $("#header").load("header.html");
//   });

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");



// hamburger.addEventListener("click", () =>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => 
//     n.addEventListener("click", () =>{
//         hamburger.classList.remove("active")
//         navMenu.classList.remove("active")
//     })
//     )

$(function() {
  
  
    // Charger le contenu du header
    $("#header").load("./header-footer/header.html", function(e) {
    $("#footer").load("./header-footer/footer.html");
      
    
    // Gestion du menu burger
      $(".hamburger").on("click", function() {
        
        
        $(this).toggleClass("active");
        $(".nav-menu").toggleClass("active");
        
      });
  
      $(".nav-link").on("click", function() {
        
        $(".hamburger").removeClass("active");
        $(".nav-menu").removeClass("active");
        
      });
      
    });
  });

  

  