import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"

import styles from "./styles.module.scss"

import TrainingVideo from "../../components/training-video"

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
      <div className="container">
        <div className={styles.video_grid}>
          {videos.map((video, idx) => (
            <TrainingVideo key={idx} {...video} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TrainingView
