import React from "react";
import { Image } from "react-native";

export default function FotoPerfil({url}){
    return(
        <Image
            source={require('../img/base.jpg')}
            style = {{width:100, height:100, borderRadius:50, marginBottom:10}}
        />
    );
}