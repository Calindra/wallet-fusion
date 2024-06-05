import { Card, CardContent, Box, Grid } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import ProductDetail from './ProductDetail';
import { useLoaderData } from 'react-router-dom';


const NftDetail = () => {
    const nft = useLoaderData() as NftItem
    const imageStyle = {
        borderRadius: '20px', // Set the borderRadius to 20px
        width: '750px',
        height: '750px',
    };

    return (
        <PageContainer title="Token Detail" description="this is Token Detail page">
            <Card>
                <CardContent>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Box sx={{ paddingRight: { xs: 0, lg: '50px' } }}>
                                <img src={nft.image} alt="nm" style={imageStyle} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <ProductDetail />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </PageContainer>
    );
};

export default NftDetail;
