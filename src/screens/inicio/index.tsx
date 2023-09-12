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

export interface IniciocreensProps {
}

export function Inicioscreen (props: IniciocreensProps) {

return(
  <ImageBackground source={bg} style={styles.container}>
    <Text style={styles.texto}>Atualizações em breve.</Text>
<TouchableOpacity onPress={() => Alert.alert('Otário, só clicou porque mandei ;)')}>
                <View style={styles.btn}>
                    <Text style={styles.text}>Clique aqui</Text>
                </View>
</TouchableOpacity>
</ImageBackground>

)

}

const styles = StyleSheet.create({
    container: {	
      flex: 1,
      alignItems: 'center',
      paddingTop: 60,
    
    },
    text: { 
      fontSize: 15,
      color: 'white',
      marginHorizontal: 10,
      marginVertical: 3
    },
    btn: {
      marginVertical: 20,
      marginHorizontal: 1,
      backgroundColor: 'rgba(15,10,222,0.8)',
      borderRadius:10     
    },
    texto: {
      fontSize: 20,
      color: 'black',
    },
  });