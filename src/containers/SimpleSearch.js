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
import DataGraph from '../components/DataGraph'
import DataList from '../components/DataList'
import DataDetail from '../components/DataDetail'
import axios from 'axios'
import { FadeLoader } from 'react-spinners';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AllPatentsList from '../components/AllPatentsList';
import AllPatentsGraph from '../components/AllPatentsGraph'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


class Search extends Component {
    state = {
        input:"",
        title:true,
        description:true,
        claim:true,

        showResult:false,
        // showGraph:false,
        // showList:false,
        // showDetail:false,
        // detailIndex:-1,
        // data:[],
        showSpinner:false,
        // searchBy:1,     //1-> all 2-> title 3->id 4-> abstract 5-> content
    }

    changeInput = (event) => {
        this.setState({input:event.target.value})
    }

    handleChecked = (name) => event => {
        this.setState({[name]:event.target.checked})
    }



    // handleShowList = () => {
    //     this.setState({showList:true, 
    //                     showGraph:false,
    //                     showDetail:false,
    //                     showClass:false})
    // }

    // handleShowGraph = () => {
    //     this.setState({showList:false, 
    //                     showGraph:true,
    //                     showDetail:false,
    //                     showClass:false})
    // }

    // handleShowDetail = (detailIndex) => {
    //     this.setState({showDetail:true, 
    //                     showList:false,
    //                     showGraph:false,
    //                     detailIndex:detailIndex})
    // }

    // handleCloseDetail = () => {
    //     this.setState({showDetail:false, 
    //                     showList:true, 
    //                     showGraph:false,
    //                     detailIndex:-1})
    // }


