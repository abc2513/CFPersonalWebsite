import React, { Component } from 'react'

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <img src="./data/background.jpg" style={{width:'100%'}}/>
        <div style={{margin:'auto',position:'relative',top:'-650px',textAlign:'center',color:'#e6f4ff',fontSize:'20px',fontFamily:'Papyrus',background:'rgba(80,80,80,0.7)'}}>
          <br/>
          <h2>关于CFPW</h2>
          <p>本网站（CFPW）是一款开源的、可复用的个人网站，可部署在静态内容托管平台上（为githubPage设计）</p>
          <p>github地址<a href='https://github.com/abc2513/CFPersonalWebsite' style={{color:'wheat'}}>https://github.com/abc2513/CFPersonalWebsite</a></p>
          <br/>
        </div>
      </div>
    )
  }
}
