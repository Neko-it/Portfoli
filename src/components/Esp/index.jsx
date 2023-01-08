import React from 'react'
import './index.scss'

import html from '../../asset/images/html.png'
import css from '../../asset/images/css.png'
import javascript from '../../asset/images/javascript.png'
import tailwind from '../../asset/images/tailwind.png'
import reactImage from '../../asset/images/react.png'
import python from '../../asset/images/python.png'
import java from '../../asset/images/java.png'
import mdb from'../../asset/images/mongoDB.png'
import mysql from'../../asset/images/mysql.jpg'
import Loader from 'react-loaders'

const index = () => {
  const techs =[
    {
        id:1,
        style: 'C1',
        src: html,
        title:'HTML',
    },
    {
        id:2,
        style: 'C2',
        src: css,
        title:'CSS',
    },
    {
        id:3,
        style: 'C3',
        src: javascript,
        title:'JavaScript',
    },
    {
        id:4,
        style: 'C4',
        src: reactImage,
        title:'React',
    },
    /*{
        id:5,
        style: 'C5',
        src: tailwind,
        title:'Tailwind',
    },*/
    {
        id:6,
        style: 'C6',
        src: java,
        title:'Java',
    },
    {
        id:7,   
        style: 'C7',
        src: python,
        title:'Python',
    },
    {
        id:8,   
        style: 'C8',
        src: mysql,
        title:'My SQL',
    },
    {
        id:9,   
        style: 'C9',
        src: mdb,
        title:'MongoDB',
    },
  ]

  return ( 
    <>
    <div className='container esp-page'>
      <div className='text-zone'>
        <div>
            <h1>Esperienze</h1>
            <h3>Linguaggi di programmazione</h3>
        </div>

        <div className='elenco'>
            { 
                techs.map(({id,src,title,style}) => (
                    <div key={id} className={'casella '+style}>
                      <img src={src} alt=""/>
                      <p id={style}>{title}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
    <Loader type="ball-clip-rotate-pulse"/>
    </>
  )
}

export default index