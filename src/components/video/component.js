import React from "react"
import PropTypes from "prop-types"

import { video } from "./styles.module.scss"

const Video = ({ youtube_id }) => {
  return (
    <div className={video}>
      <iframe
        width="560"
        height="315"
        title={youtube_id}
        src={`https://www.youtube.com/embed/${youtube_id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

Video.propTypes = {
  /**
   * ID of the video. Currently only YouTube videos are supported.
   */
  youtube_id: PropTypes.string
}

Video.defaultProps = {}

export default Video
