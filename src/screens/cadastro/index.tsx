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
import bg from './../../assets/imgs/Logo.png';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';



export interface CadastroscreenProps {
  navigation: any;
}

export function Cadastroscreen (props: CadastroscreenProps) {

  const [refreshing, setRefreshing] = React.useState (false);
  const [ resultado, setResultado ] = useState<null|'logado'|'falhou'> (null);

const handleLogin = async ({email, senha}: any) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  if (email.trim() == 'teste@teste.com' && senha.trim() == '12345678') 
    setResultado('logado')
  else
    setResultado('falhou')
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
      initialValues={{email: '', senha: ''}}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Informe o e-mail.').email('E-mail não é válido.'),
        senha: Yup.string().required('Informe a senha.').min(8, 'A senha precisa ter no mínimo 8 caracteres.')
      })}
      onSubmit={handleLogin}>
      {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
        <View style={styles.box}>
          <Text style={styles.logo}>Cadastro</Text>
          <TextInput  placeholder='Digite seu email' onBlur={handleBlur('email')} style={styles.textInput} onChangeText={handleChange('email')}/>
          { errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}
          <TextInput  placeholder='Digite sua senha' onBlur={handleBlur('email')} style={styles.textInput} onChangeText={handleChange('senha')} secureTextEntry/>
          { errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}
          
          { resultado == 'logado' && <Text style={styles.success}>Logado com sucesso.</Text>}
          { resultado == 'falhou' && <Text style={styles.fail}>Email ou senha incorretos. Tente novamente.</Text>}
          <TouchableOpacity onPress={() => handleSubmit()} disabled={isSubmitting}>
              <View style={styles.btn}>
                  <Text style={styles.text}>Cadastrar</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
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
  background:{
  flex: 1,
  justifyContent: 'center'
},
  container: {
  flex: 1,
},
  logo: { color: 'white',
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
  textAlign:'center',
  borderRadius: 15,

},

btn:{
  marginVertical: 10,
  margin: 130
},
box: {
  backgroundColor: 'rgba(0,0,0,0.55)', 
  marginHorizontal: 15,
  borderRadius: 15
},

bs:{
  fontSize: 15,
  color: 'white',
  marginVertical: 20,
  textAlign: 'center',
  textDecorationLine: 'underline'

},
fail: {
  textAlign:'center',
  color: 'orange'
},
success: {
  textAlign:'center',
  color: 'white'
},

});