import { Card, CardContent, Box, Grid } from '@mui/material';

// import ProductDesc from '../../../components/shop/ProductDesc';

import PageContainer from '../../components/container/PageContainer';

// import ProductCarousel from '../../../components/shop/ProductCarousel';
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
        <PageContainer title="Shop Detail" description="this is Shop Detail page">
            {/* breadcrumb */}
            {/* <Breadcrumb title="eCommerce Shop" items={BCrumb} /> */}
            {/* end breadcrumb */}
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
            {/* <ProductDesc /> */}
        </PageContainer>
    );
};

export default NftDetail;
