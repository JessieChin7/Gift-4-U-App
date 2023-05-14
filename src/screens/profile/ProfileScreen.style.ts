import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 10,
    },
    avatar: {
        width: 191,
        height: 181,
    },
    textName: {
        fontSize: 20,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 30,
    },

    buttonsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    aboutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 343, 
        height: 51,
        backgroundColor: 'black',
        borderRadius: 6,
        marginBottom: 10,
    },
    textAboutButton: {
        color: 'white',
        fontWeight: 'bold'
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 343, 
        height: 51,
        backgroundColor: 'white',
        borderRadius: 6,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 2
    },
    textButton: {
        color: 'black',
        fontWeight: 'bold'
    },
});