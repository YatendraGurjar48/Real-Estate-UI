let togle_nav=document.getElementById("togle-nav");
let togle_menu_btn=document.getElementById("togle_menu_btn");
let flag=0;
togle_menu_btn.addEventListener("click",function(){
    if(flag==0){
        togle_nav.style.display="block";
flag=1;
    }else{
        togle_nav.style.display="none";
flag=0;
    }
   
})