import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { Box } from "components";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import useLogin from "./useLogin";

/**
 * Sign In Screen
 * @constructor
 */
const SignIn = () => {
  const {
    handleSubmit,
    errors,
    submitError,
    profile,
    handleChangeField,
    submitting,
  } = useLogin();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(palm_background.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box my={8} mx={4} alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" mb={1}>
            Sign in
          </Typography>
          <Box width="85%">
            <form noValidate onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={profile.email}
                onChange={handleChangeField}
                error={!!errors.email || !!submitError}
                helperText={errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={profile.password}
                onChange={handleChangeField}
                error={!!errors.password || !!submitError}
                helperText={errors.password || submitError}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting}
              >
                {submitting && <CircularProgress size={18} />}
                &nbsp;&nbsp;&nbsp;Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
