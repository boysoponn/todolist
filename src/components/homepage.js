import React from 'react';
import { connect } from 'react-redux';
import {savedata} from './actions';
import TextList from './list'
import Popup from './popup'
import List from '@material-ui/core/List';
import Add from '@material-ui/icons/Add';
import '../css/homepage.css'
import _ from 'lodash';

class Homepage extends React.Component {
  state={
    title:"",
    description:"",
    data:[],
    openAdd:false,
    openEdit:false
  }

  handleOpen = name => () => {
    this.setState({ [name]: true });
  };

  handleClose = name => () => {
    this.setState({ [name]: false , title:"",description:""});
  };
  handleCheck  = get=>() => {
    const data = this.props.store;
    data[get._key].check = !get.check;
    const Arr = _.keys(data).reduce((prev, cur) => {
      prev.push({
        _key: cur,
        ...data[cur]
      });
      return prev;     
    }, []); 
  this.props.dispatch(savedata(Arr));
  const save = JSON.stringify(Arr);
  localStorage.setItem('data',save)
  };

  onChange=value=>(e)=>{
    this.setState({
      [value]:e.target.value
    })
  }

   add=()=>{
     const data = this.props.store;
     data.push({title:this.state.title,description:this.state.description,check:false})
     const Arr = _.keys(data).reduce((prev, cur) => {
        prev.push({
          _key: cur,
          ...data[cur]
        });
        return prev;     
      }, []); 
    this.props.dispatch(savedata(Arr));
    const save = JSON.stringify(Arr);
    localStorage.setItem('data',save)
     this.setState({
       openAdd:false,
       title:"",
       description:""
     })
    }

    delete=key=>()=>{
        const data = this.props.store;
        var remove = data.map(function(item) { return item._key; }).indexOf(key);
        data.splice(remove, 1);
        const Arr = _.keys(data).reduce((prev, cur) => {
            prev.push({
              ...data[cur]
            });
            return prev;     
          }, []);   
        this.props.dispatch(savedata(Arr));
        const save = JSON.stringify(Arr);
        localStorage.setItem('data',save)
    }

    edit=data=>()=>{
        this.setState({
            openEdit:true,
            key:data._key,
            title:data.title,
            description:data.description

        })
    }

    ok=()=>{
        const data = this.props.store;
        const key = this.state.key;
        data[key].title = this.state.title;
        data[key].description = this.state.description;
        const Arr = _.keys(data).reduce((prev, cur) => {
            prev.push({
              _key: cur,
              ...data[cur]
            });
            return prev;     
          }, []); 
        this.props.dispatch(savedata(Arr));
        const save = JSON.stringify(Arr);
        localStorage.setItem('data',save)
        this.setState({
            openEdit:false,
            title:"",
            description:""
        })
    }

  render(){
      return (
    <div className="root">
        <Popup
        label="Edit"
        open={this.state.openEdit}
        close={this.handleClose('openEdit')}
        title={this.state.title} 
        onChangeTitle={this.onChange('title')}
        description={this.state.description} 
        onChangeDescription={this.onChange('description')}
        ok={this.ok}
        />
        <Popup
        label="Add"
        open={this.state.openAdd}
        close={this.handleClose('openAdd')}
        title={this.state.title} 
        onChangeTitle={this.onChange('title')}
        description={this.state.description} 
        onChangeDescription={this.onChange('description')}
        ok={this.add}
        />
        <div className="container">
        <List className="textlist">
        <div className="divH1">
        <h1>Reminders</h1>
        <button className="buttonH1" onClick={this.handleOpen('openAdd')} ><Add/></button>
        </div>
      {this.props.store.map((data) =>
        <TextList 
            key={data._key} 
            title={data.title} 
            description={data.description} 
            delete={this.delete(data._key)} 
            edit={this.edit(data)}
            handleCheck={this.handleCheck(data)}
            check={data.check}
            />
      )}
      </List>
      </div>
    </div>
  );
  }
}

const mapStateToProps = state => ({
    store: state.savedata 
  })
  export default connect(mapStateToProps)(Homepage);