import React from "react";
import { View, Text, Image} from "react-native";
import estilos from '../style/style';
import fotos from '../img/fotos';

export default function CartaoUsuario({ nome, descricao, imagem }) {
    return (
        <View style={estilos.cartao}>
            <Image source={{ uri: imagem }} style={estilos.foto} />
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>

        </View>
    );
}


