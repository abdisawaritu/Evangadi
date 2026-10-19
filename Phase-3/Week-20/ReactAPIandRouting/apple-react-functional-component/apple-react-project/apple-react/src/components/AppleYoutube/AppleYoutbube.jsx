import { useEffect, useState } from "react";
import "./AppleYoutube.css";

import axios from "axios";
const Yt_key = import.meta.env.VITE_YT_KEY;

const AppleYoutbube = () => {
  // state to keep the data
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  // kep the api key
  

  // send the request

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: "snippet",
              channelId: "UCxA7AzkI2Sndf8S1G5rSkwQ",
              maxResults: 9,
              order: "date",
              key: Yt_key,

              // evangadi channel id : UCxA7AzkI2Sndf8S1G5rSkwQ
            },
          },
        );
        console.log(response);
        console.log(response.data);

        console.log(response.data?.items);
        // const data = await response.json(); // parse  the json  res to get  the data
        // console.log(data);
        setYoutubeVideos(response.data.items);
      } catch (error) {
        console.log("Error Fetching Videos", error);
      }
    };
    fetchVideos();
    // fetch(
    //   " https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyDMsbPU9hcOX_Se4ga8kRWdDpJ-lFLPeVs",
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     console.log(data.items);

    //     // set the data to the state
    //     setYoutubeVideos(data.items);
    //   })
    //   .catch((error) => {
    //     console.log("Error Fetching from youtube", error);
    //   });
  }, []  );
  // to avoid the   quoates are not end at only when the components mounts
  // console.log(youtubeVideos);

  return (
    <>
      {/* <h1>Apple Latest Videos from Youtube</h1> */}

      {/* Map the data and render it to the    frontend  */}

      {/* <section>
        {youtubeVideos.map((singleVideo) => (
          <div>
            <img
              src={singleVideo.snippet.thumbnails.high.url}
              alt={singleVideo.snippet.title}
            />
            <h1>{singleVideo.snippet.title}</h1>
            <p>{singleVideo.snippet.description}</p>
          </div>
        ))}
      </section> */}

      <section className="youtubeVideosWrapper">
        <div className="container">
          <div className="row  justify-content-between  text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>

            {youtubeVideos?.map((singleVideo, index) => {
              console.log(singleVideo);
              return (
                <div key={index} className="col-sm-12 col-md-6  col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                          target="_blank"
                          rel="noreferrer"
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppleYoutbube;






// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./AppleYoutube.css";

// const YT_KEY = import.meta.env.VITE_YT_KEY;
// // console.log("API key loaded:", Boolean(YT_KEY));

// const AppleYoutbube = () => {
//   const [youtubeVideos, setYoutubeVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         if (!YT_KEY) {
//           throw new Error("YouTube API key is missing. Check your .env file.");
//         }

//         const response = await axios.get(
//           "https://www.googleapis.com/youtube/v3/search",
//           {
//             params: {
//               part: "snippet",
//               channelId: "UCE_M8A5yxnLfW0KghEeajjw",
//               maxResults: 9,
//               order: "date",
//               type: "video",
//               key: YT_KEY,
//             },
//           },
//         );

//         setYoutubeVideos(response.data.items ?? []);
//       } catch (error) {
//         console.error(
//           "YouTube API error details:",
//           error.response?.data ?? error.message,
//         );

//         setErrorMessage(
//           error.response?.data?.error?.message ??
//             error.message ??
//             "Unable to load YouTube videos.",
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   if (loading) {
//     return <p>Loading YouTube videos...</p>;
//   }

//   if (errorMessage) {
//     return <p>Unable to load videos: {errorMessage}</p>;
//   }

//   return (
//     <section className="youtubeVideosWrapper">
//       <div className="container">
//         <div className="row justify-content-between text-center">
//           <div className="col-12">
//             <div className="title-wrapper">
//               <h1>Latest Videos</h1>
//             </div>
//           </div>

//           {youtubeVideos.map((singleVideo) => (
//             <div
//               key={singleVideo.id.videoId}
//               className="col-sm-12 col-md-6 col-lg-4"
//             >
//               <div className="singleVideoWrapper">
//                 <div className="videoThumbnail">
//                   <a
//                     href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img
//                       src={
//                         singleVideo.snippet.thumbnails.high?.url ??
//                         singleVideo.snippet.thumbnails.default?.url
//                       }
//                       alt={singleVideo.snippet.title}
//                     />
//                   </a>
//                 </div>

//                 <div className="videoInfoWrapper">
//                   <div className="videoTitle">
//                     <a
//                       href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {singleVideo.snippet.title}
//                     </a>
//                   </div>

//                   <div className="videoDesc">
//                     {singleVideo.snippet.description}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppleYoutbube;

