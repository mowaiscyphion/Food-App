import React, { useState } from 'react'
import { Button, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style.js'

const DATA = [
    {
        id: '1',
        title: 'First Item',
        src: require('../../assets/Rectangle-30.png')
    },
    {
        id: '2',
        title: 'Second Item',
        src: require('../../assets/Rectangle-32.png')
    },
    {
        id: '3',
        title: 'Third Item',
        src: require('../../assets/Rectangle-33.png')
    },
    {
        id: '4',
        title: 'forth Item',
        src: require('../../assets/Rectangle-34.png')
    },
    {
        id: '5',
        title: 'forth Item',
        src: require('../../assets/Rectangle-33.png')
    },
    {
        id: '6',
        title: 'forth Item',
        src: require('../../assets/Rectangle-30.png')
    },
];

const Item = ({ item }) => (
    // <Text>{item.id}</Text>
    <View style={{ marginTop: 20 }}>
        <Image style={{ height: 120, width: 100, objectFit: 'contain' }} source={item.src} />
    </View>
);

const BottomFlatList = [
    {
        id: '1',
        title: 'Sweet corn',
        price: 'Rs:120',
        src: require('../../assets/image-6.png')
    },
    {
        id: '2',
        title: 'Blueberry Cake',
        price: 'Rs:350',
        src: require('../../assets/image-8.png')
    },
    {
        id: '3',
        title: 'Chinese Noodles',
        price: 'Rs:250',
        src: require('../../assets/image-9.png')
    },
    {
        id: '4',
        title: 'Kabab Roll',
        price: 'Rs:150',
        src: require('../../assets/image-11.png')
    },
    {
        id: '5',
        title: 'Chinese French',
        price: 'Rs:230',
        src: require('../../assets/image-7.png')
    },
    {
        id: '6',
        title: 'Sweet corn',
        price: 'Rs:120',
        src: require('../../assets/image-6.png')
    }

]

const BottomItems = ({ items }) => (
    <View style={{ marginTop: 20 }}>
        <Image style={{ height: 150, width: 230, objectFit: 'contain' }} source={items.src} />
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{items.title}</Text>
        <Text style={{ fontSize: 14 }}>{items.price}</Text>
    </View>
)


function Home() {
    const [text, setText] = useState('')

    return (
        <ScrollView style={{ padding: 5 }}>
            {/* <View style={styles.container}> */}
            <View style={[{ height: 85 }, styles.rowClass]} >
                <View style={{ flex: 1, justifyContent: 'center', paddingStart: 10 }}>
                    <Text style={[styles.textStyle, { textAlign: 'left' }]}>Deliver to</Text>
                    <Text style={[styles.textStyle, { textAlign: 'left' }]}>Fussels lane, Colombo 06
                        <Icon name="down" size={25} color="#000" />
                    </Text>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/profile.png')}
                    />
                </View>
            </View>
            <View style={{ height: 65, position: 'relative' }}>
                <Icon style={styles.srchIcon} name="search1" size={25} color="#000" />
                <TextInput
                    placeholder='Restaurants, Foods Or Drinks...'
                    style={styles.input}
                    value={text}
                    editable={true}
                    onChange={(e) => setText(e.target.value)}
                />

            </View>
            <View style={{ height: 200, padding: 10 }}>
                <ImageBackground style={styles.images} source={require('../../assets/card.png')} >
                    <View style={styles.imageSec}>
                        <Text style={styles.textStyle}>Free Delivery For {'\n'} 1 Month!!</Text >
                        <Text style={{ textAlign: 'right' }}>You've Order at least Rs 1000 {'\n'} for using free delivery</Text>
                    </View>

                </ImageBackground>
            </View>
            <View style={{ height: 140 }}>
                <FlatList
                    horizontal={true}
                    data={DATA}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ height: 240 }}>
                <View style={styles.rowClass}>
                    <Text style={[styles.textStyle, { textAlign: 'left' }]}>Feature Partners</Text>
                    <Text style={[styles.textStyle]}>See all</Text>
                </View>
                <FlatList
                    horizontal={true}
                    data={BottomFlatList}
                    renderItem={({ item }) => <BottomItems items={item} />}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={<View style={{ width: 10 }}></View>}
                    showsHorizontalScrollIndicator={false}
                />
            </View>


            {/* </View > */}
        </ScrollView>
    )
}



export default Home;