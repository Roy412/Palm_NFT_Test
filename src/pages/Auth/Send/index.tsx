import { Container, MenuItem } from "@mui/material";
import { Button, Box } from "components";
import TextField from "@mui/material/TextField";
import Layout from "../../Layout";
import useSend from "./useSend";
import AddAccountDlg from "./AddAccountDlg";
import { AddAccountButton } from "./styles";

/**
 * SEND SCREEN
 * @constructor
 */
const Send = () => {
  const {
    amount,
    error,
    handleChangeAmount,
    handleSend,
    loading,
    accounts,
    selAccount,
    handleChangeAccount,
    accountError,
    dlgOpen,
    setDlgOpen,
  } = useSend();

  return (
    <Layout title="Send">
      <Container component="main" maxWidth="xs">
        <Box flexDirection="row" justifyContent="space-between">
          <TextField
            select
            label="Select Account"
            value={selAccount}
            onChange={handleChangeAccount}
            error={!!accountError}
            helperText={accountError}
            sx={{ width: 200 }}
          >
            {accounts.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>

          <AddAccountButton
            variant="contained"
            onClick={() => setDlgOpen(true)}
          >
            Add account
          </AddAccountButton>
        </Box>
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
        <Button variant="contained" onClick={handleSend} loading={loading}>
          Send
        </Button>
      </Container>
      <AddAccountDlg open={dlgOpen} handleClose={() => setDlgOpen(false)} />
    </Layout>
  );
};

export default Send;
