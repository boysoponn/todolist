import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import '../css/list.css'
class List extends Component {
  state = {
  };

  
  render() {
    return (
        <div className={this.props.check ?"list":null}>
          <ListItem  key={this.props.key} role={undefined} dense button >
          <Checkbox
            onChange={this.props.handleCheck}
            checked={this.props.check}
            color="primary"
          />
          <ListItemText>
          <p className="title">{this.props.title}</p>
          <p  className="description">{this.props.description}</p>
          </ListItemText>
          <ListItemSecondaryAction>
            <button onClick={this.props.edit} ><Edit/></button>
            <button onClick={this.props.delete}><Delete/></button>
          </ListItemSecondaryAction>
        </ListItem>
        </div>
    );
   }
  }

  export default List;

