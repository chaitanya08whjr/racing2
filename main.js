canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
carrrrrrrrrrrrrrrrrrrr_width = 100;
carrrrrrrrrrrrrrrrrrrr_height= 90;
carrrrrrrrrrrrrrrrrrrr_img="carrrrrrrrrrrrrrrrrrrr.png"
carrrrrrrrrrrrrrrrrrrr_x = 5;
carrrrrrrrrrrrrrrrrrrr_y = 110;

racingcarrr_width = 100;
racingcarrr_height= 70;
racingcarrr_img="racingcarrr.jpg"; 
racingcarrr_x = 20;
racingcarrr_y = 20;
bg_img="track.webp";

function add() {
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadBg;
    bg_imgTag.src = bg_img;

    console.log("source="+bg_img);

    carrrrrrrrrrrrrrrrrrrr_imgTag = new Image();
    carrrrrrrrrrrrrrrrrrrr_imgTag.onload = uploadCarrrrrrrrrrrrrrrrrrrr;
    carrrrrrrrrrrrrrrrrrrr_imgTag.src = carrrrrrrrrrrrrrrrrrrr_img;

    racingcarrr_imgTag = new Image();
    racingcarrr_imgTag.onload = uploadRacingcarrr;
    racingcarrr_imgTag.src = racingcarrr_img;
}

function uploadBg() {
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCarrrrrrrrrrrrrrrrrrrr() {
    ctx.drawImage(carrrrrrrrrrrrrrrrrrrr_imgTag, carrrrrrrrrrrrrrrrrrrr_x - 10, carrrrrrrrrrrrrrrrrrrr_y + 100, carrrrrrrrrrrrrrrrrrrr_width, carrrrrrrrrrrrrrrrrrrr_height);
}

function uploadRacingcarrr() {
    ctx.drawImage(racingcarrr_imgTag, racingcarrr_x - 20, racingcarrr_y + 300, racingcarrr_width, racingcarrr_height);
}

window.addEventListener("keydown", My_keydown);

function My_keydown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);
    if (keyPress == '38') {
        carrrrrrrrrrrrrrrrrrrr_up();
        console.log("up")
    }
    if (keyPress == '40') {
        carrrrrrrrrrrrrrrrrrrr_down();
        console.log("down")
    }
    if (keyPress == '37') {
        carrrrrrrrrrrrrrrrrrrr_left();
        console.log("left")
    }
    if (keyPress == '39') {
        carrrrrrrrrrrrrrrrrrrr_right();
        console.log("right")
    }
    if (keyPress == '38') {
        racingcarrr_up();
        console.log("up")
    }
    if (keyPress == '40') {
        racingcarrr_down();
        console.log("down")
    }
    if (keyPress == '37') {
        racingcarrr_left();
        console.log("left")
    }
    if (keyPress == '39') {
        racingcarrr_right();
        console.log("right")
    }
}

function carrrrrrrrrrrrrrrrrrrr_up(){
    if ( carrrrrrrrrrrrrrrrrrrr_y >= 0) 
    {       
        carrrrrrrrrrrrrrrrrrrr_y = carrrrrrrrrrrrrrrrrrrr_y - 10;
        console.log("When up arrow is pressed, x = " + carrrrrrrrrrrrrrrrrrrr_x + " | y = " + carrrrrrrrrrrrrrrrrrrr_y);
        uploadBg();
        uploadCarrrrrrrrrrrrrrrrrrrr();
        uploadRacingcarrr();
    }
}

function carrrrrrrrrrrrrrrrrrrr_down(){
    if ( carrrrrrrrrrrrrrrrrrrr_y <= 500) 
    {       
        carrrrrrrrrrrrrrrrrrrr_y = carrrrrrrrrrrrrrrrrrrr_y + 10;
        console.log("When up arrow is pressed, x = " + carrrrrrrrrrrrrrrrrrrr_x + " | y = " + carrrrrrrrrrrrrrrrrrrr_y);
        uploadBg();
        uploadCarrrrrrrrrrrrrrrrrrrr();
        uploadRacingcarrr();
    }
}

function carrrrrrrrrrrrrrrrrrrr_left(){
    if ( carrrrrrrrrrrrrrrrrrrr_x >= 0) 
    {       
        carrrrrrrrrrrrrrrrrrrr_x = carrrrrrrrrrrrrrrrrrrr_x - 10;
        console.log("When up arrow is pressed, x = " + carrrrrrrrrrrrrrrrrrrr_x + " | y = " + carrrrrrrrrrrrrrrrrrrr_y);
        uploadBg();
        uploadCarrrrrrrrrrrrrrrrrrrr();
        uploadRacingcarrr();
    }
}

function carrrrrrrrrrrrrrrrrrrr_right(){
    if ( carrrrrrrrrrrrrrrrrrrr_x <= 700) 
    {       
        carrrrrrrrrrrrrrrrrrrr_x = carrrrrrrrrrrrrrrrrrrr_x + 10;
        console.log("When up arrow is pressed, x = " + carrrrrrrrrrrrrrrrrrrr_x + " | y = " + carrrrrrrrrrrrrrrrrrrr_y);
        uploadBg();
        uploadCarrrrrrrrrrrrrrrrrrrr();
        uploadRacingcarrr();
    }
}

function racingcarrr_up(){
    if ( racingcarrr_y >= 0) 
    {       
        racingcarrr_y = racingcarrr_y - 10;
        console.log("When up arrow is pressed, x = " + racingcarrr_x + " | y = " + racingcarrr_y);
        uploadBg();
        uploadCarrrrrrrrrrrrrrrrrrrr();
        uploadRacingcarrr();
    }
}

function racingcarrr_down(){
    if ( racingcarrr_y <= 500) 
    {       
        racingcarrr_y = racingcarrr_y + 10;
        console.log("When up arrow is pressed, x = " + racingcarrr_x + " | y = " + racingcarrr_y);
        uploadBg();
        uploadCarrrrrrrrrrrrrrrrrrrr();
        uploadRacingcarrr();
    }
}

function racingcarrr_left(){
    if ( racingcarrr_x >= 0) 
    {       
        racingcarrr_x = racingcarrr_x - 10;
        console.log("When up arrow is pressed, x = " + racingcarrr_x + " | y = " + racingcarrr_y);
        uploadBg();
        uploadCarrrrrrrrrrrrrrrrrrrr();
        uploadRacingcarrr();
    }
}

function racingcarrr_right(){
    if ( racingcarrr_x <= 700) 
    {       
        racingcarrr_x = racingcarrr_x + 10;
        console.log("When up arrow is pressed, x = " + racingcarrr_x + " | y = " + racingcarrr_y);
        uploadBg();
        uploadCarrrrrrrrrrrrrrrrrrrr();
        uploadRacingcarrr();
    }
}

if (carrrrrrrrrrrrrrrrrrrr_x > 700)
{
    console.log("Carrrrrrrrrrrrrrrrrrrr won!!!");
    document.getElementById('game_status').innerHTML = "Carrrrrrrrrrrrrrrrrrrr Won!!";
}

if (racingcarrr_x > 700)
{
    console.log("Racingcarrr won!!!");
    document.getElementById('game_status').innerHTML = "Racingcarrr Won!!";
}