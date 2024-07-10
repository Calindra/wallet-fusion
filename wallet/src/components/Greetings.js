import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
const Greetings = ({ name }) => {
    return (_jsx(Box, { sx: {
            mb: 1
        }, children: _jsx(Box, { display: "flex", alignItems: "center", children: _jsx(Typography, { variant: "h4", fontWeight: "500", children: name ? `Hello, ${name}` : "Hello" }) }) }));
};
export default Greetings;
