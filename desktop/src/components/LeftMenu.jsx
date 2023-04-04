import React, { Component } from 'react'
import { MailOutlined, SettingOutlined ,AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios';
import dfs from '../js/DepthFirstSearch'

import PubSub from 'pubsub-js'
export default class LeftMenu extends Component {
  state={articleList:[]}
  onClick=(e)=>{
    //console.log(e.key)
    //console.log(dfs(e.key,this.state.articleList))
    this.props.history.push(dfs(e.key,this.state.articleList).file)
  }
  render() {
    let articleList=this.state.articleList
    return (
        <Menu
        onClick={this.onClick}
        style={{ width: 256}}
        mode="inline"
        items={articleList}
      />
    )
  }
  componentDidMount(){
    this.getArticlesList(this.props.match.params.page)
  }
  componentWillReceiveProps(props){
    this.getArticlesList(props.match.params.page)
  }
  getArticlesList(page){
    axios.get('./data/catalogue/'+page+'.json')
    .then((response)=>{
      //console.log(response.data)
      this.setState({'articleList':response.data})
      PubSub.publish("articles",response.data)
    })
    .catch((error)=>{
      //console.log(error)
    })
  }
}
