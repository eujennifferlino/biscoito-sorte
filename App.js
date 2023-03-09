import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App(){
   const [img, setImg] = useState(require('./src/biscoito.png'));
   const [textoFrase, setTextoFrase] = useState('');

   let frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'A maior de todas as torres começa no solo.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    'A sorte favorece a mente bem preparada.',
    'O nosso primeiro e último amor é… o amor-próprio.',
    'Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera!'
   ];

   function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require('./src/biscoitoAberto.png'));
   }

   function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
   }
  
  
  return(
    <View style={styles.container}>
      <Image
      source={img}
      style={styles.img}
      />

      <Text style={styles.textofrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>QUEBRAR BISCOITO</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop:15, borderColor:'#121212'}]} onPress={ reiniciarBiscoito }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>REINICIAR BISCOITO</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFAE4'
  },
  img:{
    width:230,
    height:230,
  },
  textofrase:{
    fontSize:20,
    color:'#9404CF',
    margin:30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width:230,
    height:50,
    borderColor: '#9404CF',
    borderWidth:2,
    borderRadius:25
  },
  btnArea:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight: 'bold',
    color: '#9404CF'
  }
})

export default App;