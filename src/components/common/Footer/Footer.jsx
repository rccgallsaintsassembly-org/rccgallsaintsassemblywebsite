import React from 'react'
import LogoDark from '../svgs/LogoDark/LogoDark'
import classes from './Footer.module.scss'

function Footer() {
  const openLink = (link) => {
    window.open(link, '_blank');
  }
  return (
    <div className={classes.footerContainer}>
      <div className={classes.innerContainer}>
        <LogoDark />
        <div className={classes.iconContainer}>
          <div className={classes.iconItem}>
            <i onClick={() => openLink("https://www.facebook.com/people/Rccg-All-Saints-Assembly-Grimsby/100091277924550/")} className="fa-brands fa-facebook"></i>
          </div>
          <div className={classes.iconItem}>
            <i onClick={() => openLink("https://www.instagram.com/rccgallsaintsassembly/")} class="fa-brands fa-square-instagram"></i>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer