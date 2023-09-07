import React from 'react';
import { NavegacaoPrincipal, NavegacaoSecundaria } from './src/navigations/configuracoes';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoPrincipal/>
      <NavegacaoSecundaria/>
    </NavigationContainer>
  );
}


