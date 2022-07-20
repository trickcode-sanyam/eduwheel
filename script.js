jQuery(document).ready(function($) {

    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 0);
    });
});
function ncertlang(){
    var go = document.getElementById('ncertgo')
    if (document.getElementById('english').checked){
        go.href="ncertenglish.html";
        document.getElementById('englbl').classList.add("text-red-500");
        document.getElementById("engrad").classList.add("bg-red-500");
        document.getElementById('hinlbl').classList.remove("text-red-500");
        document.getElementById("hinrad").classList.remove("bg-red-500");
    }
    else{
        go.href="ncerthindi.html"
        document.getElementById('englbl').classList.remove("text-red-500");
        document.getElementById("engrad").classList.remove("bg-red-500");
        document.getElementById('hinlbl').classList.add("text-red-500");
        document.getElementById("hinrad").classList.add("bg-red-500");
    }
}
