import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DataGraph from '../components/DataGraph'
import DataList from '../components/DataList'
import PatentList from '../components/PatentList'
import { Scrollbars } from 'react-custom-scrollbars';


class AdvancedResult extends Component {
    state = {

    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <DataGraph />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Scrollbars style={{ width: '100%', height: 680, border:'1px gray',borderRadius:'15px' }}>
                        <Paper className={classes.paper}>
                            <PatentList />
                        </Paper>
                        </Scrollbars>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

export default withStyles(styles)(AdvancedResult)