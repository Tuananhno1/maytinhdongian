function maytinhfx500(value){
    document.getElementById("a0").value+=value;}

function tinh() {
    bien = eval(document.getElementById("a0").value);
    document.getElementById("a0").value= bien;
}
function reset() {
    document.getElementById("a0").value= "";
}