const CLASS_DAT_JSON_FILE = "class_photos.json";
var class_data = [];

var class_choice = "all";
var cur_class_set = [];
var active_set = [];
var student_index = -1;

var correct = 0;
var miss = 0;
var localMiss = 0;

var student_img = document.getElementById("student-img");
var student_name = document.getElementById("student-name");

function init(){
    changeScreen('menu')
    //changeScreen('game');
    loadJSON();
}

// loads the JSON file
function loadJSON(){
    fetch(CLASS_DAT_JSON_FILE)
        .then(response => response.json())
        .then(data => {
            class_data = data;
            fillClassList();
        });
}

// changes the main screen to the given screen
function changeScreen(screen){
    // set the display of all screens to none
    let all_screens = document.getElementsByClassName("mainscreen");
    for(let i=0; i<all_screens.length; i++){
        all_screens[i].style.display = "none";
    }

    // se tthe display of the given screen to block
    document.getElementById(screen).style.display = "block";

}

// fills the class list with the given data from the JSON
function fillClassList(){
    let class_list = document.getElementById("classScroll");
    class_list.innerHTML = "";
    for(var key in class_data){
        let class_opt = document.createElement("div");
        class_opt.className = "classOpt";
        class_opt.innerHTML = key.toUpperCase();
        class_opt.setAttribute("onclick", "selectClass('"+key+"')");
        class_list.appendChild(class_opt);
    }
}

// picks the class set to play the game on
function selectClass(class_name){
    class_choice = class_name;
    if(class_name != "all")
        cur_class_set = class_data[class_name];
    else{
        cur_class_set = [];
        for(var key in class_data){
            cur_class_set = cur_class_set.concat(class_data[key]);
        }
    }

    active_set = cur_class_set.slice(0);
    correct = 0;
    miss = 0;

    changeScreen("game");
    newName();
}

// show another student randomly from the active set
function newName(){
    student_img.src = "";
    student_name.value = "";
    student_name.placeholder = "";
    localMiss = 0;

    student_name.focus();

    if(active_set.length == 0){
        endGame();
        return;
    }

    let rand = Math.floor(Math.random() * active_set.length);
    student_img.src = active_set[rand].img;
    student_index = rand;
}

function checkName(e){
    if(e.key != "Enter"){
        return;
    }

    let guess = student_name.value.toLowerCase();
    let ans = active_set[student_index].name.split(" ")[0].toLowerCase();

    if(guess == ans){
        correct++;
        active_set.splice(student_index, 1);
        newName();
    }
    else{
        miss++;
        localMiss++;
        student_name.value = "";
    }

    // show answer as placeholder
    if (localMiss >= 3){
        student_name.placeholder = active_set[student_index].name;
    }
    
    
}

function endGame(){
    changeScreen("score");
    document.getElementById("correct-ct").innerHTML = correct;
    document.getElementById("miss-ct").innerHTML = miss;
}

function reset(){
    selectClass(class_choice);
}

function getCurStudent(){
    console.log(active_set[student_index]);
}
