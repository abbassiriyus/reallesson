import React, { Component } from 'react'
import './Login.css'
import img from "./img/logo.png"
export default class Login extends Component {
  render() {
    return (
        <div className="asosiy">
        <div className="logo">
        <img src={img} alt="" />
        <img src="" alt="" className="katta" />
        </div>
        <div className="form">
            <div className="all_button">
                <button>Вход</button>
                <button>Регистрация</button>
            </div>
            <div className="asos_form">
<div className="login"></div>
<div className="registratsiya"></div>
            </div>
        </div>
    </div>
    )
  }
}
