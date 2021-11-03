import React from 'react'

import PropTypes from 'prop-types'

import styles from './push-me.module.css'

const PushMe = (props) => {
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
          <span>Push Me If You Can</span>
        </h1>
        <span className={styles['text2']}>
          A 2D platformer where your goal is to push other players into the
          rising lava! Use items to eliminate others while staying alive. Play
          fast paced games with your Friends locally or through Steams remote
          play. Discover new maps and become the best PUSHER out there!
        </span>
      </div>
    </div>
  )
}

PushMe.defaultProps = {
  image_src: '4a568e6c-68c5-481f-bf22-a0af6bfde556',
  image_alt: 'image',
  rootClassName: '',
}

PushMe.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PushMe
