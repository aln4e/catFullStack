import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      cat: {
        color: "",
        breed: "",
        gender: "",
        habitat: "",
        personality: "",
        age: ""
      }
    }
  }

//e is the click
//target is where you click/type
//attribute refers to the name of that input which should match the state field
  handleChange(e){
    const target = e.target
    const attribute = target.name
    this.state.cat[attribute] = target.value
    this.setState({cat:this.state.cat})
  }

  handleSubmit(e, attributes){
    //the submit button collects all of the data from the inputs and POSTS it to the server via JSON so it must be STRINGIFY-ed
    const params = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    }

    e.preventDefault()

    fetch('http://localhost:4000/create_cat', params).then((response)=>{
      //First, check that the response status is 200 (successful) before parsing the response as JSON.
      if(response.ok){
        //The response of a fetch() request is a Stream object, which means that when we call the json() method, a Promise is returned since the reading of the stream will happen asynchronously.
        response.json().then((body)=>{
          //set the state with the parsed JSON
          this.setState({cat: body.cat})
        })
      }else{
        console.log("error!")
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Cat World!</h2>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-6 col-xs-offset-3'>
              <div className='panel'>
                <div className='panel-body'>
                  <h3>Add a Cat</h3>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='row'>
                      <div className='col-xs-12'>

                        <div>
                          <label>Color</label>
                          <br />
                          <input
                          type='text'
                          name='color'
                          value={this.state.cat.color}
                          onChange={this.handleChange.bind(this)}
                          />
                        </div>

                        <div>
                          <label>Breed</label>
                          <br />
                          <input
                          type='text'
                          name='breed'
                          value={this.state.cat.breed}
                          onChange={this.handleChange.bind(this)}
                          />
                        </div>

                        <div>
                          <label>Gender</label>
                          <br />
                          <select name='gender' value={this.state.cat.gender} onChange={this.handleChange.bind(this)}>
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>

                        <div>
                          <label>Habitat</label>
                          <br />
                          <select name='habitat' value={this.state.cat.habitat} onChange={this.handleChange.bind(this)}>
                            <option></option>
                            <option>Inside</option>
                            <option>Outside</option>
                            <option>Wildcat</option>
                          </select>
                        </div>

                        <div>
                          <label>Personality</label>
                          <br />
                          <input
                          type='text'
                          name='personality'
                          value={this.state.cat.personality}
                          onChange={this.handleChange.bind(this)}
                          />
                        </div>

                        <div>
                          <label>Age</label>
                          <br />
                          <input
                          type='number'
                          name='age'
                          value={this.state.cat.age}
                          onChange={this.handleChange.bind(this)}
                          />
                        </div>

                        <div>
                          <br />
                          <input
                          type='submit'
                          value='Submit'
                          className = 'btn btn-primary' />
                        </div>

                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
