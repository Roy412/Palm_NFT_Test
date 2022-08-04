import AppBar from "@mui/material/AppBar";
import { Box } from "components";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import useLayout from "./useLayout";
import { Wrapper } from "./styles";

export interface ILayout {
  title: string;
  children: React.ReactNode;
  hasBack?: boolean;
}

/**
 * Layout Container
 * @param children
 * @param title
 * @param hasBack
 * @constructor
 */
const Layout = ({ children, title, hasBack = true }: ILayout) => {
  const { handleLogout, handleBack } = useLayout();

  return (
    <Wrapper>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            {hasBack ? (
              <Button variant="text" onClick={handleBack}>
                Back
              </Button>
            ) : (
              ""
            )}
            <Typography variant="h6" color="inherit" noWrap>
              {title}
            </Typography>
            <Button variant="text" onClick={handleLogout}>
              Log out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          {children}
        </Paper>
      </Container>
    </Wrapper>
  );
};

export default Layout;
