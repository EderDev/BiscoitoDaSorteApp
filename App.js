import React, { Component } from 'react'
import { View, StyleSheet, Button, TouchableOpacity, Text, Image } from 'react-native'

class Botao extends Component{
  constructor(props){
    super(props)
    this.state = {}
    this.styles = StyleSheet.create({
      botao:{
        width: 250,
        height:50,
        borderWidth:2,
        borderColor:props.color,
        backgroundColor:'transparent',
        borderRadius:25,
      },
      botaoArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      botaoText:{
        color:props.color,
        fontSize:14,
        fontWeight:'bold'
      }
    })
  }
  render(){
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class app_BiscoitoDaSorte extends Component{
  constructor(props){
    super(props)
    this.state = {texto:''}

    this.frases = [
      'Chega-te aos bons, serás um deles, chega-te aos maus, serás pior do que eles',
      'O fraco jamais perdoa: o perdão é uma das características do forte.',
      'Há pessoas que choram por saber que as rosas têm espinho. Há outras que sorriem por saber que os espinhos têm rosas!',
      'Feliz aquele que transfere o que sabe e aprende o que ensina.',
      'Saber não é o bastante; precisamos aplicar. Querer não é o bastante, precisamos fazer.',
      'Escuta e serás sábio. O começo da sabedoria é o silêncio.',
      'Quando vires um homem bom, tenta imitá-lo; quando vires um homem mau, examina-te a ti mesmo.',
      'Para ver muita coisa é preciso despregar os olhos de si mesmo.',
      'Não ergas alto um edifício sem fortes alicerces, se o fizeres viverás com medo.',
      'A educação é uma coisa admirável, mas é bom recordar que nada do que vale a pena saber pode ser ensinado.'
    ]

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
  }
  quebrarBiscoito(){
    let s = this.state
    let r = Math.floor(Math.random() * this.frases.length)
    s.texto = this.frases[r]
    this.setState(s)
  }
  render(){
    return(
      <View style={styles.body}>
        <Text style={styles.logo}>Biscoito da Sorte - App</Text>
        <Image style={styles.biscoito} source={require('./images/cookies.png')}/>
        <Text style={styles.frase}>"{this.state.texto}"</Text>
        <Botao color='#B59619' text='Quebrar Biscoito' onPress={this.quebrarBiscoito} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    fontSize:25,
    fontWeight:'bold',
    color:'#B59619',
    marginBottom:60
  },
  biscoito:{
    width:250,
    height:250
  },
  frase:{
    fontSize:17,
    color:'#B59619',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  }
})