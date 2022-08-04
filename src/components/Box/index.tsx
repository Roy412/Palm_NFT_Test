import MuiBox from "@mui/material/Box";
import { BoxProps } from "@mui/material";

const Box: React.FC<BoxProps> = (props) => {
  return <MuiBox display="flex" flexDirection="column" {...props} />;
};

export default Box;
