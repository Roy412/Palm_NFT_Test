import { Typography } from "@mui/material";
import useTransactions from "./useTransactions";
import { Box } from "../../../components";
import { ITransaction } from "../../../redux/transactions/types";
import Layout from "../../Layout";
import { Wrapper, ItemContainer } from "./styles";

const TransactionItem = ({ tx }: { tx: ITransaction }) => {
  return (
    <ItemContainer>
      <Box>
        <Typography variant="h6">${tx.amount}</Typography>
        <Typography variant="subtitle2">{tx.from || " "}</Typography>
      </Box>
      <Box alignItems="flex-end">
        <Typography variant="body2">{tx.type}</Typography>
        <Typography variant="body1" sx={{ mt: "5px" }}>
          {new Date(tx.createdAt).toLocaleDateString()}
        </Typography>
      </Box>
    </ItemContainer>
  );
};

/**
 * Transactions Page
 * @constructor
 */
const Transactions = () => {
  const txs = useTransactions();

  return (
    <Layout title="Transactions">
      <Wrapper>
        {txs.map((tx) => (
          <TransactionItem tx={tx} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Transactions;
