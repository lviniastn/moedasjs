import { StatusBar } from 'expo-status-bar';
import { use, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[loading, setLoading] = useState(true);
  const[moedas, setMoedas] = useState([]);
  const[moedasSelecionada, setMoedaSelecionada]= useState(null);
  const[moedaBValor, setMoedaBValor]= useState("");
  const[valorMoeda, setValorMoeda]= useState(null);
  const[valorConvertido, setValorConvertido]= useState(0);

  useEffect(() => {
    async function loadMoedas (){
      const responce = await AppRegistry.get("all")
      let arrayMoedas = [];
      Object.keys(Response.data).map( (key) => {
        arrayMoedas.push ({
          key:key,
          label:key,
          value: key,
        })
      })

      setMoedas(arrayMoedas)
      serMoedaSelecionada(arrayMoedas[0].key)
      setLoading(false);
    }
    loadMoedas();
  },[]);
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});