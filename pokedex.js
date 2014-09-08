var a,b,c,d;
function inicio(){
	a=document.getElementById("poke1");
	b=document.getElementById("poke2");
	c=document.getElementById("poke3");
	d=document.getElementById("ficha");



	a.addEventListener("click",pikachu);
	b.addEventListener("click",pillot);
	c.addEventListener("click",bulbasore);
}


function datos(nombre,elemento,vida,atake){
	this.nom=nombre;
	this.ele=elemento;
	this.vid=vida;
	this.ata=atake;
}


function pikachu(){

		var pikachu=new datos("Pikachu","Electrico",100,60);
		ficha.innerHTML=pikachu.nom+"<br/>"+pikachu.ele+"<br/>"+pikachu.vid+"<br/>"+pikachu.ata;
		document.getElementById("imagen").src="imagen/pik.png";

}
function pillot(){

		var pillot=new datos("Pigoto","Aereo",90,45);
		ficha.innerHTML=pillot.nom+"<br/>"+pillot.ele+"<br/>"+pillot.vid+"<br/>"+pillot.ata;
		document.getElementById("imagen").src="imagen/pill.png";

}
function bulbasore(){

		var bulbasore=new datos("bulbasaur","Planta",90,50);
		ficha.innerHTML=bulbasore.nom+"<br/>"+bulbasore.ele+"<br/>"+bulbasore.vid+"<br/>"+bulbasore.ata;
		document.getElementById("imagen").src="imagen/bul.png";

}