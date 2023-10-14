import classes from "./FirstTimer.module.scss";

const FirstTimer = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.innerCard}>
        <div className={classes.pictureSection}></div>
        <div className={classes.textSection}>
          <p className={classes.title}>Joining for the first time?</p>
          <p className={classes.text}>Welcome! We are so glad you're here. Please click the button below to get started</p>
          <button onClick={() => window.open("https://mailchi.mp/05de05388202/first-time-welcome", "_blank")}>Get Started</button>
        </div>
      </div>
          <p className={classes.whiteTitle}>For givings and donations, please find account details below:</p>
          <p className={classes.whiteText}>RCCG All Saints' Assembly Grimsby</p>
          <p className={classes.whiteText}>26281058</p>
          <p className={classes.whiteText}>52-21-38</p>
    </div>
  )
}

export default FirstTimer