function fechar_deslizavel(){document.getElementById("deslizavel").style.display = "none"}

var deslizavel = false;

function AbreFechaDeslizavel(){
  deslizavel = !deslizavel;
  if(deslizavel){
    document.getElementById("deslizavel").style.display = "block";
  }
  else{
    document.getElementById("deslizavel").style.display = "none";
  }
}