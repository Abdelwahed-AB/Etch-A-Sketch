
let grid = document.querySelector(".grid");
let clear_btn = document.querySelector("#clear");
let color_picker = document.querySelector("#color");

let grid_elems = [];
let color = "#000";

clear_btn.addEventListener("click", ()=>{
    console.log("[INFO] clearing grid ...");
    
    let dimensions = NaN;
    do{
        dimensions = prompt("Please enter the width of the grid (max = 100) : ");
        if(dimensions === null) return;
        dimensions = parseInt(dimensions);
    }while(dimensions < 0 || dimensions > 100 || isNaN(dimensions));

    //remove all grid elements
    grid_elems.forEach(element => {
        element.remove();
    });
    grid_elems = [];

    createGrid(dimensions);
});

color_picker.addEventListener("change", (e)=>{
    color = e.target.value;
});


function createGrid(dim){
    for(let i = 0; i < dim; i++){
        let row = document.createElement("div");
        row.className = "grid-row";
        for(let j = 0; j<dim; j++){
            let div = document.createElement("div");
            div.className = "grid-item";

            div.addEventListener("mouseover", (e)=>{
                e.target.style.background = color;
            });
            row.appendChild(div);
            grid_elems.push(div);
        }
        grid.appendChild(row);
    }
}

createGrid(10);