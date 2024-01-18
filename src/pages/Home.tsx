import { Container } from "@mui/material";
import Posts from "../conmponents/Posts/Posts";
import Department from "../conmponents/Departments/Department";




const Home = () => {
    return (
      <Container>
         <Container>
            <Posts/>
         </Container>
         <Container>
            <Department/>
         </Container>
      </Container>
    );
};

export default Home;