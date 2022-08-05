import { Container, MenuItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "../../../components";
import useHome from "./useHome";
import Layout from "../../Layout";

/**
 * Home Page
 * @constructor
 */
const Home = () => {
  const {
    activeUser,
    accountBalance,
    handleDeposit,
    handleSend,
    accounts,
    selAccount,
    handleChangeAccount,
    handleTransactions,
  } = useHome();

  return (
    <Layout title={`Hi ${activeUser.firstName}!`} hasBack={false}>
      <Container component="main" maxWidth="xs">
        <Box mt={1} alignItems="center">
          <TextField
            select
            label="Select Account"
            value={selAccount}
            onChange={handleChangeAccount}
            sx={{ width: 200, alignSelf: "flex-end" }}
          >
            {accounts.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="h6" sx={{ mt: 3 }}>
            Account Balance: ${accountBalance}
          </Typography>
          <Box flexDirection="row" alignItems="center" mt={2}>
            <Button variant="contained" onClick={handleSend}>
              Send
            </Button>
            <Button variant="contained" onClick={handleDeposit} sx={{ mx: 3 }}>
              Deposit
            </Button>
            <Button variant="contained" onClick={handleTransactions}>
              Transactions
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
