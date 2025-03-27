import React , { useState,useRef } from 'react'
import no_roy from "./videos/no_roy.mp4"
import with_roy from "./videos/with_roy.mp4"
import play from "./svg/play.svg"
import pause from "./svg/pause.svg"
import musicOn from "./svg/music-on.svg"
import musicOff from "./svg/music-off.svg"
import mute from "./svg/mute.svg"
import unmute from "./svg/unmute.svg"
import stop from "./svg/stop.svg"
import "./brush.css"

const BrushTeeth = () => {

    const [isMuted,setIsMuted] = useState(true)
    const [isPlaying,setIsplaying] = useState(true)
    const [musicIsOn,setMusicIsOn] = useState(false)
    const videoRef = useRef(null)

    
    const addMusic = ()=>{
        if(videoRef.current){

            const currentTime = videoRef.current.currentTime
            videoRef.current.pause()
            setMusicIsOn(!musicIsOn)
            videoRef.current.currentTime = currentTime
            videoRef.current.play()

        }
    }

    const stopButton = ()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
    }

    const muteButton = ()=>{
        if(videoRef.current){
            if(videoRef.current.muted) videoRef.current.muted = false
            else videoRef.current.muted = true
        }
        setIsMuted(!isMuted)
    }

    const playVideo = () => {
        if(videoRef.current){
            if (videoRef.current.paused) videoRef.current.play()
            else videoRef.current.pause()
            setIsplaying(!isPlaying)
        }
    }

    return (
        <article className="BrushTeeth">
            <video
                autoPlay
                ref={videoRef}
                muted={isMuted}
                loop id="myVideo"
                src={musicIsOn?with_roy:no_roy}
                onClick={playVideo}
                ></video>
            {!isPlaying&&<div
                className="pause"
                onClick={playVideo}
            >
                <img
                    src={pause}
                    alt="pause"/>
            </div>}
            <nav>
                <button onClick={playVideo}>
                    <img
                        src={isPlaying?pause:play}
                        alt={isPlaying?"pause": "play"}/>
                </button>
                <button onClick={muteButton}>
                    <img src={isMuted?mute:unmute} alt="mute"/>
                </button>
                <button onClick={addMusic}>
                    <img src={musicIsOn?musicOn:musicOff} alt="musicOn"/>
                </button>
                {/* <button onClick={stopButton}>
                    <img src={stop} alt="stop"/>
                </button> */}
            </nav>
        </article>
    )
}
 
export { BrushTeeth }