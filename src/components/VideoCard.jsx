import React, { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video,isRow }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  // console.log(isHover);
  //console.log(video);

  // console.log(video);
 // console.log(video.richThumbnail)
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      className={` cursor-pointer ${isRow && 'flex gap-4 items-center'}`}
    >
      {/* fotoğraf kısmı*/}
      <div >
        <img
          src={
            isHover && video.richThumbnail ? video.richThumbnail[video.richThumbnail.length - 1].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          className={`max-w-none rounded-lg w-full ${isRow && 'w-45'}`} 
        />
      </div>
      {/* alt detay alanı*/}
      <div className="flex gap-4 mt-5 items-center">
        <img
          className={`w-14 h-14 rounded-full ${isRow && 'hidden'}`}
          src={
            video.channelThumbnail
              ? video.channelThumbnail[video.channelThumbnail.length - 1].url
              : "/default.png"
          }
          
        />
        
        <div className="text-[#aaa] mb-3 ">
          <h4 className={`font-bold text-white ${isRow && 'line-clamp-1'}`}>{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className={`flex gap-2 ${isRow && 'text-sm gap-1'}`}>
            <p className="line-clamp-1 whitespace-nowrap">{millify(video.viewCount)} görüntüleme </p>
            <p className="whitespace-nowrap">{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
