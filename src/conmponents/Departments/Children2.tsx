import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";


const Children2 = () => {
    //console.log(dept);
    const [checked, setChecked] = useState([false, false,false]);
  
    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked,event.target.checked]);
    };
  
   
    const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
  
    const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked,checked[0]]);
    };


    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label="graphic_design"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="product_design"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </Box>
      );
    return (
        <div>
        <FormControlLabel
          label="design"
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

export default Children2;