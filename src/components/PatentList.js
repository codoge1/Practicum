import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';



const patentList = (props) => {
    const { classes } = props;
    const compare = (a, b) => {
      if (a.score < b.score) {
        return 1;
      } else if (a.score > b.score) {
        return -1;
      }
      return 0;
    }
    let patents = props.data.patents;
    patents.sort(compare);
    console.log(patents)
    const list = patents.map((el, index) => {
        return (<ExpansionPanel key={el.id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Title: {el.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
              <Typography>
                Abstract: { el.patentAbstract }
                </Typography>
                <Avatar style={{cursor:'pointer'}} onClick={() => props.chooseDetail(props.classIndex, index)} className={classes.greenAvatar}>
                  <AssignmentIcon />
                </Avatar>
                </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>)
    })



    return (
        <div className={classes.root}>
        <Typography variant="headline" gutterBottom>
          Classification:{ props.classification }
        </Typography>
        
        <br/>
        <br/>
        {list}
        </div>
    )
}


const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    avatar: {
      margin: 10,
    },
    greenAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: green[500],
    },
  });

patentList.propTypes = {
classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(patentList);