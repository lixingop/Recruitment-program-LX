import React, {Component} from 'react'
import logo from './images/logo.png'
import './logo.less'

export default class Logo extends Component{
  render(){
    return <div className='logo-containers'>
      <img src={logo} alt="logo" className='logo-img'/>
    </div>
  }
}