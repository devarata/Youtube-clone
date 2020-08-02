import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard.js'
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="RecommendedVideos__videos">
        <VideoCard
          title="Top 5 Website to learning web design & development"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fsellersessions.com%2Fwp-content%2Fuploads%2F2019%2F04%2FICON-Youtube-channel.png%3Ffit%3D481%252C481%26ssl%3D1&imgrefurl=https%3A%2F%2Fsellersessions.com%2Ficon-youtube-channel%2F&tbnid=h7dzpweVWrCoNM&vet=12ahUKEwiC6fvjmf3qAhULFisKHdozDzsQMygGegUIARDeAQ..i&docid=7yggfeoG4XLFIM&w=481&h=481&q=youtube%20channel%20icon&ved=2ahUKEwiC6fvjmf3qAhULFisKHdozDzsQMygGegUIARDeAQ"
          channelName="React Forever"
          image="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.technotification.com%2Fwp-content%2Fuploads%2F2017%2F06%2FBest-youtube-channels-to-learn-coding-2.jpg&imgrefurl=https%3A%2F%2Fwww.technotification.com%2F2017%2F06%2Flearn-coding-online-youtube-channels.html&tbnid=0DQoP07WcfPGLM&vet=12ahUKEwjvtKS_mf3qAhU9_TgGHV3GAV8QMygPegUIARDKAQ..i&docid=3uUVKc0v3PDbEM&w=1200&h=700&q=youtube%20coding&ved=2ahUKEwjvtKS_mf3qAhU9_TgGHV3GAV8QMygPegUIARDKAQ"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  )
}

export default RecommendedVideos
