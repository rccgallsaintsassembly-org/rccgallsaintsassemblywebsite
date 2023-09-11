import { useState } from "react"
import classes from "./ContactUs.module.scss"

function ContactUs() {
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName]= useState("")
  const [phoneNumber, setPhoneNumber]= useState("")
  const [email, setEmail]= useState("")
  const [message, setMessage]= useState("")
  const [phoneNumberIsValid, setPhoneNumberIsValid]= useState(true)
  const [emailIsValid, setEmailIsValid]= useState(true)

  const isValidPhoneNumber = (phoneNumber) => {
    let result = (/^(?:\d{11})$/.test(phoneNumber) && phoneNumber.startsWith("0")) || (/^(?:\d{10})$/.test(phoneNumber) && !phoneNumber.startsWith("0"))
    return result
  }

  const isValidEmail = (email) => /(([a-z]+[0-9]*)(-|_|\.)*([a-z0-9]+)*)@+(([a-z]+)\.([a-z]{2,}))$/i.test(email)

  const updatePhoneNumber = (phoneNumber) => {
    setPhoneNumber(phoneNumber)
  }
  const updateEmail = (email) => {
    setEmail(email)
  }
  const emailOnBlur = (email) => {
    setEmailIsValid(email && isValidEmail(email))
  }
  const phoneNumberOnBlur = (phoneNumber) => {
    setPhoneNumberIsValid(phoneNumber && isValidPhoneNumber(phoneNumber))
  }

  const openLink = (link) => {
    window.open(link, '_blank');
  }

  return (
    <div id="contact" className={classes.contactContainer}>
      <div className={classes.formSection}>
        <p className={classes.title}>Get in touch!</p>
        <p className={classes.text}>We would love to hear from you</p>
        <div className={classes.form}>
          <div className={classes.formRow}>
            <div className={`${classes.formGroup}`}>
              <label>First Name</label>
              <input 
                className={`form-control`} 
                value={firstName} 
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className={`${classes.formGroup}`}>
              <label>Last Name</label>
              <input className={`form-control`} 
                value={lastName} 
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div className={`${classes.formGroup}`}>
              <label>Phone Number</label>
              <input 
                className={`form-control ${!phoneNumberIsValid ? 'invalidTextField' : ''}`} 
                value={phoneNumber}
                maxLength={phoneNumber.startsWith("0") ? "11" : "10"}
                onChange={(event) => updatePhoneNumber(event.target.value)}
                onBlur={(event) => phoneNumberOnBlur(event.target.value)}
                onKeyUp={(event) => phoneNumberOnBlur(event.target.value)}
              />
            </div>
            <div className={`${classes.formGroup}`}>
              <label>Email</label>
              <input   
                className={`form-control ${!emailIsValid ? 'invalidTextField' : ''}`} 
                value={email}
                onChange={(event) => updateEmail(event.target.value)}
                onBlur={(event) => emailOnBlur(event.target.value)}
                onKeyUp={(event) => emailOnBlur(event.target.value)}
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <div style={{marginLeft: "0rem"}} className={`${classes.formGroup}`}>
              <label>Message</label>
              <textarea 
                className={`form-control`} 
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>
          <div className={classes.formRow}>
            <button
              disabled={!emailIsValid || !phoneNumberIsValid || !message}
            >
              <a href={`mailto:mosinmiloluwa.o@gmail.com
              ?subject=Message from ${firstName ? firstName : 'Anonymous'} ${lastName ? lastName : 'Anonymous'}
              &body=Email:${email ? email : 'Nil'} \n \t
              PhoneNumber:${phoneNumber ? phoneNumber : 'Nil'} \n \t
              ${message}`}>
                Send message
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={classes.contactSection}>
        <p className={classes.title}>contact information</p>
        <div className={classes.contactInfo}>
          <div className={classes.iconAndText}>
            <i className="fa-solid fa-location-dot"></i>
            <p>Central Hall, Duncombe St, Grimsby. DN32 7EG</p>
          </div>
          <div className={classes.iconAndText}>
            <i className="fa-solid fa-phone"></i>
            <p>+44 7773 455349</p>
          </div>
          <div className={classes.iconAndText}>
            <i className="fa-solid fa-envelope"></i>
            <p>rccgallsaintsassembly@gmail.com</p>
          </div>

        </div>
        <div className={classes.socialRow}>
          <i onClick={() => openLink("https://www.facebook.com/people/Rccg-All-Saints-Assembly-Grimsby/100091277924550/")} className="fa-brands fa-facebook"></i>
          <i onClick={() => openLink("https://www.instagram.com/rccgallsaintsassembly/")} class="fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default ContactUs