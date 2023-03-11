import React , { useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message" style={{color: '#1ab69d', marginTop: '20px', marginBottom: '0'}}>Formulaire bien envoyé, nous reviendrons vers vous au plus vite.</p>
    )
}

const ContactUsForm = () => {
    const [result, setResult] = useState( false );

    const sendEmail = ( e ) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_bxh6md3', 
            'template_1g7v07n', 
            e.target, 
            'user_8Lx0gfI1ktOoeEN8DTV10'
        )
        .then( ( result ) => {
            console.log( result.text );
            }, 
            ( error ) => {
                console.log( error.text );
            }
        );
        e.target.reset();
        setResult( true );
    };

    setTimeout(() => {
        setResult( false );
    }, 5000);
    
    return (
        <form className="rnt-contact-form rwt-dynamic-form" action="" onSubmit={ sendEmail }>
            <div className="row row--10">
                <div className="form-group col-12">
                    <input type="text" name="fullname" placeholder="Votre Nom*" required />
                </div>
                <div className="form-group col-12">
                    <input type="email" name="email" placeholder="Votre e-mail*" required />
                </div>
                <div className="form-group col-12">
                    <input type="text" name="website" placeholder="Votre site internet*" required />
                </div>
                <div className="form-group col-12">
                    <input type="tel" name="phone" placeholder="Votre téléphone*" required/>
                </div>
                <div className="form-group col-12">
                    <textarea name="message" cols="30" rows="4" placeholder="Votre message"></textarea>
                </div>
                <div className="form-group col-12">
                    <button className="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">Envoyer la demande <i className="icon-4"></i></button>
                </div>
                { result ? <div className="form-group"><Result /></div>  : null }
            </div>
        </form>
  )
}

export default ContactUsForm;