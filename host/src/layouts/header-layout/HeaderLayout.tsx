import { useEffect } from 'react';
import { experimentalStyled, Container, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import { TopbarHeight } from '../../assets/global/Theme-variable';

const MainWrapper = experimentalStyled('div')(() => ({
    display: 'flex',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
}));
const PageWrapper = experimentalStyled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',

    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
        paddingTop: TopbarHeight,
    },
    [theme.breakpoints.down('lg')]: {
        paddingTop: '64px',
    },
}));

const HeaderLayout = () => {
    useEffect(() => {
        console.log("SSSS")
    }, [])
    const INIT_STATE = {
        activeDir: "ltr",
        activeNavbarBg: "#0b70fb",
        activeSidebarBg: "#ffffff",
        activeMode: "dark",
        activeTheme: "BLUE_THEME",
        SidebarWidth: 240
    };
    const customizer = INIT_STATE
    
    return (
        <MainWrapper className={customizer.activeMode === 'dark' ? 'darkbg' : ''}>
            <Header
                sx={{
                    backgroundColor: customizer.activeMode === 'dark' ? '#282C34' : '#fafbfb',
                }}
            />

            <PageWrapper>
                <Container
                    maxWidth={false}
                    sx={{
                        paddingTop: '20px',
                    }}
                >
                    <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
                        <Outlet />
                    </Box>
                </Container>
            </PageWrapper>
        </MainWrapper>
    );
};

export default HeaderLayout;
