import React, { Component } from 'react'
import { AppstoreOutlined,UserOutlined,TabletOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import PubSub from 'pubsub-js'
import TopMenuItem from './TopMenuItem';
let current=0
export default withRouter(class TopMenu extends Component {
  state={pageList:[]}
  render() {
    let items=[]
    const onClick = (e) => {
      this.props.history.push('/page/'+e.key+'/index.md')
      this.setState({current:e.key})
    };
    if(this.state.pageList!=[]){
      items=this.state.pageList.map(
        (item)=>{
          return {
            label: item.title,
            key: item.key,
            icon: <AppstoreOutlined />,
          }
        }
        )
      }
    return (
      <div>
        <div 
          style={{float:'left',height:'45.8px',display:'inline-block',fontSize:'25px',color:'#85a5ff',fontFamily:'Papyrus'}}
          onClick={()=>this.props.history.push('/index')}>
          cfPersonalWebsite
        </div>
        <TopMenuItem><span onClick={()=>this.props.history.push('/about')}><UserOutlined/>关于CFPW</span></TopMenuItem>
        <TopMenuItem><span onClick={()=>{/*window.location.href='./mobile.html'*/}}><TabletOutlined/>移动端</span></TopMenuItem>
        
        
          <Menu 
          onClick={onClick} 
          selectedKeys={[current]} 
          mode="horizontal" 
          items={items} 
        />
      </div>
      )
  }
  componentDidMount(){
    this.getPageList()
  }
  getPageList(){
    axios.get('./data/catalogue/page.json')
    .then((response)=>{
      //console.log(response.data)
      this.setState({'pageList':response.data})
      PubSub.publish("pages",response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
})