"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function MarsAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setAudioData = () => {
        setDuration(audio.duration);
      };
      const setAudioTime = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener("loadedmetadata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);

      // Default duration based on the image provided: 01:13
      if (isNaN(audio.duration) || !audio.duration) {
        setDuration(73); // 1 minute 13 seconds
      }

      return () => {
        audio.removeEventListener("loadedmetadata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
      };
    }
  }, []);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changeRange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const toggleMute = () => {
    const prevValue = isMuted;
    setIsMuted(!prevValue);
    if (audioRef.current) {
      audioRef.current.muted = !prevValue;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
      setIsMuted(value === 0);
    }
  };

  return (
    <div className="rounded-xl w-full bg-[#0c2357] p-6 sm:p-8 flex flex-col gap-6 text-white overflow-hidden shadow-lg relative">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Change with actual audio URL
        preload="metadata"
      />
      <div>
        <h3 className="text-2xl sm:text-3xl font-black mb-1">Mars STT Bandung</h3>
        <p className="text-sm tracking-widest text-[#a5b4fc] uppercase">
          BY DOROTHY I. MARX
        </p>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 mt-2">
        <button
          onClick={togglePlayPause}
          className="focus:outline-none flex-shrink-0"
        >
          {isPlaying ? (
            <Pause fill="currentColor" size={28} />
          ) : (
            <Play fill="currentColor" size={28} />
          )}
        </button>

        {/* Playback bar */}
        <div className="flex-1 flex items-center group">
          <input
            type="range"
            ref={progressBarRef}
            onChange={changeRange}
            min={0}
            max={duration || 73} // Fallback to 73s if NaN
            value={currentTime}
            className="w-full h-1.5 bg-white/30 rounded-full appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
            style={{
              background: `linear-gradient(to right, white ${(currentTime / (duration || 73)) * 100
                }%, rgba(255,255,255,0.3) ${(currentTime / (duration || 73)) * 100}%)`,
            }}
          />
        </div>

        {/* Time */}
        <div className="text-sm font-medium tabular-nums tracking-wide flex-shrink-0">
          {calculateTime(duration || 73)}
        </div>

        {/* Volume */}
        <div className="hidden sm:flex items-center gap-3 w-32 flex-shrink-0">
          <button onClick={toggleMute} className="focus:outline-none">
            {isMuted || volume === 0 ? (
              <VolumeX size={20} />
            ) : (
              <Volume2 size={20} />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-full h-1.5 bg-white/30 rounded-full appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
            style={{
              background: `linear-gradient(to right, white ${(isMuted ? 0 : volume) * 100
                }%, rgba(255,255,255,0.3) ${(isMuted ? 0 : volume) * 100}%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
