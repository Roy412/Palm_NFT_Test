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
  const { activeUser, userBalance, handleDeposit, handleSend } = useHome();

  return (
    <Layout title={`Hi ${activeUser.firstName}!`} hasBack={false}>
      <Container component="main" maxWidth="xs">
        <Box mt={1} alignItems="center">
          <Typography variant="h6">User Balance: ${userBalance}</Typography>
          <Box flexDirection="row" alignItems="center" mt={2}>
            <Button variant="contained" onClick={handleSend} sx={{ mr: 3 }}>
              Send
            </Button>
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
