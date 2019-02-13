import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(days, location, hours, booth) {
  id += 1;
  return { id, days, location, hours, booth};
}

const rows = [
  createData("Saturday", "Beaverton", "10:00am - 1:30pm", "9G"),
  createData("Thursday", "Northwest Portland", "2:00pm - 6:00pm", "6D"),
  createData("Wednesday", "Shemanski Park", "10:00am - 2:00pm", "3E"),
  createData("Tuesday","Hillsboro", "5:00pm - 8:30pm", "1F"),
  createData("Monday", "Pioneer Courthouse Square", "10:00am - 2:00pm", "7C"),
  createData("Sunday","Lents International", "9:00am - 2:00pm","4A")
];

function Market(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Day</CustomTableCell>
            <CustomTableCell align="right">Location</CustomTableCell>
            <CustomTableCell align="right">Hours</CustomTableCell>
            <CustomTableCell align="right">Booth</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.days}
              </CustomTableCell>
              <CustomTableCell align="right">{row.location}</CustomTableCell>
              <CustomTableCell align="right">{row.hours}</CustomTableCell>
              <CustomTableCell align="right">{row.booth}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

Market.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Market);
