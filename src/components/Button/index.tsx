import { CircularProgress, Button as MUIButton } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

export interface IButton extends ButtonProps {
  loading: boolean;
}

/**
 * Button Component
 * @param loading
 * @param children
 * @constructor
 */
const Button = ({ loading, children }: IButton) => {
  return (
    <MUIButton
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      disabled={loading}
    >
      {loading && <CircularProgress size={18} />}
      &nbsp;&nbsp;&nbsp;{children}
    </MUIButton>
  );
};

export default Button;
