// const noMusic = "just_humming"
const noMusic = "no_roy"
const withMusic = "with_roy"

let musicOn = false
const video = document.getElementById('myVideo')
const playButton = document.getElementById('playButton')
const muteButton = document.getElementById('muteButton')
const stopButton = document.getElementById('stopButton')
const addMusic = document.getElementById('addMusic')

addMusic.addEventListener("click",()=>{
    const currentTime = video.currentTime
    video.pause()
    if(musicOn){
        video.src = `./videos/${noMusic}.mp4`
        addMusic.innerText = "Add music"
    } else {
        video.src = `./videos/${withMusic}.mp4`
        addMusic.innerText = "Mute music"
    }
    video.currentTime = currentTime
    video.play()
    musicOn = !musicOn
})

stopButton.addEventListener("click",()=>{
        video.pause()
        video.currentTime = 0
        playButton.innerText = "Play"
})

muteButton.addEventListener("click",()=>{
    if(video.muted){
        video.muted = false
        muteButton.innerText = "Mute"
    } else {
        video.muted = true
        muteButton.innerText = "Unmute"
    }
})

const playVideo = () => {
    if (video.paused) {
        video.play()
        playButton.innerText = "Pause"
    } else {
        video.pause()
        playButton.innerText = "Play"
    }
}

video.addEventListener('click', playVideo)
playButton.addEventListener('click', playVideo)