import React, { Component } from 'react'
import axios from 'axios'
import 'github-markdown-css/github-markdown-light.css'
import PubSub from 'pubsub-js'
export default class Display extends Component {
  state={article:'',articles:[]}
  componentWillMount(){
    PubSub.subscribe('articles',(msg,data)=>{
      this.setState({"articles":data})
    });
  }
  render() {
    let article_file=this.props.match.params.article
    if(article_file.match(/\.md$/)){
      return (
        <div  className="display height-limit" >
          <iframe src={`./data/article/${this.props.match.params.page}/md-reader.html?mdurl=${article_file}`}
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      )
    }
    if(article_file.match(/\.html$/)){
      return(
        <div  className="display height-limit" >
          <iframe src={`./data/article/${this.props.match.params.page}/${article_file}`}
            width="100%"
            height="100%"
            frameborder="0"
        ></iframe>
        </div>
        
      )
    }
    if(article_file.match(/\.pdf$/)){
      return(
        <div  className="display height-limit" >
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
  // componentDidMount(){
  //   this.getArticle(this.props.match.params.page,this.props.match.params.article)
  // }
  // componentWillReceiveProps(props){
  //   this.getArticle(props.match.params.page,props.match.params.article)
  // }
  // getArticle(page,article){
  //   this.setState({article:''})
  //   axios.get('./data/article/'+page+'/'+article)
  //   .then((response)=>{
  //     //console.log(response.data)
  //     this.setState({article:response.data})
  //   })
  //   .catch((error)=>{
  //     //console.log(error)
  //   })
  // }
}
