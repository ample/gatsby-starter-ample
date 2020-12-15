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
    <div className={styles.training_view}>
      <div className={styles.intro}>
        <h1>Training Videos</h1>
        <p>A list of videos to help you navigate your site and make it awesome!</p>
      </div>
      <div className="container">
        <div className={styles.video_grid}>
          {videos.map((video, idx) => (
            <TrainingVideo key={idx} {...video} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrainingView
