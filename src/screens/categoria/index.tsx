import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import bg from './../../assets/imgs/Logo.png';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProdutoParams } from '../../navigations/categoria';
import { useNavigation } from '@react-navigation/native';



export interface CategoriascreenProps {

}

export function Categoriascreen(props: CategoriascreenProps) {

  type navProp = StackNavigationProp<ProdutoParams, "Categoria">;
  const navigation = useNavigation<navProp>();

  const CATEGORIA = [
    {
      data: ['Filmes','Séries','Desenhos','Animes','Variados'],
    },
  ];


  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.container}>
        
        <SectionList
         /* renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}*/
          sections={CATEGORIA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Produtos', { category_id: { index }})}>
              <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 25,
    marginVertical: 25,
    marginHorizontal: 25,
    borderRadius: 20,
  },
  /*header: {
    fontSize: 32,
    padding: 10,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginVertical: 30,
    marginHorizontal: 12,
    textAlign: 'center',
    borderRadius: 10,
  },*/
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  background: {
    flex: 1,
  }
}
)