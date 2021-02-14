import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

export default class MemesMaker extends Component {
    constructor(){
        super(...arguments)

    this.state={
        text:""
    }
}
    changeText=(e)=>{
        this.setState({text:e.target.value
        })

    }
    render()
    {
        return(<div>
            {this.props.memes.map(meme => (
            <div className="meme-group">
             <img src={meme.memeUrl} alt="Hehe Hehe Hehe" width="100" height="200"/>
             <br></br>
               <label>Meme Owner </label>
               <input  type="text"
                   required
                   className="form-control"
                   value={meme.username}
                   
                   />
               <label>Caption </label>
               <input  type="text"
                   required
                   className="form-control"
                   contentEditable="true"
                   value={meme.caption}
                   onChange={this.changeText}
                   />
                   <br></br>
                   <div className="edit-box">
               <input 
               type="submit" 
               value="Edit" 
               className="edit-btn" />
               </div>
           </div>
         ))}</div>)
    }
}