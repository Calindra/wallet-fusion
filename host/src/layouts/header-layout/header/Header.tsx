import React from "react";
import WalletIcon from '@mui/icons-material/Wallet';
import {
    AppBar,
    Box,
    Toolbar,
    Menu,
    Typography,
    Button,
} from "@mui/material";

import logoCartesi from "../../../assets/cartesi-logo.png"
import Account from "../../../components/wallet/Account";
import WalletOptions from "../../../components/wallet/WalletOptions";
import { useAccount } from 'wagmi'

interface HeaderProps {
    sx?: object,
    customClass?: string
}

function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <WalletOptions />
}

const Header = ({ sx, customClass }: HeaderProps) => {
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    // 4
    const [anchorEl4, setAnchorEl4] = React.useState(null);


    const handleClose3 = () => {
        setAnchorEl3(null);
    };

    const handleClick4 = (event: any) => {
        setAnchorEl4(event.currentTarget);
    };

    const handleClose4 = () => {
        setAnchorEl4(null);
    };

    return (
        <AppBar sx={sx} elevation={0} className={customClass}>
            <Toolbar>
                <img src={logoCartesi} alt="Cartesi" width="50" />

                <Menu
                    id="service-menu"
                    anchorEl={anchorEl3}
                    keepMounted
                    open={Boolean(anchorEl3)}
                    onClose={handleClose3}
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
                                Serviços
                            </Typography>
                        </Box>
                    </Box>
                </Menu>

                <Box flexGrow={1} />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick4}
                    startIcon={<WalletIcon sx={{ fontWeight: "600px" }} />}
                >
                    Connect
                </Button>


                <Menu
                    id="profile-menu"
                    anchorEl={anchorEl4}
                    keepMounted
                    open={Boolean(anchorEl4)}
                    onClose={handleClose4}
                    sx={{
                        "& .MuiMenu-paper": {
                            width: "270px",
                            right: 0,
                            top: "70px !important"
                        },
                        "& .MuiList-padding": {
                            p: "30px"
                        }
                    }}
                >
                    <ConnectWallet />
                </Menu>
            </Toolbar>
        </AppBar >
    );
};

export default Header;
