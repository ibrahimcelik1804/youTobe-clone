import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../utils/getData";

// context oluşturabilmek için hangi metot kullanılır ?       createContext
export const YoutubeContext = createContext();
//context de tutacagimız verileri uygulamaya aktaracak         provider sağlayıcı
export const YoutobeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  // selected her değiştiğinde api den ilgili kategorinin verisini cekeçeğiz
  useEffect(() => {
    setVideos(null);
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      getData(`/${selectedCategory.type}`).then((data) => setVideos(data.data));
    }
    // eger ki seçilen kategorinin tipi category ise o zaman  search istek atacağız
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((data) =>
        setVideos(data.data)
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
