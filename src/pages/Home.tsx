import { Container, Typography } from "@mui/material";
import Posts from "../conmponents/Posts/Posts";
import Department from "../conmponents/Departments/Department";




const Home = () => {
    return (
      <Container>
         <Container sx={{marginTop:"20px"}}>
            <Posts/>
         </Container>
         <Container sx={{marginTop:"20px"}}>
            <Typography variant="h4">Departments</Typography>
            <Department/>
         </Container>
      </Container>
    );
};

export default Home;