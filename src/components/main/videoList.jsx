import React from 'react';
import VideoItem from './videoItem';

const VideoPlayList = props => {
    return(
        <div className="box__container">
            <div className="list__play-item">
                {
                    props.videos.map((item)=>
                        <VideoItem key={item.id} videoInfo={item.snippet} videoStatistics={item.statistics} />
                    )
                }
            </div>
        </div>
    )
}

export default VideoPlayList;