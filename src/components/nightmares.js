import React from 'react'

import PropTypes from 'prop-types'

import styles from './nightmares.module.css'

const Nightmares = (props) => {
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
          <span>Nightmares</span>
        </h1>
        <span className={styles['text2']}>
          Puzzle, Platformer game where you the player is stuck in a nightmare.
          The main mechanic of the game is the ability of comparing object to
          one another. For example making objects smaller, larger or equal to
          each other depending on its original size.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
      </div>
    </div>
  )
}

Nightmares.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '64ec1c8f-8979-4f6d-bed2-a55d80468874',
  title: 'Nightmares',
  description:
    'Puzzle Pplatformer game that takes place in the players nightmare. The Main mechanic of the game is altering the size of objects by comparing them to one another. This allows objects to get smaller, larger or equal to the object selected.',
}

Nightmares.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Nightmares
