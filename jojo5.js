/**
 * Created by Ucenik on 18.5.2017..
 */
var ime=document.getElementById("ime").value;
var godine=document.getElementById("godine").value;
function unesi1() {
    if (ime.length<10):
        alert("nece radit");
    if (godine>99) && (godine<18):
        alert("nece radit");

}