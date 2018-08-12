import React, {Component} from 'react';
import {NavBar,WingBlank,InputItem,Radio,List,WhiteSpace,Button} from 'antd-mobile';

import Logo from '../../components/logo/logo'


// 注册路由界面
export default class Register extends Component {
  // 初始化状态
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen'
  }

  toregister = () => {
    console.log(this.state)
  }
  handleChange = (name,val) => {
    this.setState({
      [name]: val
    })
  }
  tologo = () =>{
    this.props.history.replace('/login')
  }
  render(){
    const {type} = this.state;
    return (
      <div>
        <NavBar>用户注册</NavBar>
        <WhiteSpace/>
        <Logo/>
        <WhiteSpace/>
        <WingBlank>
          <List>
            <InputItem type='text' placeholder='请输入用户名'
                       onChange={(val) => this.handleChange('username',val)}>用&nbsp;&nbsp;户&nbsp;名&nbsp;: </InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码'
                       onChange={(val) => this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;: </InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入确认密码'
                       onChange={(val) => this.handleChange('password2',val)}>确认密码&nbsp;: </InputItem>
            <WhiteSpace/>
            <List.Item>
              <span>用户类型&nbsp;: </span>&nbsp;&nbsp;
              <Radio checked={type==='laoban'} onChange={() => {this.handleChange('type','laoban')}}>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='dashen'} nChange={() => {this.handleChange('type','dashen')}}>大神</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type='primary' onClick={this.toregister}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.tologo}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}