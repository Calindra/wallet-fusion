import React from 'react';
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

import img1 from '../../assets/images/users/1.jpg';
import img2 from '../../assets/images/users/2.jpg';
import img3 from '../../assets/images/users/3.jpg';
import img4 from '../../assets/images/users/4.jpg';
import img5 from '../../assets/images/users/5.jpg';

const basics = [
    {
        id: '1',
        imgsrc: img1,
        name: 'Sunil Joshi',
        price: '0.01',
        volume: '5'
    },
    {
        id: '2',
        imgsrc: img2,
        name: 'Andrew McDownland',
        price: '0.75',
        volume: '183'
    },
    {
        id: '3',
        imgsrc: img3,
        name: 'Christopher Jamil',
        price: '0.15',
        volume: '24'
    },
    {
        id: '4',
        imgsrc: img4,
        name: 'Nirav Joshi',
        price: '0.48',
        volume: '75'
    },
    {
        id: '5',
        imgsrc: img5,
        name: 'Micheal Doe',
        price: '0.84',
        volume: '116'
    },
];

const BasicTable = () => (
    <PageContainer title="Basic Table" description="this is Basic Table page">
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
                            {basics.map((basic) => (
                                <TableRow key={basic.id}>
                                    <TableCell>
                                        <Box display="flex" alignItems="center">
                                            <Avatar
                                                src={basic.imgsrc}
                                                alt={basic.imgsrc}
                                                width="35"
                                                sx={{
                                                    borderRadius: '100%',
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
                                        <Typography variant="h6">{basic.price} ETH</Typography>
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
