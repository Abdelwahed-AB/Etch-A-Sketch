
let grid = document.querySelector(".grid");
let clear_btn = document.querySelector("#clear");

let grid_elems = [];

clear_btn.addEventListener("click", ()=>{
    console.log("[INFO] clearing grid ...");

    //remove all grid elements
    grid_elems.forEach(element => {
        element.remove();
    });

    grid_elems = [];

    let dimensions = NaN;
    do{
        dimensions = prompt("Please enter the width of the grid (max = 100) : ");
        dimensions = parseInt(dimensions);
    }while(dimensions < 0 || dimensions > 100 || isNaN(dimensions));
    
    createGrid(dimensions);
});

function createGrid(dim){
    for(let i = 0; i < dim; i++){
        let row = document.createElement("div");
        row.className = "grid-row";
        for(let j = 0; j<dim; j++){
            let div = document.createElement("div");
            div.className = "grid-item";

            div.addEventListener("mouseover", (e)=>{
                e.target.classList.add("highlight");
            });
            div.addEventListener("mouseout", (e)=>{
                e.target.classList.remove("highlight");
            });
            row.appendChild(div);
            grid_elems.push(div);
        }
        grid.appendChild(row);
    }
}

createGrid(10);