import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../CSS/Footer.css'
import Arun_logo from '../assets/Arun_top_logo.jpeg'
import User_icon from '../assets/User-icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={Arun_logo} alt="" />
                <p>I’m Arun Kumar, a Java Full Stack Developer. I build modern, 
                    responsive, and user-friendly web applications. If you have a project, idea, or opportunity, feel free to contact me.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={User_icon} alt="" />
                    <input type="text" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2026 Arunkumar. All rights reserved.</p>
            <div className="footer-bottom-right">
                <a href="/TermService.html">Term of Service</a>
                <a href="/Privacy.html">Privacy policy</a>
                {/* <p>Term of Service</p>
                <p>Privacy policy</p> */}
                <AnchorLink className='footer-anchor-para' href='#contact'><p>Connect with me</p></AnchorLink>
            </div>
        </div>
    </div>
  )
}

export default Footer