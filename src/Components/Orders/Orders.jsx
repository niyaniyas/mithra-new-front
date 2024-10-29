import React, { useState } from 'react';
import {
    Container,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    Modal,
    Fade,
    TextField,
    Box,
} from '@mui/material';
import './Orders.css'; // Import the custom styles

const ordersData = [
    { id: 1, customer: 'John Doe', date: '2023-10-01', status: 'Shipped', total: '$20.00' },
    { id: 2, customer: 'Jane Smith', date: '2023-10-02', status: 'Pending', total: '$35.50' },
    { id: 3, customer: 'Alice Johnson', date: '2023-10-03', status: 'Delivered', total: '$50.00' },
    { id: 4, customer: 'Bob Brown', date: '2023-10-04', status: 'Cancelled', total: '$15.00' },
];

const OrdersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleOpen = (order) => setSelectedOrder(order);
    const handleClose = () => setSelectedOrder(null);

    const filteredOrders = ordersData.filter(order =>
        order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="container">
            <Typography variant="h4" gutterBottom>
                Order Tracking
            </Typography>
            <TextField
                className="search-bar"
                label="Search by Customer Name"
                variant="outlined"
                fullWidth
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Grid container spacing={3}>
                {filteredOrders.map((order) => (
                    <Grid item xs={12} sm={6} md={4} key={order.id}>
                        <Card className="card" onClick={() => handleOpen(order)}>
                            <CardContent className="card-content">
                                <Typography variant="h6">Order ID: {order.id}</Typography>
                                <Typography variant="body1">Customer: {order.customer}</Typography>
                                <Typography variant="body2">Date: {order.date}</Typography>
                                <Typography variant="body2">Status: {order.status}</Typography>
                                <Typography variant="h6">Total: {order.total}</Typography>
                            </CardContent>
                            <CardActions className="card-actions">
                                <Button size="small" variant="contained" color="primary">
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={!!selectedOrder}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={!!selectedOrder}>
                    <Box className="modal">
                        {selectedOrder && (
                            <>
                                <Typography variant="h6">Order Details</Typography>
                                <Typography>Order ID: {selectedOrder.id}</Typography>
                                <Typography>Customer: {selectedOrder.customer}</Typography>
                                <Typography>Date: {selectedOrder.date}</Typography>
                                <Typography>Status: {selectedOrder.status}</Typography>
                                <Typography>Total: {selectedOrder.total}</Typography>
                            </>
                        )}
                        <Button onClick={handleClose} variant="outlined" style={{ marginTop: 20 }}>
                            Close
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
};

export default OrdersPage;
