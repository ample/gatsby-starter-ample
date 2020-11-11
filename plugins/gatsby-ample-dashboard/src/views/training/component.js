import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"

const TrainingView = () => {
  const videoQuery = useStaticQuery(graphql`
    {
      adminTrainingVideos {
        videos {
          title
          embed_url
          description
        }
      }
    }
  `)

  const videos = get(videoQuery, "adminTrainingVideos.videos") || []

  return (
    <>
      <h1>Training Videos</h1>
      <div>
        {videos.map((video, idx) => (
          <div key={idx}>
            <h2>{video.title}</h2>
            <div style={{ position: "relative", paddingBottom: "62.5%", height: "0" }}>
              <iframe
                src={video.embed_url}
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen={true}
                style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                title={video.title}
              ></iframe>
            </div>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TrainingView
