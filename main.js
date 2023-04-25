song1="";
song2="";
song3="";
song4="";
song5="";
song6="";
song1_status="";
song2_status="";
song3_status="";
song4_status="";
song5_status="";
song6_status="";
function preload(){
    song1=loadSound("Bones.mp3");
    song2=loadSound("NO.mp3");
    song3=loadSound("Dil Dhadakne Do.mp3");
    song4=loadSound("Enemy.mp3");
    song5=loadSound("2 Dumb Kids.mp3");
    song6=loadSound("teeth.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function draw(){
if(song1_status==true){
    song1_status=song1.isPlaying();
    song2_status=false;
    song3_status=false;
    song4_status=false;
    song5_status=false;
    song6_status=false;
}
if(song2_status==true){
    song2_status=song1.isPlaying();
    song1_status=false;
    song3_status=false;
    song4_status=false;
    song5_status=false;
    song6_status=false;
}
if(song3_status==true){
    song3_status=song1.isPlaying();
    song2_status=false;
    song1_status=false;
    song4_status=false;
    song5_status=false;
    song6_status=false;
}
if(song4_status==true){
    song4_status=song1.isPlaying();
    song2_status=false;
    song3_status=false;
    song1_status=false;
    song5_status=false;
    song6_status=false;
}
if(song5_status==true){
    song5_status=song1.isPlaying();
    song2_status=false;
    song3_status=false;
    song4_status=false;
    song1_status=false;
    song6_status=false;
}
if(song6_status==true){
    song6_status=song1.isPlaying();
    song2_status=false;
    song3_status=false;
    song4_status=false;
    song5_status=false;
    song1_status=false;
}
if(song2_status==false){
    song2.play();
   
 
}
if(song1_status==false){
    song1.play();
    
 
}
if(song3_status==false){
    song3.play();
    
 
}
if(song4_status==false){
    song4.play();
    
 
}
if(song5_status==false){
    song5.play();
   
 
}
if(song6_status==false){
    song6.play();
    
 
}
}