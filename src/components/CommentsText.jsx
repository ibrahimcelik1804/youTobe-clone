import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../utils/getData";
import { FaRegFaceLaughBeam } from "react-icons/fa6";

const CommentsText = () => {
  const [comments, setComments] = useState(null);
  const [searchParams] = useSearchParams();
  const [commentsButton, setCommmentsButton] = useState(false);

  const handleTextAreaClick = () => {
    setCommmentsButton(true);
  };

  const id = searchParams.get("v");

  useEffect(() => {
    getData(`/comments?id=${id}`).then((data) => setComments(data));
  }, [comments]);
  console.log(comments);

  return (
    <div>
      <div>
        <h1 className="font-bold text-xl my-4 ">
        {}  Yorum
        </h1>
      </div>

      <div>
        <div className="flex items-center gap-3 ">
          <div className="bg-cyan-400 w-10 h-10 text-2xl font-bold rounded-full flex justify-center items-center ">
            İ
          </div>
          <div>
            <textarea
              onClick={handleTextAreaClick} // onClick olayı düzeltildi
              className="border-b-2 bg-transparent p-2"
              placeholder="Yorum ekleyin..."
              cols="80"
              rows="1"
            ></textarea>
            {commentsButton && (
              <div className="flex justify-between py-2 ">
                <div>
                  <FaRegFaceLaughBeam />
                </div>
                <div className="flex gap-5 ">
                  <button className=" bg-tranparent hover:bg-[#636363]   px-3 rounded-full">
                    İptal
                  </button>
                  <button className="bg-[#272727] px-3 rounded-full">
                    Yorum yap
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        {/* {{comments.data.map((item, i) => (
          <div key={i} className="yorum card">
            <div><img src={comments.data.a} alt="" /></div>
            <div>
              yorum bilgileri
              <div>
                <p>knal adı</p>
                <p>yorumun ne zaman yapıldığı</p>
              </div>
              <div>
                <p>yorum metni</p>
              </div>
              <div>icon lar ve buton </div>
            </div>
          </div>
        ))}*} */}
      </div>
    </div>
  );
};

export default CommentsText;
