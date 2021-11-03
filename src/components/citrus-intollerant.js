import React from 'react'

import PropTypes from 'prop-types'

import styles from './citrus-intollerant.module.css'

const CitrusIntollerant = (props) => {
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
          <span>Citrus Intolerant</span>
        </h1>
        <span className={styles['text2']}>
          A hyper casual mobile game where you need to survive as long as you
          can. You play as a carton of milk that looses health while outside of
          milk. There are unlockable cosmetics as well as a world wide
          leaderboard.
        </span>
      </div>
    </div>
  )
}

CitrusIntollerant.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/ezgif-7-41d8c1f74795-1200w.gif',
}

CitrusIntollerant.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default CitrusIntollerant
