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


class AllPatentsGraphAndList extends Component {
    // state = {
    //     // input:"",
    //     // title:true,
    //     // description:true,
    //     // claim:true,

    //     // showResult:false,
    //     // showGraph:false,
    //     // showList:false,
    //     // showDetail:false,
    //     // detailIndex:-1,
    //     // data:[],
    //    // showSpinner:false,
    //     // searchBy:1,     //1-> all 2-> title 3->id 4-> abstract 5-> content
    // }

    // changeInput = (event) => {
    //     this.setState({input:event.target.value})
    // }

    // handleChecked = (name) => event => {
    //     this.setState({[name]:event.target.checked})
    // }






    // handleKeyPress = (event) => {
    //     if (event.key === 'Enter') {
    //         this.search()
    //     }
    // }



    // handleSwitch = () => {
    //     this.props.history.push('/advanced')
    // }


    // search = () => {
    //     let queryParameter = this.state.input
    //     if (this.state.title) {
    //         queryParameter += "&title=true"
    //     }
    //     if (this.state.description) {
    //         queryParameter += "&description=true"
    //     }
    //     if (this.state.claim) {
    //         queryParameter += "&claim=true"
    //     }
    //     const url = 'http://three10-1714580309.us-east-2.elb.amazonaws.com/search?q=' + queryParameter
    //     this.setState({showSpinner:true,
    //                     showResult:true})


    

    //     axios.get(url)
    //     .then((res) => {
    //         console.log(res)
    //         let patents = []
    //         const rawData = res['data']
    //         rawData.forEach((obj) => {
    //             patents = patents.concat(obj.patents)
    //         })
    //         this.props.updataData(patents)
    //         this.props.updateInput(this.state.input)

    //         // this.setState({data:patents})
    //         this.setState({showSpinner:false,
    //                         showResult:true})
    //         this.props.history.push('/simple/patentsGraph')
    //     })
    //     .catch((e) => {
    //         // console.log(e)
    //     })
    // }

    render(){
       // const { classes } = this.props;

        // const query =  <Aux>
                                                        
        //                                                 <Typography variant="display3" color='inherit' gutterBottom>
        //                                                     Begin to Search Your Inventions!
        //                                                 </Typography>


        //                                                 <FormControl fullWidth className={classes.formControl}>
        //                                                 <InputLabel>&nbsp;&nbsp;Search...</InputLabel>
        //                                                 <Input disableUnderline onKeyPress={(event) => this.handleKeyPress(event)} className={classes.input} multiline rows='4'value={this.state.input} onChange={this.changeInput} />

        //                                                 </FormControl>
        //                                                 <FormControl fullWidth className={classes.formControl}>
        //                                                     {" "}
        //                                                 </FormControl>
        //                                                 <Typography variant="subheading" color='inherit'>
        //                                                     Search By:&nbsp;&nbsp;&nbsp;  
        //                                                 </Typography>
                                                       
        //                                                 <FormControl fullWidth className={classes.formControl}>
        //                                                     <FormGroup row>

        //                                                         <FormControlLabel
        //                                                         control={
        //                                                             <Checkbox
        //                                                             checked={this.state.title}
        //                                                             onChange={this.handleChecked('title')}
        //                                                             // value="checkedA"
        //                                                             />
        //                                                         }
        //                                                         label="Title"
        //                                                         />
        //                                                         <FormControlLabel
        //                                                         control={
        //                                                             <Checkbox
        //                                                             checked={this.state.description}
        //                                                             onChange={this.handleChecked('description')}
        //                                                             // value="checkedA"
        //                                                             />
        //                                                         }
        //                                                         label="Description"
        //                                                         />
        //                                                         <FormControlLabel
        //                                                         control={
        //                                                             <Checkbox
        //                                                             checked={this.state.claim}
        //                                                             onChange={this.handleChecked('claim')}
        //                                                             // value="checkedA"
        //                                                             />
        //                                                         }
        //                                                         label="Claim"
        //                                                         />
        //                                                     </FormGroup>
        //                                                     </FormControl>

        //                                                     <FormControl fullWidth className={classes.formControl}>
        //                                                         <FormGroup row>
        //                                                             <Button className={classes.button} variant="contained" color="primary" onClick={this.search}>Search</Button>
        //                                                             <Button className={classes.button} variant="contained" color="secondary" onClick={this.handleSwitch}>Advanced Search</Button>
        //                                                         </FormGroup>
        //                                                     </FormControl>

        //                                             </Aux>
                                             

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

     //   const spinner = this.state.showSpinner ? <div style={{marginLeft:'50%'}}><FadeLoader color={'#00ff00'}/></div> : null

        return (
            // <Aux>
            <div >
                {/* {spinner}    */}
                {/* {query} */}
                {/* <Dialog
                fullWidth
                maxWidth={false}
                open={this.state.showModal}
                onClose={this.handleCloseModal}
                aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">{"Search Term: "} {this.state.invention} :</DialogTitle>
                <DialogContent> */}
                
                 <AllPatentsList/>
                <AllPatentsGraph/>
                {/* {dataDetail} */}
                {/* </DialogContent>
                <DialogActions> */}
                    {/* <Button onClick={this.handleCloseModal} color="primary">
                    Close
                    </Button> */}
                {/* </DialogActions> */}
                {/* </Dialog> */}
            </div>
         
        )
    }
}

//     const styles = theme => ({
//         container: {
//         display: 'flex',
//        // flexWrap: 'wrap',
//         paddingLeft: 0,
//         paddingRight:0,
//         },
//         formControl: {
//             margin: theme.spacing.unit,
//         },
//         input:{
//             border:'1px solid gray',
//             borderRadius:'15px',
//         },
//         button: {
//             margin: theme.spacing.unit,
//           },
//     });

//     AllPatentsGraphAndList.propTypes = {
//         classes: PropTypes.object.isRequired,
//     };
  
// const mapStateToProps = (state) => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // updataData:(data) => dispatch({type:'simpleData', data:data}),
//         // updateInput:(input) => dispatch({type:'simpleInput', input:input}),
//         // updateIndex:(index) => dispatch({type:'simpleIndex', index:index})
//     }
// }

export default AllPatentsGraphAndList;