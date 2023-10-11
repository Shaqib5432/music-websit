console.log("welcome to spotify");

//initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongname = document.getElementById('masterSongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Alpha",filepath: "songs/1.mp3", coverpath: "covers/1.jpg"
    },
  
{songName: "Love Birds", filepath:"songs/2.mp3",coverpath: "covers/2.jpg" },
{songName: "Cielo", filepath:"songs/3.mp3",coverpath: "covers/3.jpg"},
{songName: "DEAF KEV", filepath:"songs/4.mp3",coverpath: "covers/4.jpg"},
{songName: "Different", filepath:"songs/5.mp3",coverpath: "covers/5.jpg"},
{songName: "Saaaiko", filepath:"songs/6.mp3",coverpath: "covers/6.jpg"},
{songName: "Rabba", filepath:"songs/7.mp3",coverpath: "covers/7.jpg"},
{songName: "Angles", filepath:"songs/8.mp3",coverpath: "covers/8.jpg"},
{songName: "Maahiye", filepath:"songs/9.mp3",coverpath: "covers/9.jpg"},
{songName: "Charls", filepath:"songs/10.mp3",coverpath: "covers/10.jpg"},
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  });

//audioElement.play();

//Handle play pause click

masterPlay.addEventListener('click',()=> {
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity =1;

}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
}
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
   

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime =myprogressbar.value*audioElement.duration/100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
    });
  };
  
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      gif.style.opacity =1; // Add 'fa-circle-pause' class here
  
      audioElement.src = `songs/${songIndex + 1}.mp3`; // Use backticks for template literal
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      masterSongname.innerText = songs[songIndex].songName;
    });
  });

  document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`; // Use backticks for template literal
    masterSongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })
  document.getElementById('prev').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex =9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`; // Use backticks for template literal
    masterSongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })