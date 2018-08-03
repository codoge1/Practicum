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
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
import DataGraph from '../components/DataGraph'
import DataList from '../components/DataList'
import DataDetail from '../components/DataDetail'
import axios from 'axios'
import { FadeLoader } from 'react-spinners';
import PatentList from '../components/PatentList'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider, {Range} from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import { FormGroup } from '../../node_modules/@material-ui/core';



class Search extends Component {
    state = {
        novel:'',
        invention:'',
        showResult:false,
        showGraph:false,
        showList:false,
        showDetail:false,
        showClass:false,
        classIndex:-1,
        detailIndex:-1,
        data:[],
        showSpinner:false,
        weight:50,
        
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

    // handleShowModal = () => {
    //     this.setState({showModal:true})
    // }

    // handleCloseModal = () => {
    //     this.setState({showModal:false,
    //                     showGraph:true,
    //                     showList:false,
    //                     showClass:false,
    //                     showDetail:false})
    // }

    handleShowList = () => {
        this.setState({showList:true, 
                        showGraph:false,
                        showDetail:false,
                        showClass:false})
    }

    handleShowGraph = () => {
        this.setState({showList:false, 
                        showGraph:true,
                        showDetail:false,
                        showClass:false})
    }

    handleShowDetail = (classIndex, detailIndex) => {
        this.setState({showDetail:true, 
                        showList:false,
                        showGraph:false,
                        showClass:false,
                        classIndex:classIndex,
                        detailIndex:detailIndex})
    }

    handleCloseDetail = () => {
        this.setState({showDetail:false, 
                        showClass:false,
                        showList:false, 
                        showGraph:true,
                        classIndex:-1,
                        detailIndex:-1})
    }

    handleChooseClass = (index) => {
        this.setState({
            showDetail:false, 
            showClass:true,
            showList:false,
            showGraph:false,
            classIndex:index
        })
    }

    handleCloseClass = () => {
        this.setState({showDetail:false, 
                        showClass:false,
                        showList:false, 
                        showGraph:true,
                        classIndex:-1})
    }

    handleReturnToClass = () => {
        this.setState({showDetail:false, 
                        showClass:true,
                        showList:false, 
                        showGraph:false})
    }

    handleReturnToSearch = () => {
        this.setState({showDetail:false, 
                        showClass:false,
                        showList:false, 
                        showGraph:false,
                        showResult:false})
    }


    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.search()
        }
    }


    handleSelect = (event) => {
        this.setState({searchBy:event.target.value})
    }

    handleSlider = (props) => {
        const createSliderWithTooltip = Slider.createSliderWithTooltip;
        const Handle = Slider.Handle;
        const { value, dragging, index, ...restProps } = props;

        return (
          <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
          >
            <Handle value={value} {...restProps} />
          </Tooltip>
        );
      };

      changeWeight = (value) => {
          this.setState({weight:value})
      }

    search = () => {
        const queryParameter = this.state.invention
        const url = 'http://18.222.136.148:8080/search?q=' + queryParameter
        this.setState({showSpinner:false,
                        showResult:true,
                        showGraph:true})

        const newData = [{
            classification:'classAB',
            patents:[{
                id:'fdasaf',
                name:'patentA',
                patentAbstract:'abstractA'
            },
            {
                id:'asdasaf',
                name:'patentB',
                patentAbstract:'abstractB'
            }
        ]},
        {
            classification:'classCD',
            patents:[{
                id:'fdasafdfFS',
                name:'patentC',
                patentAbstract:'abstractC'
            },
            {
                id:'asdHDFGSasaf',
                name:'patentD',
                patentAbstract:'abstractD'
            }
        ]},  
        ]
        this.setState({data:newData})

        // axios.get(url)
        // .then((res) => {
        //     console.log(res)
        //     const newData = res['data']
        //     this.setState({data:newData})
        //     this.handleSearch()
        //     this.setState({showGraph:true,
        //                     showSpinner:false})
        // })
        // .catch((e) => {
        //     console.log(e)
        // })
    }

    render(){
        const { classes } = this.props;

        const query = this.state.showResult ? null : <Aux>
                                                        <Typography variant="display3" color='inherit' gutterBottom>
                                                            Advanced Search
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
                                                        <Input disableUnderline onKeyPress={(event) => this.handleKeyPress(event)} className={classes.input} multiline rows='8'value={this.state.invention} onChange={this.changeInvention} />
                                                        <FormHelperText>Please input your invention disclosure</FormHelperText>
                                                        </FormControl>
                                                        
                                                        <FormControl fullWidth className={classes.formControl}>
                                                            <FormGroup row>
                                                                
                                                                <Typography  variant="caption">
                                                                    Novel Feature
                                                                </Typography>
                                                                <Slider onChange={(value) => this.changeWeight(value)} 
                                                                        marks={{0:'0%',
                                                                                20:'20%',
                                                                                40:'40%',
                                                                                60:'60%',
                                                                                80:'80%',
                                                                                100:'100%'}}
                                                                        min={0} max={100} 
                                                                        defaultValue={50} 
                                                                        value={this.state.weight} 
                                                                        handle={this.handleSlider}/>
                                                               
                                                            </FormGroup>
                                                        </FormControl>

                                                        <FormControl fullWidth className={classes.formControl} >
                                                            <Typography  variant="caption" align='right'>
                                                                Invention Disclosure
                                                            </Typography>
                                                        </FormControl>

                                                        <FormControl fullWidth className={classes.formControl}>
                                                            <FormGroup row>
                                                                <Button className={classes.button} variant="contained" color="primary" onClick={this.search}>Search</Button>
                                                                <Button className={classes.button} variant="contained" color="secondary" onClick={this.props.switch}>Simple Search</Button>
                                                            </FormGroup>
                                                        </FormControl>

                                                        
                                                            {/* <Select
                                                                value={this.state.searchBy}
                                                                onChange={this.handleSelect}
                                                                input={<Input/>}
                                                            >
                                                                
                                                                <MenuItem value={1}>All</MenuItem>
                                                                <MenuItem value={2}>Title</MenuItem>
                                                                <MenuItem value={3}>ID</MenuItem>
                                                                <MenuItem value={4}>Abstract</MenuItem>
                                                                <MenuItem value={5}>Content</MenuItem>

                                                            </Select>
                                                            <FormHelperText>Search By</FormHelperText> */}

                                                    </Aux>

        const dataList = this.state.showList ? <DataList 
                                                        data={this.state.data}
                                                      chooseDetail={this.handleShowDetail}/> : null

        const dataGraph = this.state.showGraph ? <DataGraph 
                                                        data={this.state.data}
                                                        chooseClass = {this.handleChooseClass}
                                                       chooseDetail={this.handleShowDetail}/> : null                                              

        const patentList = this.state.showClass ? <PatentList data={this.state.data[this.state.classIndex]}
                                                                classification={this.state.data[this.state.classIndex].classification}
                                                                classIndex={this.state.classIndex}
                                                                chooseDetail={this.handleShowDetail}/> : null

        const toListBotton = this.state.showGraph || this.state.showDetail ? <Button className={classes.button} variant="contained" onClick={this.handleShowList} color="primary">
                                                            Show as List
                                                         </Button> : null
        const toGraphBotton = this.state.showList || this.state.showDetail ? <Button className={classes.button} variant="contained" onClick={this.handleShowGraph} color="primary">
                                                            Show as Graph
                                                          </Button> : null

        const dataDetail = this.state.showDetail ? <DataDetail data={this.state.data[this.state.classIndex].patents[this.state.detailIndex]}/> : null

        // const toAllResults = this.state.showDetail ? <Button className={classes.button} variant="contained" onClick={this.handleCloseDetail} color="primary">
        //                                                 Show all results
        //                                             </Button> : null


        const returnToClass = this.state.showDetail ? <Button className={classes.button} variant="contained" onClick={this.handleReturnToClass} color="primary">
                                                        Return
                                                    </Button> : null

        const returnToSearch = this.state.showResult ? <Button className={classes.button} variant="contained" onClick={this.handleReturnToSearch} color="primary">
                                                        Back to Search
                                                    </Button> : null

        const spinner = this.state.showSpinner ? <div style={{marginLeft:'50%'}}><FadeLoader color={'#00ff00'}/></div> : null

        return (
            <Aux>
            <div className={classes.container}>

                {query}
                {/* <Dialog
                fullWidth
                maxWidth={false}
                open={this.state.showModal}
                onClose={this.handleCloseModal}
                aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">{"Search Term: "} {this.state.invention} :</DialogTitle>
                <DialogContent> */}
                {spinner}
                {dataList}
                {dataGraph}
                {patentList}
                {dataDetail}
                {/* </DialogContent>
                <DialogActions> */}
                    {/* <Button onClick={this.handleCloseModal} color="primary">
                    Close
                    </Button> */}
                {/* </DialogActions> */}
                {/* </Dialog> */}
            </div>
            <div>
            {toListBotton}
            {toGraphBotton}
            {/* {toAllResults} */}
            {returnToClass}
            {returnToSearch}
            </div>
            </Aux>
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
        button: {
            margin: theme.spacing.unit,
          },
    });

    Search.propTypes = {
        classes: PropTypes.object.isRequired,
    };
  
export default withStyles(styles)(Search)