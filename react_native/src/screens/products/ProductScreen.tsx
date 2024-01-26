import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IMAGES } from '@/constanta';


const mockItemData = {
    title: 'Pizza 1',
    isNew: true, 
    img_product: IMAGES.product,
    img_buy: IMAGES.buy,
    img_heart: IMAGES.heart,
    new_price: '30',
    old_price: '50',
    description: 'Some long, long, long text.... .... .... .....',
    }
const ProductScreen = () => {
    return ( 
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, styles.row]} >
                <View style={styles.img_container}>
                    <Image source={mockItemData.img_product} style={styles.img}/>
                    <View style={[styles.img_new, styles.isVisible]}>
                        <Text style={[styles.text_mini, styles.text_title]}>New</Text>
                    </View>
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.text_title}> {mockItemData.title} </Text>
                    <View style={styles.price}>
                        <Text style={styles.text_title}> {mockItemData.new_price + '$'} </Text>
                        <Text style={[styles.text_crossed, styles.isVisible]}> {'  ' + mockItemData.old_price + '$'} </Text>
                    </View> 
                    <Text> {mockItemData.description} </Text>
                </View>
                <View style={ styles.column}>
                    <View style={styles.img_flex}>
                        <Image source={mockItemData.img_heart} style={styles.img_mini}/>
                    </View>
                    <View style={styles.row}>
                        <Text> Buy</Text>
                        <Image source={mockItemData.img_buy} style={styles.img_mini}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    isVisible: {
        opacity: mockItemData.isNew === true ? 1 : 0
    },
    container: {
        backgroundColor:'#f8f0f0',
        borderWidth: 1,
        borderColor: '#c1c0c0',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 6,
            height: 6,
          },
        shadowOpacity:0.4,
        shadowRadius: 3,
    },
    price: {
        marginTop: 10,
        marginBottom: 15,
        flexDirection: 'row', 
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    column: {
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    img_container:{
        width: 90, 
        height: 90,
        padding:10,
    },
    text_container:{
        maxWidth: '70%',
        flexGrow:1,
        paddingLeft: 5,
    },
    img_flex: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    img: {
        width: 70, 
        height: 70,
        borderWidth: 1,
        borderColor: '#c1c0c0',
    },
    img_mini: {
        width: 20, 
        height: 20,
    },
    img_new: {
        position: "absolute",
        top: 0,
        right: 0,
        padding: 5,
        borderWidth: 1,
        backgroundColor: '#d9d9d9',
        borderColor: '#c1c0c0',
        borderRadius: 100,
    },
    text_mini: {
        fontSize: 10,
    },
    text_title: {
        fontWeight: "bold",
        textTransform: 'uppercase'
    },
    text_crossed: {
        textDecorationLine: "line-through",
    },
});

export { ProductScreen };
