import React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Switch =({unit, handleUnitToggle, checked}) => {
  return (
    <div>
      <Switch {...label} defaultChecked color="secondary" 
        checked={checked}
        onChange={handleUnitToggle}
        />
    </div>
  );
}

<FormGroup>
  <FormControlLabel control={<Switch defaultChecked />} label={'C'} />
  <FormControlLabel required control={<Switch />} label={'F'}/>
  <FormControlLabel disabled control={<Switch />} label="" />
</FormGroup>

export default Switch;