import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import bg from './../../assets/imgs/Logo.png';

export interface EnderecoscreenProps {
  navigation: any;
}

export function Enderecoscreen(props: EnderecoscreenProps) {

  const [refreshing, setRefreshing] = React.useState(false);
  const [resultado, setResultado] = useState<null | 'Cadastrado' | 'Falhou'>(null);

  const handleLogin = async ({ nome, cep, bairro, numero, complemento, estado, cidade, telefone}: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (nome.trim() != '' && cep.trim() != '' && bairro.trim() != '' && numero.trim() != '' && complemento.trim() != '' && estado.trim() != '' && cidade.trim() != '' && telefone.trim() != '')
      setResultado('Cadastrado')
    else
      setResultado('Falhou')
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <ImageBackground source={bg} style={styles.background}>
          <View>
            <Formik
              initialValues={{ email: '', cep: '', nome: '', bairro: '', numero: '', complemento: '', estado: '', cidade: '', telefone: '' }}
              validationSchema={Yup.object().shape({
                nome: Yup.string().required('Informe seu nome.').default('Digite seu nome'),
                cep: Yup.string().required('Informe seu CEP.').min(8, 'CEP não é válido'),
                endereco: Yup.string().required('Informe seu endereço').default('Digite seu endereço'),
                bairro: Yup.string().required('Informe seu bairro').default('Digite seu bairro'),
                numero: Yup.string().required('Digite o número').default('Digite seu número'),
                complemento: Yup.string().required('Digite seu complemento').default('Digite seu complemento'),
                estado: Yup.string().required('Digite seu estado Ex.: (AL) ').default('Digite seu estado'),
                cidade: Yup.string().required('Digite sua cidade').default('Digite sua cidade'),
                telefone: Yup.string().required('Digite seu telefone').min(11, 'Telefone não é válido')

              })}
              onSubmit={handleLogin}>
              {({ errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                <View style={styles.box}>
                  <Text style={styles.logo}>Cadastro endereço</Text>
                  <TextInput placeholder='Seu nome completo...' onBlur={handleBlur('nome')} style={styles.textInput} onChangeText={handleChange('nome')} />
                  {errors.nome && touched.nome && <Text style={styles.fail}>{errors.nome}</Text>}

                  <TextInput placeholder='Digite seu CEP...' onBlur={handleBlur('cep')} style={styles.textInput} onChangeText={handleChange('cep')} />
                  {errors.cep && touched.cep && <Text style={styles.fail}>{errors.cep}</Text>}

                  <TextInput placeholder='Digite seu bairro...' onBlur={handleBlur('bairro')} style={styles.textInput} onChangeText={handleChange('bairro')} />
                  {errors.bairro && touched.bairro && <Text style={styles.fail}>{errors.bairro}</Text>}

                  <TextInput placeholder='Número...' onBlur={handleBlur('numero')} style={styles.textInput} onChangeText={handleChange('numero')} />
                  {errors.numero && touched.numero && <Text style={styles.fail}>{errors.numero}</Text>}

                  <TextInput placeholder='Complemento...' onBlur={handleBlur('complemento')} style={styles.textInput} onChangeText={handleChange('complemento')} />
                  {errors.complemento && touched.complemento && <Text style={styles.fail}>{errors.complemento}</Text>}

                  <TextInput placeholder='Estado...' onBlur={handleBlur('estado')} style={styles.textInput} onChangeText={handleChange('estado')} />
                  {errors.estado && touched.estado && <Text style={styles.fail}>{errors.estado}</Text>}

                  <TextInput placeholder='Cidade...' onBlur={handleBlur('cidade')} style={styles.textInput} onChangeText={handleChange('cidade')} />
                  {errors.cidade && touched.cidade && <Text style={styles.fail}>{errors.cidade}</Text>}

                  <TextInput placeholder='Telefone...' onBlur={handleBlur('telefone')} style={styles.textInput} onChangeText={handleChange('telefone')} />
                  {errors.telefone && touched.telefone && <Text style={styles.fail}>{errors.telefone}</Text>}

                  <TouchableOpacity onPress={() => handleSubmit()} disabled={isSubmitting}>
                    <View style={styles.btn}>
                      <Text style={styles.text}>Cadastrar</Text>
                    </View>
                  </TouchableOpacity>

                  {resultado == 'Cadastrado' && <Text style={styles.success}>Cadastrado realizado com sucesso.</Text>}
                  {resultado == 'Falhou' && <Text style={styles.fail}>Falha no cadastrado.</Text>}

                  <TouchableOpacity onPress={() => props.navigation.navigate('Configuração')}>
                    <Text style={styles.bs}>Voltar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
  },
  logo: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    padding: 15,
  },
  textInput: {
    backgroundColor: 'rgba(211,211,211,1)',
    padding: 5,
    marginVertical: 6,
    marginHorizontal: 20,
    borderRadius: 15,

  },
  text: {
    backgroundColor: 'rgba(211,211,211,1)',
    padding: 5,
    textAlign: 'center',
    borderRadius: 15,

  },

  btn: {
    marginVertical: 10,
    margin: 130
  },
  box: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    marginHorizontal: 15,
    borderRadius: 15
  },

  bs: {
    fontSize: 15,
    color: 'white',
    marginVertical: 20,
    textAlign: 'center',
    textDecorationLine: 'underline'

  },
  fail: {
    textAlign: 'center',
    color: 'orange'
  },
  success: {
    textAlign: 'center',
    color: 'white'
  },

});