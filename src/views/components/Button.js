import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import COLORS from "../../consts/colors";

const PrimaryButton = ({title, onPress = () => {}}) => {
    return <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={style.btnContainer}>
            <Text style={style.title}>{title}</Text>
        </View>
    </TouchableOpacity>;
};

const SecondaryButton = ({ title, onPress = () => { } }) => {
    return <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={style.btnContainer1}>
            <Text style={style.title1}>{title}</Text>
        </View>
    </TouchableOpacity>;
};

const style = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    title1: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 18
    },
    btnContainer: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer1: {
        backgroundColor: COLORS.white,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { PrimaryButton, SecondaryButton };