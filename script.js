console.log("Welcome To Spotify");
//Initilize the variables

let songIndex=0;
let audioElement  = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName("songItem"));

let song=[
    {songName:"Darkside", filepath: "songs/Copy of 1.mp3", coverpath:"cover/1.jpg"},
    {songName:"Trap", filepath: "songs/Copy of 2.mp3", coverpath:"cover/2.jpg"},
    {songName:"They man", filepath: "songs/Copy of 3.mp3", coverpath:"cover/3.jpg"},
    {songName:"Rich Kid", filepath: "songs/Copy of 4.mp3", coverpath:"cover/4.jpg"},
    {songName:"Ocean", filepath: "songs/Copy of 5.mp3", coverpath:"cover/5.jpg"},

]
songItem.forEach((element,i )=> {
    element.getElementsByTagName("img")[0].src=song[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=song[i].songName;
    
});

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity= 1;       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity= 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value  * audioElement;
})
const makeAllPlays=()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e) =>{
        console.log(e.target);
        makeAllPlays();        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText=song[songIndex].songName;
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })

})
document.getElementById('next').addEventListener('click', ()=>{
    if  (songIndex>=4){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if  (songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
}
)