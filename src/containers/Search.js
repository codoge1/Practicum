import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Aux from '../hoc/Aux'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DataGraph from '../components/DataGraph'
import DataList from '../components/DataList'
import DataDetail from '../components/DataDetail'
import axios from 'axios'
import { FadeLoader } from 'react-spinners';

class Search extends Component {
    state = {
        novel:'',
        invention:'',
        showModal:false,
        showGraph:false,
        showList:false,
        showDetail:false,
        detailIndex:-1,
        data:[],
        showSpinner:false,
    }

    changeNovel = (event) => {
        this.setState({novel:event.target.value})
    }

    changeInvention = (event) => {
        this.setState({invention:event.target.value})
    }

    handleSearch = () => {
        this.handleShowModal()
    }

    handleShowModal = () => {
        this.setState({showModal:true})
    }

    handleCloseModal = () => {
        this.setState({showModal:false,
                        showGraph:true,
                        showList:false,
                        showDetail:false})
    }

    handleShowList = () => {
        this.setState({showList:true, 
                        showGraph:false})
    }

    handleShowGraph = () => {
        this.setState({showList:false, 
                        showGraph:true})
    }

    handleShowDetail = (index) => {
        this.setState({showDetail:true, 
                        showList:false,
                        showGraph:false,
                        detailIndex:index})
    }

    handleCloseDetail = () => {
        this.setState({showDetail:false, 
                        showList:false, 
                        showGraph:true,
                        detailIndex:-1})
    }

    search = () => {
        const queryParameter = this.state.invention
        const url = 'http://18.222.136.148:8080/search?q=' + queryParameter
        this.setState({showSpinner:true,
                        showModal:true})

        axios.get(url)
        .then((res) => {
            console.log(res)
            const newData = res['data']
            this.setState({data:newData})
            this.handleSearch()
            this.setState({showGraph:true,
                            showSpinner:false})
        })
        .catch((e) => {
            console.log(e)
        })
    }

    render(){
        const { classes } = this.props;

        const query = this.state.showModal ? null : <Aux>
                                                        <Typography variant="display3" color='inherit' gutterBottom>
                                                            Begin to search your patents!
                                                        </Typography>
                                                        <FormControl fullWidth className={classes.formControl}>
                                                        <InputLabel>&nbsp;&nbsp;Novel Feature</InputLabel>
                                                        <Input disableUnderline className={classes.input} value={this.state.novel} onChange={this.changeNovel} />
                                                        <FormHelperText>Please input your novel feature</FormHelperText>
                                                        </FormControl>
                                                        <br />
                                                        <br />
                                                        <FormControl fullWidth className={classes.formControl}>
                                                        <InputLabel>&nbsp;&nbsp;Invention Disclosure</InputLabel>
                                                        <Input disableUnderline className={classes.input} multiline rows='8'value={this.state.invention} onChange={this.changeInvention} />
                                                        <FormHelperText>Please input your invention disclosure</FormHelperText>
                                                        </FormControl>
                                                        
                                                        <Button variant="contained" color="primary" onClick={this.search}>Search</Button>
                                                    </Aux>

        const dataList = this.state.showList ? <DataList 
                                                        data={this.state.data}
                                                      chooseDetail={this.handleShowDetail}/> : null

        const dataGraph = this.state.showGraph ? <DataGraph 
                                                        data={this.state.data}
                                                       chooseDetail={this.handleShowDetail}/> : null                                              

        const toListBotton = this.state.showList || this.state.showDetail ? null: <Button onClick={this.handleShowList} color="primary" autoFocus>
                                                            Show as List
                                                         </Button> 
        const toGraphBotton = this.state.showGraph || this.state.showDetail ? null: <Button onClick={this.handleShowGraph} color="primary" autoFocus>
                                                            Show as Graph
                                                          </Button> 

        const dataDetail = this.state.showDetail ? <DataDetail data={this.state.data[this.state.detailIndex]}/> : null

        const toAllResults = this.state.showDetail ? <Button onClick={this.handleCloseDetail} color="primary" autoFocus>
                                                        Show all results
                                                    </Button> : null

        const spinner = this.state.showSpinner ? <div style={{marginLeft:'50%'}}><FadeLoader color={'#00ff00'}/></div> : null

        return (
            <div className={classes.container}>

                {query}
                <Dialog
                fullWidth
                maxWidth={false}
                open={this.state.showModal}
                onClose={this.handleCloseModal}
                aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">{"Search Term: "} {this.state.invention} :</DialogTitle>
                <DialogContent>
                    {spinner}
                    {dataList}
                    {dataGraph}
                    {dataDetail}
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCloseModal} color="primary">
                    Close
                    </Button>
                    {toListBotton}
                    {toGraphBotton}
                    {toAllResults}
                </DialogActions>
                </Dialog>
            </div>
        )
    }
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
    });

    Search.propTypes = {
        classes: PropTypes.object.isRequired,
    };
  
export default withStyles(styles)(Search)