import React from 'react'
import ReactBubbleChart from 'react-bubble-chart';
import classes from './DataGraph.css'
import { connect } from 'react-redux';
import Aux from '../hoc/Aux'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const dataGraph = (props) => {
    console.log(props)
        const rawData = props.data
        const data = rawData.map((el, index) => {
            return {
                _id:el.classification,
                index:index,
                // value:el.score,
                classification:el.classification,
                value:el.patents.length,
                number:el.patents.length,
                displayText:el.classification,
                colorValue:Math.random() * 2 - 1
            }
        })
       
    const colorLegend = [
        '#ffc0cb', '#ffe4e1', '#cafe69', '#cdea90', '#afeefe', '#ffee88', '#ccaabb', '#00a7b0', '#93afbf', '#2f6276', 
        '#00ff00', '#ffff00', '#ff00ff', '#ffff66', '#ccff00', '#b6fcd5', '#660066', '#0e2f44', '#0000ff', '#f0f8ff'
      ]
      

    const tooltipProps = [{
        css: 'symbol',
        prop: 'classification',
        display:'Classification'
    }, {
        css: 'value',
        prop: 'number',
        display: 'Number of Patents'
    }];


    const handleClick = (event) => {
        props.updateClassIndex(event.index)
        props.history.push('/advanced/classification/patentsList')
    }
            
    const goBack = () => {
        props.history.goBack()
    }

    const switchToList = () => {
        props.history.push('/advanced/classificationList')
    }

    const {classes} = props
    return(
        <Aux>
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
        <Button className={classes.button} variant="contained" onClick={switchToList} color="primary">
            Show as List
        </Button>
        <Button className={classes.button} variant="contained" onClick={goBack} color="primary">
            Return
        </Button>
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
    // console.log(state)
    return {
        data:state.advancedData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updataData:() => dispatch({type:'advancedData', }),
        // updateInput:() => dispatch({type:'advancedClassIndex', }),
        updateClassIndex:(classIndex) => dispatch({type:'advancedClassIndex', classIndex:classIndex})
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(dataGraph))

