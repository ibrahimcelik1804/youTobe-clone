import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import { getData } from "../utils/getData";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { millify } from "millify";
import StringArea from "../components/StringArea";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";
import CommentsText from "../components/CommentsText";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  //1 url den arama (?) parametresini al
  const [searchParams] = useSearchParams();
  //2 ismine göre parametrenin değerine erişme
  const id = searchParams.get("v");
  // console.log(id);
  // 3 id sini bildiğimiz video için api isteği at

  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, []);
   //console.log(video);

  return (
    <div className="detail-page p-5 h-screen overflow-auto  ">
      <div className="">
        <ReactPlayer
          className="rounded"
          width={"100%"}
          height={"50vh"}
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        {!video ? (
          <p>yükleniyor...</p>
        ) : (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            <div className="flex justify-between">
              {/*sol*/}
              <div className="flex items-center gap-2">
                <img
                  className="w-12 h-12 rounded-full"
                  src={
                    video.channelThumbnail &&
                    video.channelThumbnail[video.channelThumbnail.length - 1]
                      .url
                  }
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white text-gray-600 rounded-full px-[6px] mx-[2px] font-bold h-9 transition hover:bg-gray-400">
                  Abone ol
                </button>
              </div>
              {/* sağ*/}
              <div className="flex items-center gap-2  ">
                <div className=" flex items-center bg-[#272727] rounded-full cursor-pointer  ">
                  <div className="flex items-center gap-3 py-2 px-4 border-r">
                    <AiFillLike />
                    <p className="text-gray-400 font-bold">115.205</p>
                  </div>
                  <div className="py-2 px-2 ">
                    <AiFillDislike />
                  </div>
                </div>
                <div className=" flex items-center bg-[#272727] rounded-full cursor-pointer ">
                  <div className="flex items-center bg-[#272727] rounded-full cursor-pointer gap-1 py-2 px-2 ">
                    <PiShareFatLight />
                    <p className="text-gray-400 font-bold ">Paylaş</p>
                  </div>
                </div>
                <div className=" flex items-center bg-[#272727] rounded-full cursor-pointer ">
                  <div className="flex items-center bg-[#272727] rounded-full cursor-pointer gap-1 py-2 px-2">
                    <TfiDownload />
                    <p className=" text-gray-400 font-bold ">İndir</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80 ">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} görümtüleme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>
            <CommentsText />
          </>
        )}
      </div>
      <div className="">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard isRow={true} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
