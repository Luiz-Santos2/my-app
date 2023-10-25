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

export interface CartaoscreenProps {
  navigation: any;
}

export function Cartaoscreen(props: CartaoscreenProps) {

  const [refreshing, setRefreshing] = React.useState(false);
  const [resultado, setResultado] = useState<null | 'Cadastrado' | 'Falhou'>(null);

  const handleLogin = async ({ nome, numero, data, cod}: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (nome.trim() != '' && numero.trim() != '' && data.trim() != '' && cod.trim() != '')
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
              initialValues={{ numero: '', data: '', nome: '', cod: ''}}
              validationSchema={Yup.object().shape({
                nome: Yup.string().required('Informe o nome do titular.').default('Como está no cartão'),
                numero: Yup.string().required('Informe o número do cartão.').min(16,'Nº de cartão inválido'),
                data: Yup.string().required('Informe a data de vencimento.').min(5,'Formato (MM/AA)'),
                cod: Yup.string().required('Digite o código do cartão.').min(3, 'Código inválido')

              })}
              onSubmit={handleLogin}>
              {({ errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                <View style={styles.box}>
                  <Text style={styles.logo}>Cadastro cartão</Text>

                  <TextInput placeholder='Nome do titular' onBlur={handleBlur('nome')} style={styles.textInput} onChangeText={handleChange('nome')} />
                  {errors.nome && touched.nome && <Text style={styles.fail}>{errors.nome}</Text>}

                  <TextInput placeholder='Nº do cartão' onBlur={handleBlur('numero')} style={styles.textInput} onChangeText={handleChange('numero')} />
                  {errors.numero && touched.numero && <Text style={styles.fail}>{errors.numero}</Text>}

                  <TextInput placeholder='Vencimento do cartão' onBlur={handleBlur('data')} style={styles.textInput} onChangeText={handleChange('data')} />
                  {errors.data && touched.data && <Text style={styles.fail}>{errors.data}</Text>}

                  <TextInput placeholder='Código do cartão' onBlur={handleBlur('cod')} style={styles.textInput} onChangeText={handleChange('cod')} />
                  {errors.cod && touched.cod && <Text style={styles.fail}>{errors.cod}</Text>}

                  

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
