import { Alert } from 'react-native'

const server = 'http://192.168.15.7:3000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Erro: ${err}`)
}

export { server, showError }