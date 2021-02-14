import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import MemesMaker from './memesMaker';

export default class Meme extends Component {
  constructor(props) {
  super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeCaption = this.onChangeCaption.bind(this);
    this.onChangeMemeUrl = this.onChangeMemeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      // username: '',
      // caption: '',
      // memeUrl: ''
      memes:[]
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/memes')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            memes: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
        });
      }
    )

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeCaption(e) {
    this.setState({
      caption: e.target.value
    })
  }

  onChangeMemeUrl(e) {
    this.setState({
      memeUrl: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const memes = {
      username: this.state.username,
      caption: this.state.caption,
      memeUrl: this.state.memeUrl
    }

    // console.log(user);

    axios.post('http://localhost:5000/memes', memes)
      .then(res => console.log(res.data));

    this.setState({
        username: '',
        caption: '',
        memeUrl: ''
    })
  }

  render() {
    return (
      <>
    
    <div>
      <div className="header">XMeme</div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
        <div>
          <label>Meme Owner </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
              </div>
              <div > 
          <label>Caption </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.caption}
              onChange={this.onChangeCaption}
              />
        </div>
        <div >
          <label>Meme URL </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.memeUrl}
              onChange={this.onChangeMemeUrl}
              />
        </div>
        <div className="submit-box">
        <input 
          type="submit" 
          value="Submit Meme" 
          className="btn" />
          </div>
        </div>
        
        
        
      </form>

      <div>
        <br></br>
  
        <MemesMaker memes={this.state.memes}/>
        
      </div>

    </div>
    </>
    )
   
  }
}