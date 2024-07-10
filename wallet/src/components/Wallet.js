import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, Box, Typography, Button, } from "@mui/material";
import { Link } from "react-router-dom";
const Wallet = ({ anchorEl4, handleClose4 }) => {
    return (_jsxs(Menu, { id: "profile-menu", 
        // anchorEl={anchorEl4}
        keepMounted: true, open: Boolean(anchorEl4), onClose: handleClose4, sx: {
            "& .MuiMenu-paper": {
                width: "385px",
                right: 0,
                top: "70px !important"
            },
            "& .MuiList-padding": {
                p: "30px"
            }
        }, children: [_jsx(Box, { sx: {
                    mb: 1
                }, children: _jsx(Box, { display: "flex", alignItems: "center", children: _jsx(Typography, { variant: "h4", fontWeight: "500", children: "Perfil do Usu\u00E1rio" }) }) }), _jsx(Link, { style: {
                    textDecoration: "none"
                }, to: "/logout", children: _jsx(Button, { id: "button-exit", sx: {
                        mt: 2,
                        display: "block",
                        width: "100%"
                    }, variant: "contained", color: "primary", children: "Sair" }) })] }));
};
export default Wallet;
