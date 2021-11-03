import React from 'react'

import PropTypes from 'prop-types'

import styles from './zone-g.module.css'

const ZoneG = (props) => {
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
          <span>Zone G</span>
        </h1>
        <span className={styles['text2']}>
          <span>
            Zone G is a game that changes genres as you play it, this means you
            could be playing a first person shooter that suddenly evolves into a
            2d platformer.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
        </span>
      </div>
    </div>
  )
}

ZoneG.defaultProps = {
  image_src: 'e9edff74-289b-4e12-aef6-7f164147f430',
  rootClassName: '',
  image_alt: 'image',
}

ZoneG.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ZoneG
