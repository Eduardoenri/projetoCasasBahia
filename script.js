function gohome(){
    window.location='form1.html';
}
function save(){
    window.localStorage.setItem('campo1', $('#campo1').val());
}
function load(){
    $('#campo2').val(window.localStorage.getItem('campo1'));
}
