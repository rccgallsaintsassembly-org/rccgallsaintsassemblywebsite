import classes from "./AboutUs.module.scss"

function AboutUs() {
  return (
    <div className={classes.aboutContainer} id='about'>
      <p className={classes.title}>About Us</p>
      <div className={classes.textContainer}>
        <div className={classes.firstSection}>
          <p className={classes.titleText}>We are </p>
          <p className={classes.titleText}>All Saints' Assembly</p>
          <p className={classes.titleText}> here in Grimsby !</p>
          <div className={classes.innerItems}>
            <div className={classes.iconAndText}>
              <i className="fa-solid fa-location-dot"></i>
              <p>Central Hall, Duncombe St, Grimsby. DN322 7EG</p>
            </div>

          </div>
        </div>
        <div className={classes.secondSection}>
          <p>
          All Saints' Assembly is one of the parishes of The Redeemed Christian Church of God in Grimsby and we align with the mission and vision of RCCG which are:
          </p>
          <div className={classes.innerItems}>
            <div className={classes.iconAndText}>
              <i className="fa-solid fa-check"></i>
              <p>To make heaven.</p>
            </div>
            <div className={classes.iconAndText}>
              <i className="fa-solid fa-check"></i>
              <p> To take as many people with us.</p>
            </div>
            <div className={classes.iconAndText}>
              <i className="fa-solid fa-check"></i>
              <p> To have a member of RCCG in every family of all nations.</p>
            </div>
          </div>
          <p className={classes.emphasis}>
            Our weekly services include
          </p>
          <div className={classes.capsuleDiv}>
            <div className={classes.capsuleAndText}>
              <div className={classes.capsule}>11:00AM</div>
              <p>Sundays</p>
            </div>
            <div className={classes.capsuleAndText}>
              <div className={classes.capsule}>6:00PM</div>
              <p>Wednesdays (Online)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs