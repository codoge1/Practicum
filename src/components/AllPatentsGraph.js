import React from 'react'
import ReactBubbleChart from 'react-bubble-chart';
import classes from './DataGraph.css'
import Aux from '../hoc/Aux'
import Typography from '@material-ui/core/Typography';

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
    }
            

    return(
        <Aux>
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
    </Aux>
    )
}

export default dataGraph
