import React from 'react'
import ReactBubbleChart from 'react-bubble-chart';
import classes from './DataGraph.css'
import Aux from '../hoc/Aux'
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const dataGraph = (props) => {
        const rawData = props.data
        const data = rawData.map((el, index) => {
            return {
                _id:el.id,
                index:index,
                value:1,
                title:el.name,
                displayText:el.name,
                colorValue:Math.random() * 2 - 1
            }
        })
       
    const colorLegend = [
        '#ffc0cb', '#ffe4e1', '#cafe69', '#cdea90', '#afeefe', '#ffee88', '#ccaabb', '#00a7b0', '#93afbf', '#2f6276', 
        '#00ff00', '#ffff00', '#ff00ff', '#ffff66', '#ccff00', '#b6fcd5', '#660066', '#0e2f44', '#0000ff', '#f0f8ff'
      ]
      

    const tooltipProps = [{
        css: 'symbol',
        prop: '_id',
        display:'ID'
    }, {
        css: 'value',
        prop: 'title',
        display: 'Title'
    }];


    const handleClick = (event) => {
        props.chooseDetail(event.index)
        props.history.push('/simple/detail')
    }

    const switchToList = () => {
        props.history.push('/simple/patentsList')
    }
    
    const goBack = () => {
        props.history.push('/')
    }

    const { classes } = props;

    return(
        <Aux>
        <div className={classes.container}>
            <div style={{width:'100%'}}>
        <Typography variant="headline" gutterBottom>
            Search Content:{props.input}
        </Typography>
        <ReactBubbleChart
            className={classes}
            colorLegend={colorLegend}
            data={data}
            selectedColor="red"
            selectedTextColor="#d9d9d9"
            fixedDomain={{min: -1, max: 1}}
            legend={false}
            legendSpacing={5}
            tooltip={true}
            tooltipProps={tooltipProps}
            fontSizeFactor={0.5}
            onClick={handleClick}

    />
        </div>
        </div>
        <div>
        <Button className={classes.button} variant="contained" onClick={() => switchToList()} color="primary">
                                                            Show All as List
                                                         </Button>
        <Button className={classes.button} variant="contained" onClick={() => goBack()} color="primary">
                                                            Return
                                                            </Button>
        </div>
    </Aux>
    )
}

const styles = theme => ({
    container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: 300,
    paddingRight: 300,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    input:{
        border:'1px solid gray',
        borderRadius:'15px',
    },
    button: {
        margin: theme.spacing.unit,
      },
});

const mapStateToProps = (state) => {
    return {
        data:state.simpleData,
        input:state.simpleInput,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseDetail:(index) => dispatch({type:'simpleIndex', index:index})
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(dataGraph))