    // handleReturnToSearch = () => {
    //     this.props.history.push('/')
    // }


    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.search()
        }
    }


    // handleSelect = (event) => {
    //     this.setState({searchBy:event.target.value})
    // }

    handleSwitch = () => {
        this.props.history.push('/advanced')
    }


    search = () => {
        let queryParameter = this.state.input
        if (this.state.title) {
            queryParameter += "&title=true"
        }
        if (this.state.description) {
            queryParameter += "&description=true"
        }
        if (this.state.claim) {
            queryParameter += "&claim=true"
        }
        const url = 'http://three10-1714580309.us-east-2.elb.amazonaws.com/api/search?method=kmeans&q=' + queryParameter
        this.setState({showSpinner:true,
                        showResult:true})


        // const rawData = {
        //     "clusters":[
        //       {
        //         "labels":[
        //           "Quantum Logic"
        //         ],
        //         "score":3.181807575419961,
        //         "subclusters":[
          
        //         ],
        //         "otherTopics":false,
        //         "docs":[
        //       {
        //         "id":"US-2014088734-A1",
        //         "name":"<b>Controller</b> support device, <b>controller</b> support <b>program</b> to be <b>executed</b> in said device, and recording medium storing said <b>program</b>",
        //         "description":"Preferably the <b>controller</b> support device  8  is constructed by a <b>notebook</b> personal <b>computer</b> having excellent <b>portability</b> from the viewpoint of maintenance",
        //         "patentAbstract":"A <b>controller</b> support <b>program</b> causes an arithmetic unit to <b>execute</b> total <b>execution</b> time acquisition <b>processing</b> of acquiring a total <b>execution</b> time and output <b>processing</b> of outputting the total <b>execution</b> time. ",
        //         "score":0.16566548
        //       },
        //       {
        //         "id":"US-9129063-B2",
        //         "name":"Visualizing a <b>computer</b> <b>program</b> <b>execution</b> history",
        //         "description":"System  10  also includes a <b>processor</b>  22 , operatively coupled to bus  12 , for <b>processing</b> information and <b>executing</b> <b>instructions</b> or operations. ",
        //         "patentAbstract":"The <b>software</b> application profiling environment further displays some or all of the <b>computer</b> <b>program</b> <b>instructions</b> of the <b>computer</b> <b>program</b>, and further displays a visualization of the stored <b>execution</b> history information. ",
        //         "score":0.16566491
        //       },
        //       {
        //         "id":"US-2014344787-A1",
        //         "name":"Visualizing a <b>computer</b> <b>program</b> <b>execution</b> history",
        //         "description":"System  10  also includes a <b>processor</b>  22 , operatively coupled to bus  12 , for <b>processing</b> information and <b>executing</b> <b>instructions</b> or operations. ",
        //         "patentAbstract":"The <b>software</b> application profiling environment further displays some or all of the <b>computer</b> <b>program</b> <b>instructions</b> of the <b>computer</b> <b>program</b>, and further displays a visualization of the stored <b>execution</b> history information. ",
        //         "score":0.16566491
        //       }
        //     ]
        //       },
        //     ]
        //     }

        // const patents = []
        // rawData.clusters.forEach((cluster) => {
        //     const docs = cluster.docs
        //     patents.concat(docs)
        // })
        // this.props.updateData(patents)
        // this.props.updateInput(this.state.input)
        axios.get(url)
        .then((res) => {
            console.log(res)
            let patents = []
            const rawData = res['data'].clusters
            rawData.forEach((obj) => {
                patents = patents.concat(obj.docs)
            })
            this.props.updataData(patents)
            this.props.updateInput(this.state.input)

            // this.setState({data:patents})
            this.setState({showSpinner:false,
                            showResult:true})
            this.props.history.push('/simple/patentsGraph')
        })
        .catch((e) => {
            console.log(e)
        })
    }

    render(){
        const { classes } = this.props;

        const query = this.state.showResult ? null : <Aux>
                                                        
                                                        <Typography variant="display3" color='inherit' gutterBottom>
                                                            Begin to Search Your Inventions!
                                                        </Typography>


                                                        <FormControl fullWidth className={classes.formControl}>
                                                        <InputLabel>&nbsp;&nbsp;Search...</InputLabel>
                                                        <Input disableUnderline onKeyPress={(event) => this.handleKeyPress(event)} className={classes.input} multiline rows='4'value={this.state.input} onChange={this.changeInput} />

                                                        </FormControl>
                                                        <FormControl fullWidth className={classes.formControl}>
                                                            {" "}
                                                        </FormControl>
                                                        <Typography variant="subheading" color='inherit'>
                                                            Search By:&nbsp;&nbsp;&nbsp;  
                                                        </Typography>
                                                       
                                                        <FormControl fullWidth className={classes.formControl}>
                                                            <FormGroup row>

                                                                <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                    checked={this.state.title}
                                                                    onChange={this.handleChecked('title')}
                                                                    // value="checkedA"
                                                                    />
                                                                }
                                                                label="Title"
                                                                />
                                                                <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                    checked={this.state.description}
                                                                    onChange={this.handleChecked('description')}
                                                                    // value="checkedA"
                                                                    />
                                                                }
                                                                label="Description"
                                                                />
                                                                <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                    checked={this.state.claim}
                                                                    onChange={this.handleChecked('claim')}
                                                                    // value="checkedA"
                                                                    />
                                                                }
                                                                label="Claim"
                                                                />
                                                            </FormGroup>
                                                            </FormControl>

                                                            <FormControl fullWidth className={classes.formControl}>
                                                                <FormGroup row>
                                                                    <Button className={classes.button} variant="contained" color="primary" onClick={this.search}>Search</Button>
                                                                    <Button className={classes.button} variant="contained" color="secondary" onClick={this.handleSwitch}>Advanced Search</Button>
                                                                </FormGroup>
                                                            </FormControl>

                                                    </Aux>
                                             

        // const patentList = this.state.showList ? <AllPatentsList data={this.state.data}
        //                                                         input={this.state.input}
                                                                // classIndex={this.state.classIndex}
        //                                                         chooseDetail={this.handleShowDetail}/> : null

        // const patentGraph = this.state.showGraph ? <AllPatentsGraph data={this.state.data}
        //                                                             input={this.state.input}
        //                                                             chooseDetail={this.handleShowDetail} /> : null

        // const toListBotton = this.state.showGraph || this.state.showDetail ? <Button className={classes.button} variant="contained" onClick={this.handleShowList} color="primary">
        //                                                     Show All as List
        //                                                  </Button> : null
        // const toGraphBotton = this.state.showList || this.state.showDetail ? <Button className={classes.button} variant="contained" onClick={this.handleShowGraph} color="primary">
        //                                                     Show All as Graph
        //                                                   </Button> : null

        // const dataDetail = this.state.showDetail ? <DataDetail  keyword={this.state.input} data={this.state.data[this.state.detailIndex]}/> : null



        // const returnToSearch = this.state.showResult ? <Button className={classes.button} variant="contained" onClick={this.handleReturnToSearch} color="primary">
        //                                                 Back to Search
        //                                             </Button> : null

        const spinner = this.state.showSpinner ? <div style={{marginLeft:'50%'}}><FadeLoader color={'#00ff00'}/></div> : null

        return (
            <Aux>
            <div className={classes.container}>
                {spinner}   
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
                
                {/* {patentList} */}
                {/* {patentGraph} */}
                {/* {dataDetail} */}
                {/* </DialogContent>
                <DialogActions> */}
                    {/* <Button onClick={this.handleCloseModal} color="primary">
                    Close
                    </Button> */}
                {/* </DialogActions> */}
                {/* </Dialog> */}
            </div>
            {/* <div> */}
            {/* {toListBotton} */}
            {/* {toGraphBotton} */}
            {/* {returnToSearch} */}
            {/* </div> */}
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
  
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updataData:(data) => dispatch({type:'simpleData', data:data}),
        updateInput:(input) => dispatch({type:'simpleInput', input:input}),
        // updateIndex:(index) => dispatch({type:'simpleIndex', index:index})
    }
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Search))