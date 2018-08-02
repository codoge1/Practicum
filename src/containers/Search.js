import React, { Component } from 'react'
import AdvanceSearch from './AdvanceSearch'
import SimpleSearch from './SimpleSearch'


class Search extends Component {
    state = {
        showAdvance:false,
    }

    switchToSimple = () => {
        this.setState({showAdvance:false})
    }

    switchToAdvance = () => {
        this.setState({showAdvance:true})
    }

    render(){
        const search = this.state.showAdvance ? <AdvanceSearch switch={this.switchToSimple}/> : <SimpleSearch switch={this.switchToAdvance}/>
        return (
            <div>
            {search}
            </div>
        )
    }
}

export default Search