import './Footer.css';

export function Footer (){
    return (
        <div className="footer">
            <p className='footer__p'>Find me on social media.</p>
            <div className="footer__social">
                <a className='social__sites' rel='noreferrer' target={"_blank"} href="https://www.linkedin.com">Linkedin</a>
                <a className='social__sites' rel='noreferrer' target={"_blank"} href="https://github.com">Github</a>
                <a className='social__sites' rel='noreferrer' target={"_blank"} href="https://instagram.com">Instagram</a>
                <a className='social__sites' rel='noreferrer' target={"_blank"} href="https://facebook.com">Facebook</a>

            </div>
            <p className='powered__by'>Powered by <a rel='noreferrer' target={'_blank'} href='w3.css'>w3.css</a></p>
        </div>
    )
}