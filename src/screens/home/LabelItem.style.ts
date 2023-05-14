import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center',
        marginBottom: 30,
    },
    btnIsFocus: {
        backgroundColor: '#eeeeee',
        height: 32,
        borderRadius: 15,
        justifyContent: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 17,
        alignSelf: 'flex-start'
    },
    btnNotFocus: {
        backgroundColor: 'grey',
        height: 32,
        borderRadius: 15,
        justifyContent: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 17,
        alignSelf: 'flex-start'
    },
    textNotFocus: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'white',
    },
    textIsFocus: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'black',
    },
});