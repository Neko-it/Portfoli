import React from 'react'
import Loader from 'react-loaders'
import './index.scss'
const index = () => {
  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Contatto</h1>
                <h3>Se volete contattarmi compila il form,appena possibile vi rispondero </h3>
                <form action="mailto:frigo.matteo.90@gmail.com" method="GET">
                    <ul>
                        <li>
                    <input type="text" name='user_name' placeholder='Nome*' required/>
                    </li>
                    <li>
                    <input type="email" name='user_email' placeholder='Email*' required/> 
                    </li>
                    <li>
                    <input type="subject" name='user_subject' placeholder='Oggetto'/> 
                    </li>
                    <li>
                    <textarea name='messaggio' placeholder='Messaggio*' required/>
                    </li>
                    <input id='send' type="submit" value="Invia"/>
                    </ul>
                </form>
            </div>
        </div>
        <Loader type="ball-clip-rotate-pulse"/>
    </>
  )
}

export default index