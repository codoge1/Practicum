import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Highlighter from 'react-highlight-words'
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import Aux from '../hoc/Aux'
import Button from '@material-ui/core/Button';
import boldClass from './DataDetail.css'



const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    input:{
        border:'1px solid gray',
        borderRadius:'15px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: 300,
        paddingRight: 300,
        },
    button: {
        margin: theme.spacing.unit,
        },
  });


const dataDetail = (props) => {
    const { classes } = props;
    

    const patent = props.patent

    const switchToList = () => {
        props.history.push('/simple/patentsList')
    }

    const switchToGraph = () => {
        props.history.push('/simple/patentsGraph')
    }
    
    const goBack = () => {
        props.history.goBack()
    }

    const goBackToSearch = () => {
        props.history.push('/')
    }

    return (
        <Aux>
        <div className={classes.container}>
        <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h1">
                Title: {patent.name}
            </Typography>
            <br/>
            <Typography component="p">
                Application_ID:  {patent.id}
            </Typography>
            <br/>
            <Typography variant="headline" component="h4">
                Abstract: {patent.patentAbstract}
            </Typography>
            <br/>
            <Typography variant="title">
                Content
            </Typography>
            <br />
            <div className={boldClass}>
            {/* <Highlighter textToHighlight='asfasdas <b>gesadasd</b>'
                        searchWords={[]}/> */}
                {patent.description}
            </div>
        </Paper>
        </div>
        <div>
        {/* <Button className={classes.button} variant="contained" onClick={switchToList} color="primary">
                                                            Show All as List
                                                         </Button>
        <Button className={classes.button} variant="contained" onClick={switchToGraph} color="primary">
                                                            Show All as Graph
                                                            </Button> */}
        <Button className={classes.button} variant="contained" onClick={goBack} color="primary">
                                                            Return
                                                            </Button>
        
        <Button className={classes.button} variant="contained" onClick={goBackToSearch} color="primary">
                                                            Return to Search
                                                            </Button>
        </div>
        </Aux>
    )
}



  dataDetail.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
const mapStateToProps = (state) => {
    return {
        patent:state.patent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(dataDetail))
