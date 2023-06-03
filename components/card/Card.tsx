import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CardProps } from './CardPorop';


const Card = (props: CardProps) => {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Image source={props.imgUrl} style={styles.image} />
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',

    },
    image: {
        height: 250,
        resizeMode: 'cover'
    },
})