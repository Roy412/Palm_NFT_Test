import { Container } from "@mui/material";
import { Button } from "components";
import TextField from "@mui/material/TextField";
import Layout from "../../Layout";
import useDeposit from "./useDeposit";

/**
 * DEPOSIT SCREEN
 * @constructor
 */
const Deposit = () => {
  const { amount, error, handleChangeAmount, handleDeposit, loading } =
    useDeposit();

  return (
    <Layout title="Deposit">
      <Container component="main" maxWidth="xs">
        <TextField
          fullWidth
          sx={{ mt: 3, mb: 1 }}
          type="number"
          label="Amount($)"
          autoFocus
          value={amount}
          onChange={handleChangeAmount}
          error={!!error}
          helperText={error}
        />

        <Button variant="contained" onClick={handleDeposit} loading={loading}>
          Deposit
        </Button>
      </Container>
    </Layout>
  );
};

export default Deposit;
