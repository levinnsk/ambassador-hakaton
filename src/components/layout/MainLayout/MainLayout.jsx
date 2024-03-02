import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../../Header/Header';
import MenuLeft from '../../MenuMain/MenuLeft';

const MainLayout = () => {
    return (
        <>
            <Box sx={{ display: 'flex', width: '1440px', height: '100vh', margin: 'auto', flexDirection: 'column' }}>
                <Header />
                <Box sx={{ display: 'flex', width: '1440px', height: '100%', margin: '0' }}>
                    <MenuLeft />
                    <Box sx={{ display: 'flex', width: '100%', border: '2px solid grey' }}>
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default MainLayout;
