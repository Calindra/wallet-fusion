import {
  Box,
  Typography,
  Button,
  Divider,
} from '@mui/material';

import { useRouteLoaderData } from 'react-router-dom';

const ProductDetail = () => {
  const nft = useRouteLoaderData("nft_detail") as NftItem

  return (
    <Box>
      <Typography
        fontWeight="600"
        sx={{
          fontSize: {
            xs: '24px',
            sm: '30px',
            lg: '30px',
          },
          mt: '5px',
        }}
      >
        {nft.name}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="400"
        sx={{
          mt: '10px',
          color: (theme) => theme.palette.grey.A200,
        }}
      >
        {nft.description}
      </Typography>

      <Typography
        fontWeight="600"
        sx={{
          fontSize: {
            xs: '24px',
            sm: '30px',
            lg: '30px',
          },
          mt: '20px',
        }}
      >
        {nft.currentPrice} {nft.coin}
      </Typography>

      <Divider />
      <Button
        variant="contained"
        size="large"
        color="secondary"
        sx={{
          mt: '20px',
          pt: '13px',
          pb: '13px',
          display: 'block',
          width: '100%',
          borderRadius: '9px',
        }}
      >
        Buy Now
      </Button>
    </Box>
  );
};

export default ProductDetail;
