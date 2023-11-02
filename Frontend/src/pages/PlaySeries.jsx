import  { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../style/trailersMovies.css";
const PlaySeries = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const [videoId, setVideoId] = useState(null);
console.log(videoId);
  useEffect(() => {
    const API_KEY = "AIzaSyATfhV3S-sXWzH-L4kPHnGSk6iqsTKv9c4"; // Reemplaza con tu propia clave de API de YouTube

    const fetchVideoBySearch = async () => {
      try {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            q: title + " official trailer",
            maxResults: 1,
            part: "id",
            type: "video",
          },
        });

        if (response.data.items.length > 0) {
          const videoId = response.data.items[0].id.videoId;
          setVideoId(videoId);
        } else {
          console.log("No se encontraron videos para el título proporcionado.");
        }
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    };

    fetchVideoBySearch();
  }, [title]);

  const handleBack = () => {
    navigate("/series");
  };

  return (
    <div className="container__movie">
      {videoId && (
        <div>
          <div className="container__movie-reproductor">
            <div className="movie__reproductor__btns">
              {/* <button
                className="movie__reproductor-btn"
                onClick={() => setVideoId(null)}
              >
                Mas información
              </button> */}
              <button className="movie__reproductor-btn" onClick={handleBack}>
                Atrás
              </button>
            </div>
            <YouTube
              videoId={videoId}
              className="movie_reproductor"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  cc_load_policy: 0,
                  fs: 0,
                  iv_load_policy: 1,
                  modestbranding: 0,
                  rel: 0,
                  showinfo: 0,
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaySeries;
