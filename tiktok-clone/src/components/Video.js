import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);
	const handleVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
		//if vidplaying
		//stop
		//if not play it
	};
	return (
		<div className="video">
			<video
				onClick={handleVideoPress}
				className="video__player"
				loop
				ref={videoRef}
				src="https://v16m.tiktokcdn.com/5d1c1a8093a212cbd8f236a154d78d06/5f50436f/video/tos/useast2a/tos-useast2a-ve-0068c001/d6b1ece81f794eb2a73c8cd1d612b87e/?a=1233&br=3222&bt=1611&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200902191413010190186044022150B4&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzxxaGxkNzU3djMzZzczM0ApZjo2ZmloNDxoN2c5NjxpOGdwbS1tbmdkcDZfLS0wMTZzc2MzYTZhLWItLi1iLjExYGA6Yw%3D%3D&vl=&vr="
			></video>
			<VideoFooter />
			{/*videoSide*/}
		</div>
	);
}

export default Video;
