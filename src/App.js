import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="App">
          <Person />
      </div>
    )
  }
}

class Person extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      show:false,
      person:{
        fullName:'Mohamed Khefifi',
        bio:'Im mern stack developer', 
        imgSrc:'https://via.placeholder.com/512', 
        profession:'Developer'
      }
    }
  }

  handleClick() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.setState({show:!this.state.show})
  }

  render(){
    return(
      <div className='wraper'>
        <div>
        <button onClick={()=>this.handleClick()}>{this.state.show?'Hide user card':'Show user card'}</button>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
        {this.state.show?<div className='card' style={{background:'#c3c3c3', borderRadius:'5px', width:'fit-content',display:'flex', padding:'5px',gap:'10px'}}>
          <div style={{width:'180px', overflow:'hidden'}}>
            <img style={{objectFit:'cover',width:'100%'}} src={this.state.person.imgSrc} alt="img" />
          </div>
          <div style={{display:'flex', flexDirection:'column',gap:'5px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
              <p style={{fontWeight:'bold'}}>Nom:</p>
              <p>{this.state.person.fullName}</p>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
              <p style={{fontWeight:'bold'}}>Bio:</p>
              <p>{this.state.person.bio}</p>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
              <p style={{fontWeight:'bold'}}>Profession:</p>
              <p>{this.state.person.profession}</p>
            </div>
          </div>
        </div>:null}
      </div>

      
    )
  }

  componentDidMount() {
    this.timerId = setInterval(()=>{
      this.setState({date:new Date()})
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

}

export default App


