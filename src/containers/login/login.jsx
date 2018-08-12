import React, {Component} from 'react';
import {NavBar,WingBlank,InputItem,List,WhiteSpace,Button} from 'antd-mobile';

import Logo from '../../components/logo/logo'


// 注册路由界面
export default class Register extends Component {
  // 初始化状态
  state = {
    username: '',
    password: '',
  }

  login = () => {
    console.log(this.state)
  }
  handleChange = (name,val) => {
    this.setState({
      [name]: val
    })
  }
  toregister = () =>{
    this.props.history.replace('/register')
  }
  render(){
    return (
      <div>
        <NavBar>用户登陆</NavBar>
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
            <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;路</Button>
            <WhiteSpace/>
            <Button onClick={this.toregister}>没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}