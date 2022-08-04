import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { MoneyOutlined } from "@mui/icons-material";
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
          <Box flexDirection="row" alignItems="center">
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <MoneyOutlined />
            </Avatar>
            {userBalance}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
