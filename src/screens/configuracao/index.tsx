import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native';
import bg from './../../assets/imgs/Logo.png';

export interface ConfiguracaoscreenProps {
  navigation: any;
}

export function Configuracaoscreen(props: ConfiguracaoscreenProps) {

  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.logo}>Configurações</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <View style={styles.btn}>
          <Text style={styles.text}>Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Endereço')}>
        <View style={styles.btn}>
          <Text style={styles.text}>Endereço</Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Cartão')}>
        <View style={styles.btn}>
          <Text style={styles.text}>Cartão</Text>
        </View> 
      </TouchableOpacity>
      
      </View>
    </ImageBackground>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',


  },
  text: {
    fontSize: 17,
    color: 'black',
    marginHorizontal: 90,
    padding: 10,
    marginVertical: 3,
    
  },
  btn: {
    marginVertical: 10,
    backgroundColor: 'rgba(211,211,211,1)',
    borderRadius: 10,
    alignItems: 'center',
    
  },
  login: {
    marginVertical: 10,
    backgroundColor: 'rgba(15,10,222,0.8)',
    borderRadius: 10,
  },
  box: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 15,
    padding: 50

  },
  logo: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    padding: 10,
  },
});