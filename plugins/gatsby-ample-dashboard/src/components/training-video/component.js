import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

const TrainingVideo = ({ description, embed_url, title }) => (
  <div className={styles.training_video}>
    <div className={styles.video_wrapper}>
      <iframe
        src={embed_url}
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen={true}
        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
        title={title}
      ></iframe>
    </div>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
  </div>
)

TrainingVideo.propTypes = {
  description: PropTypes.string,
  embed_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default TrainingVideo
