import CircularProgress from "@mui/material/CircularProgress";

import { Box } from "components";

const AppLoading = () => (
  <Box alignItems="center" justifyContent="center" height="100vh">
    <CircularProgress size={90} />
  </Box>
);

export default AppLoading;
