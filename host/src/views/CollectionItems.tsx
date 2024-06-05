import { Box, Grid, Card, Typography, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import PageContainer from '../components/container/PageContainer';
import { useLoaderData } from 'react-router-dom';

const CollectionItems = () => {
    const nfts = useLoaderData() as NftItem[]
    return (
        <PageContainer title="Tokens" description="this is Token List page">
            <Grid container spacing={0}>
                {nfts.map((nft: NftItem) => (
                    <Grid item xs={12} lg={3} sm={4} display="flex" alignItems="stretch" key={nft.tokenId}>
                        <Card sx={{ p: 0, width: '100%' }}>
                            <img src={nft.image} alt="img" width="100%" height="350px" />
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    component={Link}
                                    to={`${nft.tokenId}`}
                                    fontWeight="500"
                                    sx={{
                                        display: 'block',
                                        textDecoration: 'none',
                                        color: (theme) =>
                                            `${theme.palette.mode === 'dark'
                                                ? theme.palette.grey.A200
                                                : 'rgba(0, 0, 0, 0.87)'
                                            }`,
                                    }}
                                >
                                    {nft.name}
                                </Typography>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{
                                        mt: '15px',
                                    }}
                                >
                                    <Typography variant="h5" sx={{ mr: 'auto' }}>
                                        {nft.currentPrice}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </PageContainer>
    )
};

export default CollectionItems;
