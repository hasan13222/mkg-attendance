import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StatusBar, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { COLORS, FONTS } from '@/constants/theme';
import { router } from 'expo-router';

const HeaderMenu = ({ title}) => {
    const {colors} = useTheme();
    
    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor: "#ff1874",
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:5,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25
        }}>
            <StatusBar />
            {/* <TouchableOpacity
            onPress={() => drawerProps.navigation.openDrawer()}
                style={{
                    height:50,
                    width:50,
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <FeatherIcon color={"white"} name='menu' size={18}/>
            </TouchableOpacity> */}
            <Text style={{...FONTS.h6,color:"white",flex:1, paddingLeft: 15}}>{title}</Text>
            <TouchableOpacity
            onPress={() => router.navigate('/GeneralSMS')}
                style={{
                    height:50,
                    width:50,
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <FeatherIcon color={"white"} name='message-square' size={20}/>
            </TouchableOpacity>
            {/* <TouchableOpacity
                style={{
                    height:50,
                    width:50,
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <View
                    style={{
                        height:18,
                        width:18,
                        borderRadius:20,
                        position:'absolute',
                        top:7,
                        right:10,
                        zIndex:1,
                        backgroundColor:COLORS.warning,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <Text style={{...FONTS.fontXs,color:COLORS.white,...FONTS.fontBold,lineHeight:17}}>9</Text>
                </View>
                <FeatherIcon color={"white"} name='bell' size={20}/>
            </TouchableOpacity> */}
        </View>
    );
};

export default HeaderMenu;