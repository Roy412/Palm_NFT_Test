import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import { Box } from "../../../components";
import { useActiveUser } from "../../../utils/hooks";
import useHome from "./useHome";

/**
 * Home Page
 * @constructor
 */
const Home = () => {
  const activeUser = useActiveUser();
  const { handleLogout } = useHome();

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={8} alignItems="center">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Box flexDirection="row" alignItems="center">
          <Typography component="h1" variant="h5" mb={3}>
            Welcome, {activeUser.firstName}
          </Typography>
          <Button variant="text" onClick={handleLogout}>
            Log out
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
