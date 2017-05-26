import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import Kitties from './Kitties';


class CatIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentWillMount(){
    let catIndexState = this
    const params = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }
    fetch("http://localhost:4000/cat_index", params).then(function(response){
  if(response.status === 200){
    response.json().then(function(body){
      catIndexState.setState({
        cats: body.cats
      })
    })
  }

}).catch(function(error){
  catIndexState.setState({
    message: 'there was an error: ' + error.message
  })
})

  }
  renderCats(){
    let renderedCats = []
    for(var i=0; i < this.state.cats.length; i++){
      let catId = "cat-" + i;
      renderedCats.push(
        <Kitties key={catId} cat={this.state.cats[i]} />
      )
    }
    return renderedCats
  }

  render(){
    return(
      <div className='container'>
        {/* <div className='row'> */}
          {/* <div className='col-xs-6 col-xs-offset-3'> */}
            {/* <div className='panel'> */}
              {/* <div className='panel-body'> */}
                <div className="catLink">
                <Link to={`/catadd`}> ADD CAT</Link>
              </div>
                {this.renderCats()}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    )
  }
}

export default CatIndex
