/**
 * Created by Ucenik on 18.5.2017..
 */
var boja=(Math.random()*1000)+1;
var ddiv=document.getElementById("div1");
function funkc() {
    if (boja>0 && boja<201) {
        ddiv.style.backgroundColor = "blue";
    }
    else if(boja>200 && boja<401) {
        ddiv.style.backgroundColor = "red";
    }
    else if(boja>600 && boja<801) {
        ddiv.style.backgroundColor = "green";
    }
    else
    {
        ddiv.style.backgroundColor="yellow";
    }

}