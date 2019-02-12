/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

/*eslint-enable */


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function getImages(query) {

  return new Promise((resolve, reject) => {
    const url = `https://api.unsplash.com/photos/random?client_id=865ff4a5599ce90421e061967c60702787c7ee51942d8589ddbd4bd256567979&query=${query}&count=1`;


    const request = new XMLHttpRequest()

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else { reject(Error(request.statusText) )
      }
    }
    request.open('GET', url, true);
    request.send();
  });
}

function makeImage(image) {

  const imageUrl = getImages(image)
  imageUrl.then(response => {
    return JSON.parse(response)[0].urls.small;
  });
}


function Grid(props){
  const { classes } = props;



  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {props.item.map((fruit,i) => (

          <GridListTile key={i}>
            <img src={ "https://loremflickr.com/320/240/" + fruit } alt={fruit} />
            <GridListTileBar
              title={fruit}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


Grid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grid);
