import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Font } from 'expo'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'

export default class Agenda extends Component {
    state = {
        fontLoaded: false
    }
    
    async componentDidMount() {
        await Font.loadAsync({
            'Lato': require('../../assets/fonts/Lato.ttf')
        })
        this.setState({ fontLoaded: true })
    }
    
    render() {
        return (
            this.state.fontLoaded ?
            <View style={styles.container}>
                <ImageBackground
                    source={todayImage}
                    style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <Text>Tarefa 1</Text>
                    <Text>Tarefa 2</Text>
                    <Text>Tarefa 3</Text>
                </View>
            </View>
            : null
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    taskContainer: {
        flex: 7
    }
})