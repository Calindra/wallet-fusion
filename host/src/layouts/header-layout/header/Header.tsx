import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import WalletIcon from '@mui/icons-material/Wallet';
import {
    AppBar,
    Box,
    // Divider,
    // IconButton,
    Toolbar,
    Menu,
    // MenuItem,
    Typography,
    Avatar,
    Button,
    // useMediaQuery
} from "@mui/material";
// import AppsIcon from '@mui/icons-material/Apps';

// import AuthService from "../../../services-v2/blind-guardian-api/AuthService";
// import Storage from "../../../services-v2/storage/Storage";
// import { FashionOrganizationRole } from "../../../models-v2/OrganizationUser";
// import { getGlobalMenuItems } from "./data";
// import ProfileDropdown from "../../../components-v2/profile-dropdown/ProfileDropdown";
// import LogoIcon from "../../../components-v2/logo-icon/LogoIcon";
import logoCartesi from "../../../assets/cartesi-logo.png"

interface HeaderProps {
    sx?: object,
    customClass?: string
}

const Header = ({ sx, customClass }: HeaderProps) => {
    // const navigate = useNavigate();
    // const mdUp = useMediaQuery((theme: any) => theme.breakpoints.up('md'));
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    // 4
    const [anchorEl4, setAnchorEl4] = React.useState(null);
    const [userData] = React.useState({ email: "", name: "" });


    // const handleClick3 = (event: any) => {
    //     setAnchorEl3(event.currentTarget);
    // };

    const handleClose3 = () => {
        setAnchorEl3(null);
    };

    const handleClick4 = (event: any) => {
        setAnchorEl4(event.currentTarget);
    };

    const handleClose4 = () => {
        setAnchorEl4(null);
    };

    const openWalletOptions = () => {
        console.log("abre wallet")
    };

    return (
        <AppBar sx={sx} elevation={0} className={customClass}>
            <Toolbar>
                {/* {mdUp ? <LogoIcon enableNavigation /> : ''} */}
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
                    onClick={openWalletOptions}
                    startIcon={<WalletIcon />}
                >
                    Connect
                </Button>

                {/* <Button
                    id="profile-menu-button"
                    aria-label="menu"
                    color="inherit"
                    aria-controls="profile-menu"
                    aria-haspopup="true"
                    onClick={handleClick4}
                >
                    <Box display="flex" alignItems="center">
                        <Avatar
                            sx={{
                                backgroundColor: "primary.main",
                                width: "30px",
                                height: "30px",
                                color: "#fff",
                                ml: "-8px"
                            }}
                        />
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "flex"
                                },
                                alignItems: "center"
                            }}
                        >
                            <Typography
                                color="textSecondary"
                                variant="h5"
                                fontWeight="400"
                                sx={{ ml: 1 }}
                            >
                                Olá,
                            </Typography>
                            <Typography
                                variant="h5"
                                fontWeight="700"
                                sx={{
                                    ml: 1
                                }}
                            >
                                {userData.name}
                            </Typography>
                            <FeatherIcon
                                icon="chevron-down"
                            // width="20"
                            // height="20"
                            />
                        </Box>
                    </Box>
                </Button> */}
                <Menu
                    id="profile-menu"
                    anchorEl={anchorEl4}
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
            </Toolbar>
        </AppBar >
    );
};

export default Header;
