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


const dataList = (props) => {
    const { classes } = props;
    const list = props.data.map((el, index) => {
        return (<ExpansionPanel key={el.id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Title: {el.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Abstract: { el.patentAbstract }
                <Avatar style={{cursor:'pointer'}} onClick={() => props.chooseDetail(index)} className={classes.greenAvatar}>
                  <AssignmentIcon />
                </Avatar>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>)
    })


    return (
        <div className={classes.root}>
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

dataList.propTypes = {
classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(dataList);