import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import WalletIcon from '@mui/icons-material/Wallet';
import {
    AppBar,
    Box,
    // Divider,
    IconButton,
    Toolbar,
    Menu,
    // MenuItem,
    Typography,
    Avatar,
    Button,
    // useMediaQuery
} from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';

// import AuthService from "../../../services-v2/blind-guardian-api/AuthService";
// import Storage from "../../../services-v2/storage/Storage";
// import { FashionOrganizationRole } from "../../../models-v2/OrganizationUser";
// import { getGlobalMenuItems } from "./data";
// import ProfileDropdown from "../../../components-v2/profile-dropdown/ProfileDropdown";
// import LogoIcon from "../../../components-v2/logo-icon/LogoIcon";
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
    // const navigate = useNavigate();
    // const mdUp = useMediaQuery((theme: any) => theme.breakpoints.up('md'));
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    // 4
    const [anchorEl4, setAnchorEl4] = React.useState(null);
    const [userData, setUserData] = React.useState({ email: "", name: "" });


    // const params = useParams()
    // React.useEffect(() => {
    //     try {
    //         const token = AuthService.getDecodedToken();
    //         const email = token.email;
    //         const name = email.match(/^([^@]*)@/)[1];
    //         const organization = JSON.parse(
    //             Storage.get(Storage.KEYS.ORGANIZATION_DATA) as any
    //         );
    //         const role = organization?.role
    //             ? FashionOrganizationRole[organization.role as keyof typeof FashionOrganizationRole]
    //             : "-";
    //         const data = {
    //             name,
    //             email,
    //             role
    //         };
    //         setUserData(data);
    //     } catch (err) {
    //         console.error(
    //             "Um error ocorreu ao tentar renderizar o Header do layout. "
    //         );
    //     }
    // }, []);

    const handleClick3 = (event: any) => {
        setAnchorEl3(event.currentTarget);
    };

    const handleClose3 = () => {
        setAnchorEl3(null);
    };

    const handleClick4 = (event: any) => {
        setAnchorEl4(event.currentTarget);
    };

    const handleClose4 = () => {
        setAnchorEl4(null);
    };

    // const navigateAndCloseMenu = (menuItemPath: string) => {
    //     setAnchorEl3(null)
    //     navigate(menuItemPath)
    // }

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

                    {/* <Box>
                        {
                            getGlobalMenuItems(params).map((menuItem: any, idx: number) => (
                                <React.Fragment key={`${menuItem.key}-${idx}`}>
                                    <MenuItem
                                        id={menuItem.key}
                                        onClick={() => navigateAndCloseMenu(menuItem.path)}
                                        sx={{
                                            pt: 3,
                                            pb: 3
                                        }}
                                    >
                                        <Box display="flex" alignItems="center">
                                            <Button
                                                sx={{
                                                    backgroundColor: theme =>
                                                        theme.palette.primary.light,
                                                    color: theme => theme.palette.primary.main,
                                                    boxShadow: "none",
                                                    minWidth: "50px",
                                                    width: "45px",
                                                    height: "40px",
                                                    borderRadius: "10px"
                                                }}
                                            >
                                                <FeatherIcon icon={menuItem.icon} width="18" height="18" />
                                            </Button>
                                            <Box
                                                sx={{
                                                    ml: 2
                                                }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        lineHeight: "1.235"
                                                    }}
                                                >
                                                    {menuItem.title}
                                                </Typography>
                                                <Typography
                                                    color="textSecondary"
                                                    variant="h6"
                                                    fontWeight="400"
                                                >
                                                    {menuItem.subtitle}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </MenuItem>
                                    <Divider
                                        style={{
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                    />
                                </React.Fragment>
                            ))
                        }
                    </Box> */}
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
