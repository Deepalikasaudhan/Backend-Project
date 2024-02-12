import React from 'react'
import './Footer.css'
function Footer() {
  return (
   <div className="footerMain">
    <div className="footerCantainer">
        <div className="footeraboutdiv">
            <h3>ABOUT US</h3>
            <div className="footerflexcantainer">
                <div>
                <div>
                    <a href="https://www.bluefly.com/pages/contact-us">Contact Us</a>
                </div>
                <div>
                    <a href="https://www.bluefly.com/pages/faq">Frequently Asked Questions</a>
                </div>
                <div>
                     <a href="https://www.bluefly.com/pages/returns">Shipping & Returns</a>                                               
                </div>
                <div>
                    <a href="https://www.bluefly.com/pages/pre-owned-condition-guide">Pre-Owned Guide</a>
                </div>
                <div>
                    <a href="https://www.bluefly.com/pages/partner-with-bluefly">Sell on Bluefly</a>
                </div>
                </div>
                <div>
                    <div>
                        <a href="https://www.bluefly.com/policies/privacy-policy">Privacy Policy</a>
                    </div>
                    <div>
                        <a href="https://www.bluefly.com/policies/terms-of-service">Terms & Conditions</a>
                    </div>
                    <div>
                        <a href="https://www.bluefly.com/pages/ccpa-opt-out">Do not sell my personal information</a>
                    </div>
                    <div>
                        <a href="https://www.bluefly.com/pages/shop-pay-installments-frequently-asked-questions">Shop Pay Installments</a>
                    </div>
                </div>
            </div>
         
            <div className="singupandsave">
                <h3>SIGN UP AND SAVE</h3>
                <div>
                    <p>Subscribe to get exclusive offers on designer brands</p>
                    <div>
                        <input placeholder="Enter your mail" className='placeholder' />
                    </div>
                    <button className='footerbutton'>Subcribe</button>
                </div>
            </div>
        </div>
        </div>
        <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" alt="" className='img-ess' />
        <div className='pera'>
        <p >© 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</p>
        </div>
        
    </div>
  
  )
}

export default Footer