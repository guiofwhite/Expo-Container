import React from "react";
import { ScrollView } from 'react-native';
import Titulo from "./Componentes/Titulo"
import Saudacao from "./Componentes/Saudacao";
import FotoPerfil from "./Componentes/FotoPerfil";
import CartaoUsuario from "./Componentes/CartaoUsuario";

export default function App() {
  return <ScrollView>
    <Titulo />
    <Saudacao nome='nego trufa' />
    <FotoPerfil />

    <CartaoUsuario
      nome='Marcelinho Carioca'
      descricao='Dono da Obra'
      img='perfil00'
    />

     <CartaoUsuario
      nome='Marília Mendonça'
      descricao='Cantora'
      img='perfil01'
    />

     <CartaoUsuario
      nome='Laurinha do Camarão'
      descricao='Vendedora'
      img='perfil02'
    />

     <CartaoUsuario
      nome='Willian'
      descricao='Servente'
      img='perfil03'
    />

     <CartaoUsuario
      nome='Jerson'
      descricao='Padeiro'
      img='perfil04'
    />
  </ScrollView>


}
