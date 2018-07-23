import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import green from '@material-ui/core/colors/green';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const dataList = (props) => {
    const { classes } = props;
    const dataList = props.data.map((el, classIndex) => {
        const patents = el.patents
        const list = patents.map((patent, detailIndex) => {
            return <ListItem key={detailIndex + "," + classIndex}
                            dense
                            button
                            onClick={() => props.chooseDetail(classIndex, detailIndex)}
                            // className={classes.listItem}
                            >
                            <ListItemText primary={patent.name}/>
                            </ListItem>
        })

        return (<ExpansionPanel key={classIndex}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Classification: {el.classification}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
              <Typography>
                Number of Patents: { list.length }
              </Typography>

              <List className={classes.list}>
                {list}
              </List>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>)
    })


    return (
        <div className={classes.root}>
        {dataList}
        </div>
    )
}


const styles = theme => ({
    root: {
      width: '100%',
    },
    list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
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