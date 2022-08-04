import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useActiveUser } from "../../../utils/hooks";

/**
 * Home Page
 * @constructor
 */
const Home = () => {
  const activeUser = useActiveUser();

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5" mb={3}>
        Welcome, {activeUser.firstName}
      </Typography>
    </Container>
  );
};

export default Home;
