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
      title: 'Filmes',
      data: ['Bonecos', 'Quadros'],
    },
    {
      title: 'Séries',
      data: ['Bonecos', 'Quadros'],
    },
    {
      title: 'Animes',
      data: ['Bonecos', 'Quadros'],
    },

    {
      title: 'Desenhos',
      data: ['Bonecos', 'Quadros'],
    },

    {
      title: 'Variados',
      data: ['Bonecos', 'Quadros'],
    },

  ];


  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={CATEGORIA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Produtos', { category_id: {index} , text: {CATEGORIA}})}>
              <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 6,
    padding: 4
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 25,
    borderRadius: 15
  },
  header: {
    fontSize: 32,
    padding: 5,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  background: {
    flex: 1,
  },
  list: {
    flex: 1,
  }
}
)