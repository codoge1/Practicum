import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Highlighter from 'react-highlight-words'


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });


const dataDetail = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h1">
                Title: {props.data.name}
            </Typography>
            <br/>
            <Typography component="p">
                Application_ID:  {props.data.id}
            </Typography>
            <br/>
            <Typography variant="headline" component="h4">
                Abstract: {props.data.patentAbstract}
            </Typography>
            <br/>
            <Typography variant="title">
                Content
            </Typography>
            <br />
                <Highlighter textToHighlight={props.data.description}
                            searchWords={[props.keyword]}/>
        </Paper>
    )
}



  dataDetail.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(dataDetail);