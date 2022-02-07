import { 
    HeartIcon,
    VolumeUpIcon as VolumeDownIcon,
}   from "@heroicons/react/outline";
import {
    FastForwardIcon,
    PauseIcon, 
    PlayIcon,
    ReplyIcon,
    RewindIcon,
    VolumeIcon,
    SwitchHorizontalIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSongInfo from "../hooks/useSongInfo";
import useSpotify from "../hooks/useSpotify";
import spotifyApi from "../lib/spotify";

function Player() {
    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [currentTrackId, setCurrentIdTrack] = 
    useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [volume, setVolume] = useState(50);
    
    const songInfo = useSongInfo();
    // this is a function to fetch the current song

    const fetchCurrentSong = () => {  
        if (!songInfo) {
            spotifyApi.getMyCurrentPlayingTrack().then(data => {
                console.log("Now playing: ", data.body?.item);    
                setCurrentIdTrack(data.body?.item?.id);

                spotifyApi.getMyCurrentPlaybackState().then((data) => {
                    setIsPlaying(data.body?.is_playing);
                });
            });
        }
    }

    useEffect(() => {
        if (spotifyApi.getAccessToken() && !currentTrackId)
    {
        // fetch the song info
        fetchCurrentSong();
        setVolume[50];
    }
},[currentTrackIdState, spotifyApi, session])
    

return (                                                                   //text will be really small on the mobil screen 
        <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
            {/* Left */}
            <div className="flex items-center space-x-4"> 
                <img 
                className="hidden md:inline h-10 w-10"      // as the screen gets bigger you will see this on 
                src={songInfo?.album.images?.[0]?.url}      // the bottom left hand corner.
                alt="" 
                />
                <div>
                    <h3>{songInfo?.name}</h3>
                    <p>{songInfo?.artists?.[0]?.name}</p>
                </div>
            </div>

            {/* Center */}
            <div className="flex items-center justify-evenly">
                <SwitchHorizontalIcon className="button"  />
                <RewindIcon className="button"  />

                {isPlaying ? (
                    <PauseIcon className="button w-10 h-10" />
                )  : (
                    <PlayIcon className="button w-10 h-10" />
                )}

                <FastForwardIcon className="button" />
                <ReplyIcon className="button" />
            </div>
        </div>
    );
}

export default Player;
