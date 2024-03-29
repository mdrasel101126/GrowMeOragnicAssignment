import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";


const Children = () => {
    //console.log(dept);
    const [checked, setChecked] = useState([false, false]);
  
    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
  
    const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
  
    const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label="support"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="customer_success"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </Box>
      );
    return (
        <div>
        <FormControlLabel
          label="customer_service"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </div>
    );
};

export default Children;