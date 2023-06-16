import React from 'react';
import style from '../css_modules/footer.module.css';

const Footer = () => {
    return (
        <footer className="row align-items-center">
            <div className="btn btn-danger col-2 offset-2">
                <p className="text-center m-0">Send me an <span className={`${style.email} text-uppercase`}>email</span></p>
            </div>
        </footer>
    );
};

export default Footer;