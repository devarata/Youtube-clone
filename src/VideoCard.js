import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'

function VideoCard({image, title, channelName, views, timestamp, channelImage}) {
  return (
    <div className="videoCard">
      <img src={image} alt="" className="videoCard__thumbnail"/>
      <div className="video__info">
      <Avatar className="videoCard__avatar" alt={channelName} src={channelImage}/>
      <div className="video__text">
        <h4>{title}</h4>
      <div className="video__details">
        <p>{channelName}</p>
        <p>{views} • {timestamp} </p>
      </div>
      </div>

      </div>
    </div>
  )
}

export default VideoCard
