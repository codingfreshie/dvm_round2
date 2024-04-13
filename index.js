
var scroll1 =  window.scrollY ;

window.addEventListener("scroll", () => {
    var nav = document.querySelector("nav");
    // var blah = document.querySelector(".nav_2");
    var left1 =document.querySelector(".part_4_1");
    var left2 =document.querySelector(".part_4_3");
    var right1 =document.querySelector(".part_4_2");
    var right2 =document.querySelector(".part_4_4");
    var par_5 = document.querySelector(".part_5_2");
    var top = (window.scrollY )*1.3 - 4800;
    if(window.scrollY>scroll1){
        nav.classList.add("up")
        nav.classList.remove("down");
        // blah.classList.add("green")
        left1.style="transform: translateX(-" + window.scrollY + "px)";
        
        left2.style="transform: translateX(-" + window.scrollY + "px)";
        right1.style="transform: translateX(" + window.scrollY + "px)";
        right2.style="transform: translateX(" + window.scrollY + "px)";
        // par_5.style="transform: translateY(-"+ top +"px)";
        document.querySelector(".cir_btn2").classList.replace("cir_btn2","cir_btn1");
        
        document.querySelector(".cir_btn_main_big").classList.replace("cir_btn_main_big","cir_btn_main_small");
        document.querySelectorAll(".big_dia2")[1].classList.replace("big_dia2","big_dia1");
        document.querySelectorAll(".small_dia2")[1].classList.replace("small_dia2","small_dia1");
        document.querySelectorAll(".big_dia2")[0].classList.replace("big_dia2","big_dia1");
        document.querySelectorAll(".small_dia2")[0].classList.replace("small_dia2","small_dia1");
        // setTimeout(() => {document.querySelector(".cir_rot").classList.toggle("dis_none")},300)
        document.querySelector(".cir_rot").classList.toggle("dis_none");
        


        
        
        
    }
    else{
        // blah.classList.remove("green");
        nav.classList.remove("up");
        nav.classList.add("down");
        left1.style="transform: translateX(-" + window.scrollY + "px)";
        left2.style="transform: translateX(-" + window.scrollY + "px)";
        right1.style="transform: translateX(" + window.scrollY + "px)";
        right2.style="transform: translateX(" + window.scrollY + "px)";
        // par_5.style="transform: translateY(-"+ top +"px)";
        document.querySelector(".cir_btn1").classList.replace("cir_btn1","cir_btn2");
        // document.querySelector(".cir_rot").classList.toggle("dis_none");
        document.querySelector(".cir_btn_main_small").classList.replace("cir_btn_main_small","cir_btn_main_big");
        document.querySelectorAll(".big_dia1")[1].classList.replace("big_dia1","big_dia2");
        document.querySelectorAll(".small_dia1")[1].classList.replace("small_dia1","small_dia2");
        document.querySelectorAll(".big_dia1")[0].classList.replace("big_dia1","big_dia2");
        document.querySelectorAll(".small_dia1")[0].classList.replace("small_dia1","small_dia2");
        setTimeout(() => {document.querySelector(".cir_rot").classList.toggle("dis_none")},300)
        
        

    }
    scroll1 = window.scrollY ;
})
var part_2_1 =document.querySelector(".part_2_img1");
var part_2_2 =document.querySelector(".part_2_img2");
var part_2_3 =document.querySelector(".part_2_img3");
var part_2_4 =document.querySelector(".part_2_img4");
var cnt = 0;
setInterval(()=> {
    var cnt2 = cnt + 1;
    if(cnt%4 == 0) {
        part_2_1.classList.toggle("dis_block")
        part_2_1.classList.toggle("dis_none")
        
    }
    if(cnt%4 == 1) {
        part_2_2.classList.toggle("dis_block")
        part_2_2.classList.toggle("dis_none")
        
    }
    if(cnt%4 == 2) {
        part_2_3.classList.toggle("dis_block")
        part_2_3.classList.toggle("dis_none")
        
    }
    if(cnt%4 == 3) {
        part_2_4.classList.toggle("dis_block")
        part_2_4.classList.toggle("dis_none")
        
    }
    var selected = document.querySelector(".part_2__"+(cnt%4));
    selected.style="opacity: 1;";
    var selected_p = document.querySelector(".part_2__"+(cnt%4)+ "_p");
    selected_p.classList.replace("dis_none","dis_block");
    document.querySelector(".line"+cnt%4).classList.toggle("ani");

    if(cnt>=1){
        cnt--
        var not_selected = document.querySelector(".part_2__"+cnt%4)
        not_selected.style="opacity: 0.4;"
        var not_selected_p = document.querySelector(".part_2__"+(cnt%4)+ "_p")
        not_selected_p.classList.replace("dis_block","dis_none")
        document.querySelector(".line"+cnt%4).classList.toggle("ani");
        cnt++
    }
    cnt++;
    if(cnt%4 == 0) {
        part_2_1.classList.toggle("dis_block")
        part_2_1.classList.toggle("dis_none")
        
    }
    if(cnt%4 == 1) {
        part_2_2.classList.toggle("dis_block")
        part_2_2.classList.toggle("dis_none")
        
    }
    if(cnt%4 == 2) {
        part_2_3.classList.toggle("dis_block")
        part_2_3.classList.toggle("dis_none")
        
    }
    if(cnt%4 == 3) {
        part_2_4.classList.toggle("dis_block")
        part_2_4.classList.toggle("dis_none")
        
    }
    
    


},20000);
var num =0;
setInterval(() => {
    // num %= 5;
    var num2 = num +1;
    
    document.querySelector(".part_5_img"+ num%5).classList.toggle("dis_none");
    // document.querySelector(".part_5_img"+ num%5).style="transition: 2s ease-in-out;";
    document.querySelector(".part_5_img"+ num%5).classList.toggle("dis_block");
    document.querySelector(".part_5_img"+ num2%5).classList.toggle("dis_none");
    document.querySelector(".part_5_img"+ num2%5).classList.toggle("dis_block");
    // document.querySelector(".part_6_img"+ num%12).classList.toggle("dis_none");
    // document.querySelector(".part_6_img"+ num%12).classList.toggle("dis_block");
    // document.querySelector(".part_6_img"+ num2%12).classList.toggle("dis_none");
    // document.querySelector(".part_6_img"+ num2%12).classList.toggle("dis_block");
    if(num%12 != 0) {
        document.querySelector(".part_6_imgs").style="transform: translateY(-"+(num%12)*600+"px);transition: 0.7s ease-in-out;";
    }
    else {
        document.querySelector(".part_6_imgs").style="transform: translateY(-"+(num%12)*600+"px)";
    }
    num++;
    


},2000)
loader = document.querySelector(".loader");
// window.onload= () => {
//     // loader.style="opacity:1"

//     setTimeout(() => {
//         loader.style="opacity:0"
//     },3000)
// }
document.querySelector(".but").addEventListener("click",drop_down);
function drop_down() {
    document.querySelector(".nav_drop_down").classList.toggle("op_0")
}