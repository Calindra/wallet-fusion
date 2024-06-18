import {
    Menu,
    Box,
    Typography,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";

interface WalletProps {
    anchorEl4?: any,
    handleClose4: any
}
const Wallet = ({ anchorEl4, handleClose4 }: WalletProps) => {
    return (
        <Menu
            id="profile-menu"
            // anchorEl={anchorEl4}
            keepMounted
            open={Boolean(anchorEl4)}
            onClose={handleClose4}
            sx={{
                "& .MuiMenu-paper": {
                    width: "385px",
                    right: 0,
                    top: "70px !important"
                },
                "& .MuiList-padding": {
                    p: "30px"
                }
            }}
        >
            <Box
                sx={{
                    mb: 1
                }}
            >
                <Box display="flex" alignItems="center">
                    <Typography variant="h4" fontWeight="500">
                        Perfil do Usuário
                    </Typography>
                </Box>
            </Box>

            {/* <ProfileDropdown userData={userData} /> */}
            <Link
                style={{
                    textDecoration: "none"
                }}
                to="/logout"
            >
                <Button
                    id="button-exit"
                    sx={{
                        mt: 2,
                        display: "block",
                        width: "100%"
                    }}
                    variant="contained"
                    color="primary"
                >
                    Sair
                </Button>
            </Link>
        </Menu>
    )
}

export default Wallet