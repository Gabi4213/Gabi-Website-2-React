import React from 'react'

import PropTypes from 'prop-types'

import styles from './task-surgeon.module.css'

const TaskSurgeon = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className={styles['image']}
      />
      <div className={styles['container']}>
        <h1 className={styles['text']}>
          <span>Task Surgeon</span>
        </h1>
        <span className={styles['text2']}>
          Task Surgeon is a surgery style game. You as the player need to
          complete multiple operations throughout the game. As you progress
          through surgeries, you have to delve deeper and deeper into the
          person. Can you complete all surgeries without failing ?
        </span>
      </div>
    </div>
  )
}

TaskSurgeon.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '393f7b58-21ba-4ffd-a6d5-a9e50f5c13ba',
}

TaskSurgeon.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default TaskSurgeon
