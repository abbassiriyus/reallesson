import React, { Component } from 'react'
import './Login.css'
import img from "./img/logo.png"
export default class Login extends Component {
   state={
        data:"salom",
        page:1
    } 
   plus=()=>{
   this.setState({page:this.state.page+1})
   }
   minus=()=>{
    if(this.state.page>0){
    this.setState({page:this.state.page-1})}
    }
    render() {
    return (
        <div className="asosiy">
        <div className="logo">
        <img src={img} alt="" />
        <img src="" alt="" className="katta" />
        </div>
{this.state.page}

        <div className="form">
            <div className="all_button">
                <button style={this.state.page===1?{background:'red'}:{background:'aqua'}} onClick={()=>{this.setState({page:1});}} >Вход</button>
                <button style={this.state.page===1?{background:'aqua'}:{background:'red'}}  onClick={()=>{this.setState({page:2})}}>Регистрация</button>
            </div>
            <div className="asos_form">
                {this.state.page===1?(<div className="login">
                    <h1>login</h1>
                    <input type="text" />
                    login</div>):(<div className="registratsiya">registratsiya</div>)}


            </div>
        </div>
    </div>
    )
  }
}
