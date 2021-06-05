import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import getBreeds from '../helpers/getBreeds';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectDogs({ breedSelected, setBreed }) {
  const history = useHistory();
  const classes = useStyles();
  const [breeds, setBreeds] = React.useState([]);

  const handleChange = (event) => {
    setBreed(event.target.value);
    history.push({ pathname: `/${event.target.value}` });
  };

  React.useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      setBreeds(newBreeds);
    });
  };

  return (
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>Breed</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={breedSelected}
          onChange={handleChange}
          label='Breed'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {breeds.map((breed) => (
            <MenuItem value={breed}>{breed}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
