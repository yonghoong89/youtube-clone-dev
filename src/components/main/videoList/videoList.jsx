import React from 'react';
import VideoItem from '../videoItem/videoItem';
import style from './videoList.module.css'

const VideoPlayList = props => {
    return(
        <div className={style.box__container}>
            <div className={style.list__playitem}>
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