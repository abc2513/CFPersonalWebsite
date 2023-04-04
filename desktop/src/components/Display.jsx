import React, { Component } from 'react'
import axios from 'axios'
import {marked} from 'marked'
import 'github-markdown-css/github-markdown-light.css'
import PubSub from 'pubsub-js'
import dfs from '../js/DepthFirstSearch'
export default class Display extends Component {
  state={article:'',articles:[]}
  componentWillMount(){
    PubSub.subscribe('articles',(msg,data)=>{
      this.setState({"articles":data})
    });
  }
  render() {
    let article=this.state.article
    let article_file=this.props.match.params.article
    if(article_file.match(/\.md$/)){
      let md=marked.parse(article)
      return (
        <div style={{width:document.body.clientWidth-256,float:'right'}}>
          <article className="markdown-body"  dangerouslySetInnerHTML={{__html: md}}>
          </article>
        </div>
      )
    }
    if(article_file.match(/\.html$/)){
      return(
        <div style={{width:document.body.clientWidth-265,float:'right',height:document.body.clientHeight-100,marginRight:'10px'}}>
          <iframe src={`./data/article/${this.props.match.params.page}/${article_file}`}
            width="100%"
            height="100%"
            frameborder="1"
        ></iframe>
        </div>
        
      )
    }
    if(article_file.match(/\.pdf$/)){
      return(
        <div style={{width:document.body.clientWidth-256,float:'right',height:document.body.clientHeight-100}}>
          <iframe src={`./lab/pdfJs/generic/web/viewer.html?file=../../../../../data/article/${this.props.match.params.page}/${article_file}`}
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      )
    }
    else return <div>不受支持的文档类型！</div>
    
  }
  componentDidMount(){
    this.getArticle(this.props.match.params.page,this.props.match.params.article)
  }
  componentWillReceiveProps(props){
    this.getArticle(props.match.params.page,props.match.params.article)
  }
  getArticle(page,article){
    this.setState({article:''})
    axios.get('./data/article/'+page+'/'+article)
    .then((response)=>{
      //console.log(response.data)
      this.setState({article:response.data})
    })
    .catch((error)=>{
      //console.log(error)
    })
  }
}
