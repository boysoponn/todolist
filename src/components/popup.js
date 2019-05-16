import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

});

class AlertDialogSlide extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.close}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
           {this.props.label}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <TextField
                id="outlined-uncontrolled"
                label="Title"
                value={this.props.title}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onChange={this.props.onChangeTitle}
              />
              <TextField
                id="outlined-uncontrolled"
                label="Description"
                value={this.props.description}
                className={classes.textField}
                margin="normal"
                multiline
                rows="4"
                variant="outlined"
                onChange={this.props.onChangeDescription}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={this.props.ok} color="primary">
              OK
            </Button>
            <Button onClick={this.props.close} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

export default withStyles(styles)(AlertDialogSlide);;
