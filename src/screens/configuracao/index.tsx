import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';
import bg from './../../assets/imgs/Logo.png';
import * as ImagePicker from 'expo-image-picker';

export interface ConfiguracaoscreenProps {
  navigation: any;
}

export function Configuracaoscreen(props: ConfiguracaoscreenProps) {

  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const [imagem, setImagem] = useState<null | string>(null)

  const abrirGaleria = async () => {
    //Avalia se tem permissão
    if (!status?.granted) {
      //Solicita permissão
      const resposta = await requestPermission();
      if (!resposta.granted) {
        return; //Permissão não foi dada.
      }
    }

    const foto = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
      allowsMultipleSelection: false,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (!foto.canceled)
      setImagem('data:image/jpg;base64,' + foto.assets[0].base64)
  }

  return (
    <ImageBackground source={bg} style={styles.container}>
      
      <View style={styles.box}>
      <View style={styles.button}>
      {imagem && <Image source={{ uri: imagem }} style={styles.foto} />}
        <Button title= 'Editar' onPress={abrirGaleria}/>
      </View>
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
    marginHorizontal: 85,
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
    padding: 37

  },
  logo: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    padding: 10,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  button:{
    alignItems: 'center',
    
  }
});