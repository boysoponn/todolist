import React, { Component } from 'react';
import Homepage from './components/homepage';
import { connect } from 'react-redux';
import {savedata} from './components/actions';
import _ from 'lodash';

class App extends Component {
  state = {
  };
  componentDidMount(){
    let data = localStorage.getItem("data");
    if(data!==null){
    let g = JSON.parse(data);
    this.props.dispatch(savedata(g)); 
   
    }
  }

  render() {
    return (
      <div> 
        <Homepage/>
      </div>
    );
   }
  }
  const mapStateToProps = state => ({
    store: state.savedata 
  })
  export default connect(mapStateToProps)(App);

