import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Highlighter from 'react-highlight-words'


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });


const dataDetail = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h1">
                Title: {props.data.name}
            </Typography>
            <br/>
            <Typography component="p">
                Application_ID:  {props.data.id}
            </Typography>
            <br/>
            <Typography variant="headline" component="h4">
                Abstract: {props.data.patentAbstract}
            </Typography>
            <br/>
            <Typography component="p">
                {/* {props.data.content} */}
                <Highlighter textToHighlight='Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit urna, feugiat sed lectus ac, semper viverra diam. Aliquam pharetra venenatis scelerisque. Suspendisse eros dui, tincidunt a magna id, interdum feugiat dolor. Etiam suscipit volutpat nisl eget tincidunt. Nulla sed ultrices ligula. Praesent mattis et purus et sollicitudin. Pellentesque dignissim, risus non maximus pretium, libero risus hendrerit tortor, at sollicitudin diam justo at elit. Cras eget est nec felis auctor commodo. Curabitur pretium elit eget purus faucibus sollicitudin. Mauris nisl diam, aliquam porttitor ornare nec, convallis ut quam. Curabitur imperdiet ipsum ut elementum eleifend. Donec mollis justo non neque tincidunt viverra. Vivamus sed purus a tellus ullamcorper scelerisque. Praesent tristique viverra dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Nulla eget ultricies purus. Nulla venenatis malesuada neque semper iaculis. Pellentesque consectetur iaculis dui, in posuere mauris cursus non. Donec laoreet convallis sapien, pharetra ultrices nisl lacinia vitae. Nulla hendrerit est ut massa venenatis feugiat et vitae odio. Maecenas luctus lorem in elit pretium, sed lobortis lorem porta. Morbi id quam mauris. Morbi eu neque at mi sollicitudin posuere sed sed lacus. Sed orci tellus, pellentesque et finibus vel, vulputate id mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed sit amet erat sed elit dignissim tempus. Donec quis vestibulum ante. Aliquam eget molestie elit. Proin massa lacus, pretium at tincidunt ac, feugiat nec odio. Integer sed metus ac dolor consequat sagittis non ac nibh. Cras vitae neque et ipsum tristique congue. Morbi facilisis, sapien aliquam mattis dignissim, turpis dui luctus nibh, vel dapibus nisl nibh nec nisl. Nam turpis nunc, maximus vitae nibh ullamcorper, fringilla laoreet tellus. Donec vel lobortis tortor. In cursus lacus vel rutrum tincidunt. Vestibulum tempor sem sodales fermentum rutrum. In feugiat enim et ipsum congue dignissim.

Maecenas ultrices sapien non sem interdum, nec commodo ante feugiat. Pellentesque tempor felis luctus, iaculis enim id, dapibus diam. Pellentesque at tellus iaculis, fringilla urna at, dignissim diam. Sed sed semper leo. Ut ut elementum eros. Etiam eget elit eu sapien pellentesque posuere eu non erat. Curabitur blandit luctus elit, eget ultrices nibh semper vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer tristique diam maximus egestas rhoncus.

Donec sed urna placerat quam gravida lobortis. Fusce cursus justo id lorem volutpat, ac finibus odio ultrices. Nulla dapibus, risus a congue pretium, ex quam fermentum ipsum, eget cursus erat arcu vel dolor. Sed facilisis metus arcu, id mattis neque semper ac. Pellentesque mollis ex ac rhoncus rhoncus. Pellentesque molestie quam urna, non ultrices justo semper ac. Duis sollicitudin sapien sed euismod pharetra. Aenean non lectus urna. Praesent congue, erat et varius congue, nisi magna aliquam elit, eu tristique sem dui sit amet quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ultrices eros ac massa dapibus auctor. Fusce in diam non nisl vestibulum vestibulum.
'
                            searchWords={['Lorem']}/>
            </Typography>
        </Paper>
    )
}



  dataDetail.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(dataDetail);