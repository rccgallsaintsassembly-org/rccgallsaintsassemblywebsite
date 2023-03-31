import Header from 'components/common/Header/Header'
import classes from './WelcomeSection.module.scss'

function WelcomeSection() {
  return (
    <div className={classes.welcomeContainer}>
      <Header />
      <div className={classes.welcomeBlock}>
        <p className={classes.title}>Welcome to church!</p>
        <p className={classes.secondText}> It’s a great privilege to welcome you to The Redeemed Christian Church of God (RCCG) All Saints' Assembly Grimsby.</p>
        <p className={classes.secondText}> We look forward to welcoming you to one of our services.</p>
        <button >
          <a href='#about'>Get Started</a>
        </button>
      </div>
    </div>
  )
}

export default WelcomeSection