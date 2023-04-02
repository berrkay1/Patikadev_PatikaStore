import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StoreCard = ({ store }) => {
    
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.cardImage} source={{ uri: store.item.imgURL }}

            />
            <Text style={styles.cardTitle}>{store.item.title}</Text>
            <Text style={styles.price}>{store.item.price}</Text>
            {store.item.inStock && <Text style={styles.stok}>STOKTA YOK</Text>}
        </View>
    )
}

export default StoreCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ECEFF1',
        padding: 5,
        width: Dimensions.get('window').width / 2.3,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',

    },
    cardImage: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 100,
        height: 100,
        flex: 1,


    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 15,
        color: '#808080'
    },
    stok: {
        color: 'red',
        fontSize: 17,
        fontWeight: 'bold'
    }
})