import React from 'react'

import PropTypes from 'prop-types'

import styles from './cardscape.module.css'

const Cardscape = (props) => {
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
          <span>Cardscape</span>
        </h1>
        <span className={styles['text2']}>
          A Hyper casual card game where the players goal is too select cards in
          descending order. The timer will keep getting faster meaning you will
          have to keep up! There are many unlockable and purchasable skins for
          the game. There is also a levelling system.
        </span>
      </div>
    </div>
  )
}

Cardscape.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: 'ee175d92-744b-4a75-9b00-195b681605ca',
}

Cardscape.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Cardscape
