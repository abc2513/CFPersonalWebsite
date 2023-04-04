import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
export default withRouter(class TopMenuItem extends Component {
  render() {
    return (
        <div 
            style={{float:'right',height:'45.8px',display:'inline-block',fontSize:'16px',color:'#10239e',fontFamily:' Copperplate,Papyrus'}}
            >
            <div style={{display:'inline-block',margin:'10px',marginRight:'25px'}}>
                {this.props.children||'item'}
            </div>
        </div>
    )
  }
})
