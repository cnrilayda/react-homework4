import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const ProductDetailScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <View>
            <Card>
                <Card.Cover source={{ uri: "https://picsum.photos/200/400" }} />
                <Card.Content>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 10 }}>{item.id}</Text>
                    <Text>Customer ID: {item.customerId}</Text>
                    <Text>Order Date: {item.orderDate}</Text>
                    <Text>Required Date: {item.requiredDate}</Text>
                    <Text>Shipped Date: {item.shippedDate}</Text>
                    <Text>Ship Via: {item.shipVia}</Text>
                    <Text>Ship Name: {item.shipName}</Text>
                </Card.Content>
            </Card>
        </View>
    );
};

export default ProductDetailScreen;
