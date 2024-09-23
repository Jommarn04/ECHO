import Styles from './footer.module.css';
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io5";
import { FaPhone, FaLocationDot,FaInstagram  } from "react-icons/fa6";

function Footer() {
  return (
    <div className={Styles.footer}>

      <div className={Styles.header_footer}>
        <div className={Styles.about_cololib}>
          <h5>About Cololib</h5>
          <p>Far far away, behind the word mountains, far from the</p>
          <p>countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className={Styles.icon}>
            <span><IoLogoTwitter/></span>
            <span><FaInstagram/></span>
            <span><FaFacebookF/></span>
          </div>
        </div>

        <div className={Styles.Pages}>
          <h5>Pages</h5>
          <p>Blog</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div className={Styles.Resources}>
          <h5>Resources</h5>
          <p>Blog</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div className={Styles.contact}>
          <h5>Contact</h5>
          <p><MdEmail style={{ margin:'-2px 10px'}}/>info@Cololib</p>
          <p><FaPhone style={{ margin:'-2px 10px'}}/>+1 222 212 3819</p>
          <p><FaLocationDot style={{ margin:'-2px 10px'}}/>43 Raymouth Rd. Baltemoer, London 3910</p>
        </div>
      </div>

      <div className={Styles.text_footer}>
          <p>©2024 Design by Phichitphong Tamsuntai |</p>
      </div>

    </div>
  )
}

export default Footer