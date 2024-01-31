import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  width?: number;
  height?: number;
}

/**
 * Builds a basic box with a specified width and height.
 * The concept is taken straight from Flutter. (https://api.flutter.dev/flutter/widgets/SizedBox-class.html)

 * @returns a Sized Box
 */
export function SizedBox({ width = 0, height = 0 }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: theme.spacing(width),
        height: theme.spacing(height),
      }}
    />
  );
}
