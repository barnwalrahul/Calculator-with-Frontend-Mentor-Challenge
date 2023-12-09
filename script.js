let main = document.getElementById("body"); 
let input = document.getElementById("text"); 
let main_btn_area = document.getElementById("num-btn"); 
let btn = document.getElementsByClassName("btn"); 


let reset_btn = document.getElementById("reset"); 
let del_btn = document.getElementById("del"); 
let equal_btn = document.getElementById("equal"); 
let input_text = document.getElementById("text");


// toggle function theme-1

function theme_one(){
    document.getElementById("two").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById("one").style.backgroundColor = "red";
    document.getElementById("three").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById("theme").style.color = "#fff";
    document.getElementById("calc").style.color = "#fff";
    main.style.backgroundColor = "hsl(222, 26%, 31%)"
    input.style.backgroundColor = "hsl(224, 36%, 15%)"
    input.style.color = "hsl(30, 25%, 89%)"
    main_btn_area.style.backgroundColor = "hsl(223, 31%, 20%)"
    btn.style.backgroundColor = "hsl(30, 25%, 89%)"
    btn.style.color = "hsl(221, 14%, 31%)"
    btn.style.boxShadowColor = "hsl(28, 16%, 65%)"
    reset_btn.style.backgroundColor = "hsl(225, 21%, 49%)"
    reset_btn.style.color = "#fff"
    reset_btn.style.boxShadowColor = "hsl(224, 28%, 35%)"
    del_btn.style.backgroundColor = "hsl(225, 21%, 49%)"
    del_btn.style.color = "#fff"
    del_btn.style.boxShadowColor = "hsl(224, 28%, 35%)"
    equal_btn.style.backgroundColor = "hsl(6, 63%, 50%)"
    equal_btn.style.color = "#fff"
    equal_btn.style.boxShadowColor = "hsl(6, 70%, 34%)"
}

// toggle function theme-2

function theme_two(){
    document.getElementById("two").style.backgroundColor = "red";
    document.getElementById("one").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById("three").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById("theme").style.color = "hsl(223, 31%, 20%)";
    document.getElementById("calc").style.color = "hsl(223, 31%, 20%)";
    main.style.backgroundColor = "hsl(0, 0%, 90%)"
    input.style.backgroundColor = "hsl(0, 0%, 93%)"
    input.style.color = "hsl(0, 5%, 81%)"
    main_btn_area.style.backgroundColor = "hsl(0, 5%, 81%)"
    btn.style.backgroundColor = "hsl(45, 7%, 89%)"
    btn.style.color = " hsl(60, 10%, 19%)"
    btn.style.boxShadowColor = "hsl(35, 11%, 61%)"
    reset_btn.style.backgroundColor = "hsl(185, 42%, 37%)"
    reset_btn.style.color = "#fff"
    reset_btn.style.boxShadowColor = "hsl(185, 58%, 25%)"
    del_btn.style.backgroundColor = "hsl(185, 42%, 37%)"
    del_btn.style.color = "#fff"
    del_btn.style.boxShadowColor = "hsl(185, 58%, 25%)"
    equal_btn.style.backgroundColor = "hsl(25, 98%, 40%)"
    equal_btn.style.color = "#fff"
    equal_btn.style.boxShadowColor = " hsl(25, 99%, 27%)"
}

// toggle function theme-3

function theme_three(){
    document.getElementById("two").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById("one").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById("three").style.backgroundColor = "red";
    document.getElementById("theme").style.color = "#fff";
    document.getElementById("calc").style.color = "#fff";
    main.style.backgroundColor = "hsl(268, 75%, 9%)"
    input.style.backgroundColor = " hsl(268, 71%, 12%)"
    input.style.color = "hsl(0, 0%, 100%)"
    main_btn_area.style.backgroundColor = " hsl(268, 71%, 12%)"
    btn.style.backgroundColor = "hsl(268, 47%, 21%)"
    btn.style.color = "hsl(0, 0%, 100%)"
    btn.style.boxShadowColor = "hsl(290, 70%, 36%)"
    reset_btn.style.backgroundColor = "hsl(281, 89%, 26%)"
    reset_btn.style.color = "hsl(52, 100%, 62%)"
    reset_btn.style.boxShadowColor = "hsl(285, 91%, 52%)"
    del_btn.style.backgroundColor = "hsl(281, 89%, 26%)"
    del_btn.style.color = "hsl(52, 100%, 62%)"
    del_btn.style.boxShadowColor = "hsl(285, 91%, 52%)"
    equal_btn.style.backgroundColor = "hsl(176, 100%, 44%)"
    equal_btn.style.color = "hsl(198, 20%, 13%)"
    equal_btn.style.boxShadowColor = "hsl(177, 92%, 70%)"
}

let string = "";

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click" , function(){
        if(btn[i].innerHTML == "="){
            string = eval(string);
            input_text.innerHTML = string;
        }
        else if(btn[i].innerHTML == 'RESET'){
            string = "";
            input_text.innerHTML = string;
          }
          else if(btn[i].innerHTML == 'DEL'){
            string = string.slice(0, -1);
            input_text.innerHTML = string;
          }
        else{
            string = string + btn[i].innerHTML;
            input_text.innerHTML = string;
          }
    })
}

