import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { MoneyOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Box } from "../../../components";
import useHome from "./useHome";

/**
 * Home Page
 * @constructor
 */
const Home = () => {
  const { handleLogout, activeUser, userBalance } = useHome();

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={8} alignItems="center">
        <Box flexDirection="row" alignItems="center">
          <Typography component="h1" variant="h5" mb={3}>
            Welcome, {activeUser.firstName}!
          </Typography>
          <Button variant="text" onClick={handleLogout}>
            Log out
          </Button>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <MoneyOutlined />
          </Avatar>
          {userBalance}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
