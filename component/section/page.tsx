import Link from 'next/link'
import Styles from './Section.module.css'

import { RxRocket } from "react-icons/rx";
import { HiMiniLink } from "react-icons/hi2";
import { GoTrophy } from "react-icons/go";

function Section() {
    return (
        <div className={Styles.container}>
            <div className={Styles.home}>
                <div className={Styles.text_home}>
                    <h5>WELCOME TO OUR SITE</h5>
                    <h1>Expert SEO,<br />
                        SEM Services in London</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and</p>
                    <p>Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                    <p>right at the coast of the Semantics, a large language ocean.</p>
                    <div className={Styles.btn_home}>
                        <Link className={Styles.btn_primary_m1} href='/'>How we work</Link>
                        <Link className={Styles.btn_primary_m2} href='/'>Contact us</Link>
                    </div>
                </div>
                <div className={Styles.Images}>
                    <img src="https://preview.colorlib.com/theme/echo/images/hero_1.png.webp" />
                </div>
            </div>
            <div className={Styles.content}>
                <div className={Styles.text_header}>
                    <h5>FEATURES</h5>
                    <h1>Our Features</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and</p>
                    <p>Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                    <p>right at the coast of the Semantics, a large language ocean.</p>
                </div>
                <div className={Styles.card_content}>
                    <div className={Styles.card}>
                        <div className={Styles.icon}>
                            <RxRocket className={Styles.image_icon}/>
                            <span className={Styles.bg_icon}></span>
                        </div>
                        <h5>Marketing Analysis</h5>
                        <p>Far far away, behind the word mountains,</p>
                        <p>far from the countries Vokalia and</p>
                        <p>Consonantia, there live the blind texts.</p>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.icon}>
                            <HiMiniLink className={Styles.image_icon}/>
                            <span className={Styles.bg_icon}></span>
                        </div>
                        <h5>Digital Marketing</h5>
                        <p>Far far away, behind the word mountains,</p>
                        <p>far from the countries Vokalia and</p>
                        <p>Consonantia, there live the blind texts.</p>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.icon}>
                            <GoTrophy className={Styles.image_icon}/>
                            <span className={Styles.bg_icon}></span>
                        </div>
                        <h5>SEO and Backlinks</h5>
                        <p>Far far away, behind the word mountains,</p>
                        <p>far from the countries Vokalia and</p>
                        <p>Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>
            <div className={Styles.about}>
                <div className={Styles.about_image}>
                    <img src="https://preview.colorlib.com/theme/echo/images/about_1.png.webp" alt="" />
                </div>
                <div className={Styles.about_content}>
                    <h5>ABOUT US</h5>
                    <h1>Why our agency?</h1>
                    <p>Separated they live in Bookmarksgrove right at the coast of
                        <br/> the Semantics, a large language ocean.</p>
                        <br/>
                    <p>Far far away, behind the word mountains, far from the<br/>
                     countries Vokalia and Consonantia, there live the blind texts.<br/> Separated they live in Bookmarksgrove right at the coast of<br/>
                     the Semantics, a large language ocean.</p>
                     <br/>
                    <p className={Styles.list}>Behind the word mountains<br/>
                    Bookmarksgrove right at the coast<br/>
                    Semantics, a large language</p>
               <Link className={Styles.Link_about} href='/'>About Us</Link>
               </div>
            </div>
        </div>
    )
}

export default Section