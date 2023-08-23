for (let i = 1; i <= 3; i++) {
    let box = document.createElement("div");
    box.className = "box";
    box.textContent = "box" + i;
    
    // Insérer les éléments div dans la div containtarif
    document.querySelector(".containtarif").appendChild(box);
}