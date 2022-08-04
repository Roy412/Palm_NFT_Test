import { Container, Typography } from "@mui/material";
import { Box } from "../../../components";
import useHome from "./useHome";
import Layout from "../../Layout";

/**
 * Home Page
 * @constructor
 */
const Home = () => {
  const { activeUser, userBalance } = useHome();

  return (
    <Layout title={`Hi ${activeUser.firstName}!`}>
      <Container component="main" maxWidth="xs">
        <Box mt={8} alignItems="center">
          <Typography variant="h6">User Balance: ${userBalance}</Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
