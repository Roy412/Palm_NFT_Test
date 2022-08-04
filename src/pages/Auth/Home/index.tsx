import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "../../../components";
import useHome from "./useHome";
import Layout from "../../Layout";

/**
 * Home Page
 * @constructor
 */
const Home = () => {
  const { activeUser, userBalance, handleDeposit } = useHome();

  return (
    <Layout title={`Hi ${activeUser.firstName}!`}>
      <Container component="main" maxWidth="xs">
        <Box mt={1} alignItems="center">
          <Typography variant="h6">User Balance: ${userBalance}</Typography>
          <Box flexDirection="row" alignItems="center">
            <Button variant="contained" onClick={handleDeposit}>
              Deposit
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
