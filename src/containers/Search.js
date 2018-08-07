import React, { Component } from 'react'
import AdvanceSearch from './AdvanceSearch'
import SimpleSearch from './SimpleSearch'
import { Route } from 'react-router-dom'
import Aux from '../hoc/Aux'
import Input from '@material-ui/core/Input';
import AllPatentsGraph from '../components/AllPatentsGraph'
import AllPatentsList from '../components/AllPatentsList'
import DataDetail from '../components/DataDetail';


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
        // const search = this.state.showAdvance ? <AdvanceSearch switch={this.switchToSimple}/> : <SimpleSearch switch={this.switchToAdvance}/>
        return (
            <div>
                <Aux>
                    <Route path='/' exact component={SimpleSearch} />
                    <Route path='/simple/patentsGraph' exact component={AllPatentsGraph} />
                    <Route path='/simple/patentsList' exact component={AllPatentsList} />
                    <Route path='/simple/detail' exact component={DataDetail} />

                    <Route path='/advanced' exact component={AdvanceSearch} />
                </Aux>
            {/* {search} */}
            </div>
        )
    }
}

export default Search