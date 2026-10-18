import { useEffect, useState } from "react";
import axios from "axios";
import "./AppleYoutube.css";

const YT_KEY = import.meta.env.VITE_YT_KEY;
// console.log("API key loaded:", Boolean(YT_KEY));

const AppleYoutbube = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        if (!YT_KEY) {
          throw new Error("YouTube API key is missing. Check your .env file.");
        }

        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              channelId: "UCE_M8A5yxnLfW0KghEeajjw",
              maxResults: 9,
              order: "date",
              type: "video",
              key: YT_KEY,
            },
          },
        );

        setYoutubeVideos(response.data.items ?? []);
      } catch (error) {
        console.error(
          "YouTube API error details:",
          error.response?.data ?? error.message,
        );

        setErrorMessage(
          error.response?.data?.error?.message ??
            error.message ??
            "Unable to load YouTube videos.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <p>Loading YouTube videos...</p>;
  }

  if (errorMessage) {
    return <p>Unable to load videos: {errorMessage}</p>;
  }

  return (
    <section className="youtubeVideosWrapper">
      <div className="container">
        <div className="row justify-content-between text-center">
          <div className="col-12">
            <div className="title-wrapper">
              <h1>Latest Videos</h1>
            </div>
          </div>

          {youtubeVideos.map((singleVideo) => (
            <div
              key={singleVideo.id.videoId}
              className="col-sm-12 col-md-6 col-lg-4"
            >
              <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                  <a
                    href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={
                        singleVideo.snippet.thumbnails.high?.url ??
                        singleVideo.snippet.thumbnails.default?.url
                      }
                      alt={singleVideo.snippet.title}
                    />
                  </a>
                </div>

                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a
                      href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {singleVideo.snippet.title}
                    </a>
                  </div>

                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppleYoutbube;
