import React from 'react'
import ReactBubbleChart from 'react-bubble-chart';
import classes from './DataGraph.css'

const dataGraph = (props) => {
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
        props.chooseClass(event.index)
    }
            

    return(
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
    )
}

export default dataGraph
