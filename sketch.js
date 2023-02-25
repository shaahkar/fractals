const CRYSTAL_SIZE = 150;
const SIDES = 6;

let PALETTE = [];
ALL_CRYSTALS =[];

//layout
const MARGIN = CRYSTAL_SIZE / 2;
const COLUMNS = 3;
const ROWS = 4;
const PADDING = CRYSTAL_SIZE * 0.2;
const GRIDBOX = CRYSTAL_SIZE + PADDING;
const START = (CRYSTAL_SIZE/2) + MARGIN;

function setup(){
    const totalX = START + GRIDBOX * COLUMNS;
    const totalY = START + GRIDBOX * ROWS;
    createCanvas(totalX,totalY, SVG);
    PALETTE = [
        color(255, 52, 154), //pink
        color(4,0,152),       //blue
        color(255,165,0),      //orange
        
        
    ]

   noLoop();
   angleMode(DEGREES);
   rectMode(CENTER);
}

function draw(){
    for(let x =0; x < COLUMNS; x++){
        for(let y =0; y < ROWS; y++){
            const posX = START + x * GRIDBOX;
            const posY = START + y * GRIDBOX;
            const crystal = makeCrystal({x: posX, y: posY});
            console.log(crystal);
            ALL_CRYSTALS.push(crystal);
        }
    }
    ALL_CRYSTALS.forEach(crystal=>{
        drawCrystal(crystal)
    })
}

