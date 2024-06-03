import {
    Card,
    CardContent,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Avatar
} from '@mui/material';

import PageContainer from '../container/PageContainer';
import { collections } from "../../data/collections"

import img1 from '../../assets/images/users/1.jpg';

const BasicTable = () => (
    <PageContainer title="Collections" description="this is Basic Table page">
        <Card>
            <CardContent>
                <Box
                    sx={{
                        overflow: {
                            xs: 'auto',
                            sm: 'unset',
                        },
                    }}
                >
                    <Table
                        aria-label="simple table"
                        sx={{
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5">Collection</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h5">Floor Price</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h5">Volume</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {collections.map((basic) => (
                                <TableRow key={basic.id}>
                                    <TableCell>
                                        <Box display="flex" alignItems="center">
                                            <Avatar
                                                alt={basic.image}
                                                src={basic.image}
                                                sx={{
                                                    borderRadius: '10%',
                                                    width: 50,
                                                    height: 50

                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    ml: 2,
                                                }}
                                            >
                                                <Typography variant="h6" fontWeight="600">
                                                    {basic.name}
                                                </Typography>
                                                <Typography color="textSecondary" variant="h6" fontWeight="400">
                                                    helo
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h6">{basic.floorPrice} ETH</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h6">${basic.volume} ETH</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </CardContent>
        </Card>
    </PageContainer>
);

export default BasicTable;
