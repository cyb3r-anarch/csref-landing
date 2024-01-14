import React, {FormEvent, useState} from 'react'
import data from '../utils/data.json'

interface WaitlistModalProps {
    curTheme: string;
    onClose: () => void;
}

function WaitlistModal({ curTheme, onClose }: WaitlistModalProps ) {
    
    const themeObject = data.find(obj => obj[curTheme]);
    const text = themeObject[curTheme].waitlistModalText;
    
    const [email, setEmail] = useState('');
  
    return (
        <div id="mc_embed_signup">
        <form action="https://gmail.us17.list-manage.com/subscribe/post?u=27e175d16489a597c2825c08c&amp;id=4b509fdaf8&amp;f_id=004b67e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
            <div id="mc_embed_signup_scroll"><h2>{text}</h2>
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required value={email} onChange={(e) => setEmail(e.target.value)}/></div>
            <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                <div className="response" id="mce-success-response" style={{display: "none"}}></div>
            </div>
        <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <input type="text" name="b_27e175d16489a597c2825c08c_4b509fdaf8" tabIndex={-1} value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
            <div className="optionalParent">
                <div className="clear foot">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe"/>
                    <p style={{margin: "0px auto"}}><a href="http://eepurl.com/iHTkzo" title="Mailchimp - email marketing made easy and fun"></a></p>
                </div>
            </div>
        </div>
    </form>
    </div>
    );
}

export default WaitlistModal