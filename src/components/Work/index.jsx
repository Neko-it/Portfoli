import React from 'react'
import Loader from 'react-loaders'
import './index.scss'
import github from '../../asset/images/github.png'
import ue from '../../asset/images/ue.png'
import blender from '../../asset/images/blender.png'
import netbeans from '../../asset/images/netBeans.png'
import vsc from '../../asset/images/visualStudioCode.png'
import as from '../../asset/images/androidstudio.png'

const index = () => {
  const techs =[
    {
        id:1,
        style: 's1',
        src: vsc,
        title:'Visual Studio Code',
    },
    {
        id:2,
        style: 's2',
        src: netbeans,
        title:'NetBeans',
    },
    {
        id:3,
        style: 's3',
        src: as,
        title:'Android Studio',
    },
    {
      id:4,   
      style: 's4',
      src: github,
      title:'GitHub',
  },
    {
        id:5,   
        style: 's5',
        src: ue,
        title:'Unreal Engine',
    },
    {
        id:6,   
        style: 's6',
        src: blender,
        title:'Blender',
    },
   /* {
        id:7,   
        style: 's7',
        src: '',
        title:'FireZilla',
    },*/
    
  ]
  return (
  <>
    <div className='container work-page'>
      <div className='text-zone'>
        <div>
            <h1>SOFTWARE</h1>
            <h3>Programmi utilizzati</h3>
        </div>

        <ul className='elencoS'>
            { 
                techs.map(({id,src,title,style}) => (
                    <li key={id}  className={'casella '+style}>
                      <img src={src} alt=""/>
                      <p id={style}>{title}</p>
                    </li>
                ))
            }
        </ul>

      </div>
    </div>
    <Loader type="ball-clip-rotate-pulse"/>
    </>
  )
}

export default index