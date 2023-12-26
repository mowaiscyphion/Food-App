import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AIcon from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './style.js'

function Order() {
    return (
        <ScrollView style={{ padding: 5, backgroundColor: '#fff' }} >
            <ImageBackground resizeMode="contain" style={{ height: 270, width: '100%' }} source={require('../../assets/image-6.png')}>
                <View style={styles.imageContent}>
                    <AIcon size={22} name="circle-with-cross" />
                    <View style={styles.rightIcons}>
                        <Icon size={22} name="search1" />
                        <AIcon size={22} name="dots-three-horizontal" />
                    </View>
                </View>

            </ImageBackground>
            <View>
                <Text style={{ fontSize: 40, color: '#000' }}>
                    Cheesy Blueberry Cake
                </Text>
                <Text style={{ fontSize: 22 }}>Cakes & Bakes - Indian - Sri Lankan</Text>
            </View>
            <View style={styles.heading}>
                <Text style={styles.text}>48 Dehiwala Rd, Borelesgamuwa, India SA 10290
                    Tap for hours, info, and more</Text>
                <Icon name="right" size={20} />
            </View>
            <View style={styles.rate}>
                <Text style={styles.font}>Rs : 800 </Text>
                <Text style={styles.font}> 2.04km </Text>
                <Text style={styles.font}> 4.8</Text>
                <Text style={{ fontSize: 14 }}>140+ Reviews</Text>
            </View>
            <View style={styles.rate}>
                <TouchableOpacity style={{ padding: 10, paddingHorizontal: 15, backgroundColor: '#024220', borderRadius: 50 }}><Text style={{ color: '#fff' }}>See Silimar</Text></TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, paddingHorizontal: 15, backgroundColor: '#024220', borderRadius: 50 }}><Text style={{ color: '#fff' }}>Most Popular</Text></TouchableOpacity>
            </View>
            <View style={[{ marginTop: 10 }, styles.rightIcons]}>
                <Text style={{ fontSize: 18, color: '#024220' }}>All Menu</Text>
                <Text style={{ fontSize: 18, color: '#000' }}>Cakes</Text>
                <Text style={{ fontSize: 18, color: '#000' }}>Pastries</Text>
                <Text style={{ fontSize: 18, color: '#000' }}>Sandwich</Text>
                <Text style={{ fontSize: 18, color: '#000' }}>Drinks</Text>
            </View>
            <View style={[{ justifyContent: "space-start" }, styles.rightIcons]}>
                <Image style={{ width: 90, height: 90, objectFit: 'contain' }} source={require('../../assets/image-9.png')} />
                <View>
                    <Text>Triple Chocolate Brownie</Text>
                    <Text>Rs 650 , Free Delivery</Text>
                    <Text style={{ color: '#fff', backgroundColor: "#024220", width: 25, textAlign: 'center', borderRadius: 50, padding: 2 }}>4.3</Text>
                </View>
            </View>
            <View style={[{ justifyContent: "space-start" }, styles.rightIcons]}>
                <Image style={{ width: 90, height: 90, objectFit: 'contain' }} source={require('../../assets/image-9.png')} />
                <View>
                    <Text>Triple Chocolate Brownie</Text>
                    <Text>Rs 650 , Free Delivery</Text>
                    <Text style={{ color: '#fff', backgroundColor: "#024220", width: 25, textAlign: 'center', borderRadius: 50, padding: 2 }}>4.3</Text>
                </View>
            </View>
        </ScrollView>
    )
}



export default Order;