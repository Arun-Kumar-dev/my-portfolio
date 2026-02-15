import '../CSS/Contact.css'
import Email_icon from '../assets/Email-icon.svg'
import Call_icon from '../assets/Call-icon.svg'
import Location_icon from '../assets/Location-icon.svg'
 
const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className="contact-tittle">
                <h1>Get in touch</h1>
                <img src="" alt="" />
            </div>
            <div className="contact-section">
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>I’m always open to discussing new projects, job opportunities, 
                        or collaborations. If you have an idea or want to work with me, feel free to contact me.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={Email_icon} alt="" /> <a href='mailto:arunkumar24dev@gmail.com'>arunkumar24dev@gmail.com</a>
                        </div>
                        <div className="contact-detail">
                            <img src={Call_icon} alt="" /> <a href='tel:+919345648994'>+91-9345648994</a>
                        </div>
                        <div className="contact-detail">
                            <img src={Location_icon} alt="" /> <a>Madurai, Tamilnadu, india</a>
                        </div>
                    </div>
                </div>
                <form action="" className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" placeholder='Enter your message' rows="8"></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact