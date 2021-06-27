const data=document.getElementById("data"); 
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers=['0','1','2','3','4','5','6','7','8','9']
var letter=""; 
var i =0; 
var shift=0; 
var c=0; 
var entry=""; 
var key =0; 
var empty=document.getElementById("empty"); 

function clicked(element){
data.innerHTML=data.innerHTML+element.innerHTML; 
entry=data.innerHTML;


}

function backspace(element){
data.innerHTML=(data.innerHTML).substring(0,(data.innerHTML).length-1)
}

function Switch(element){
i=0;

if((document.getElementById("a").innerHTML==letters[0])){

while(i<letters.length){
shift = document.getElementById(letters[i]);
letter=shift.innerHTML; 
shift.innerHTML=letter.toUpperCase();
i=i+1; 
} 

}
else{
    
    while(i<letters.length){
        shift = document.getElementById(letters[i]);
        letter=shift.innerHTML; 
        shift.innerHTML=letter.toLowerCase();
        i=i+1; 
        } 
}

}

function clearOutput(){
data.innerHTML=""; 
}

document.addEventListener('keydown', logKey);

function logKey(e) {

 key=e.keyCode;
 key=parseInt(key); 
 key=key-65; 
 if((key>=0 && key<=25)){
 data.innerHTML=data.innerHTML+letters[key];
 }
 else{
     if(key==-33){
         space(); 
     }
     if(key+65==8){
         backspace();
     }

     if((key>=-17 && key<=-8)){
        key=key+65-48; 
        data.innerHTML=data.innerHTML+numbers[key];
     }

     if((key==20-65)){
        Switch();
     }
 }
}

function space(){
    data.innerHTML=data.innerHTML+" "; 
}

function enter(){
    var history=document.getElementById("History");  
    history.innerHTML=history.innerHTML+data.innerHTML+" , "; 
    clearOutput(); 
}

