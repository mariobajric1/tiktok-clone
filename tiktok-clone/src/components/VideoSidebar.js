import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function VideoSidebar() {
	const [liked, setLiked] = useState(false);
	return (
		<div className="videoSidebar">
			<div className="videSidebar__button">
				<div></div>
			</div>
		</div>
	);
}

export default VideoSidebar;
