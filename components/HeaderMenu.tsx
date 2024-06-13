import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { COLORS, FONTS } from '@/constants/theme';

const HeaderMenu = ({drawerProps, title}) => {
    const {colors} = useTheme();
    
    const navigation = useNavigation();
    return (
        <View style={{
            height:50,
            backgroundColor: colors.card,
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:5,
            shadowColor: "rgba(0,0,0,.6)",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,
        }}>
            <TouchableOpacity
            onPress={() => drawerProps.navigation.openDrawer()}
                style={{
                    height:50,
                    width:50,
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <FeatherIcon color={colors.text} name='menu' size={18}/>
            </TouchableOpacity>
            <Text style={{...FONTS.h6,color:colors.text,flex:1}}>{title}</Text>
            <TouchableOpacity
                style={{
                    height:50,
                    width:50,
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <FeatherIcon color={colors.text} name='search' size={20}/>
            </TouchableOpacity>
            <TouchableOpacity
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
                <FeatherIcon color={colors.text} name='bell' size={20}/>
            </TouchableOpacity>
        </View>
    );
};

export default HeaderMenu;