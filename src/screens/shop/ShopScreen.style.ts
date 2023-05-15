import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingHorizontal: 10,
    },
    headerContainer: {
        // flex: 2,
        flexDirection: 'row',
        width: '100%',
        height: 30,
        // marginTop: 10,
        paddingHorizontal: 20,
    },
    btn: {
        width: '50%',
        height: 43,
    },
    textOnFocus: {
        fontSize: 18.4,
        fontWeight: 'bold',
        lineHeight: 45,
        textAlign: 'center',
    },
    textNotFocus: {
        fontSize: 18.4,
        fontWeight: 'bold',
        lineHeight: 45,
        textAlign: 'center',
        color: '#a4a4a4',
    },
    divOnFocus: {
        borderWidth: 2,
        borderColor:'#898989',
        marginHorizontal: 2,
        marginVertical: 7,
    },
    divNotFocus: {
        borderWidth: 2,
        borderColor:'#d9d9d9',
        marginHorizontal: 2,
        marginVertical: 7
    },
    scrollViewContainer: {
        marginTop: 32,
        paddingHorizontal: 20,

    }
});