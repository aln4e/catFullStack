import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
                    <form>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <div>
                          <label>Color</label>
                          <br />
                          <input type='text' />
                        </div>
                        <div>
                          <label>Breed</label>
                          <br />
                          <input type='text' />
                        </div>
                        <div>
                          <label>Gender</label>
                          <br />
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                        <div>
                          <label >Habitat</label>
                          <br />
                          <select>
                            <option>Inside</option>
                            <option>Outside</option>
                            <option>Wildcat</option>
                          </select>
                        </div>
                        <div>
                          <label>Personality</label>
                          <br />
                          <input type='text' />
                        </div>
                        <div>
                          <label>Age</label>
                          <br />
                          <input type='number' />
                        </div>
                        <div>
                          <br />
                          <input type='submit' value='Submit' className = 'btn btn-primary' />
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
