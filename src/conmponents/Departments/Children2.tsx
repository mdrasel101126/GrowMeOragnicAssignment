
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChangeEvent, useState } from 'react';

const Children2 = () => {
  const [checked, setChecked] = useState([false, false, false]);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], event.target.checked]);
  };

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const allChecked = event.target.checked;
    setChecked([allChecked, allChecked, allChecked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="graphic_design"
        control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
      />
      <FormControlLabel
        label="product_design"
        control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="web_design"
        control={<Checkbox checked={checked[2]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="design"
        control={
          <Checkbox
            checked={checked[0] && checked[1] && checked[2]}
            indeterminate={
              (checked[0] && !checked[1] && !checked[2]) ||
              (!checked[0] && checked[1] && !checked[2]) ||
              (!checked[0] && !checked[1] && checked[2]) ||
              (checked[0] && checked[1] && !checked[2]) ||
              (checked[0] && !checked[1] && checked[2]) ||
              (!checked[0] && checked[1] && checked[2])
            }
            onChange={handleParentChange}
          />
        }
      />
      {children}
    </div>
  );
}

export default Children2;