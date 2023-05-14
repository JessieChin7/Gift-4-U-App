import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 18,
        marginTop: 20,
        width: 345,
        height: 133,
        marginVertical: 11,
        borderRadius: 18.4,
        alignSelf: 'center',
        alignItems: 'center',

        justifyContent: 'space-between',

        shadowColor: '#2c2c2c',
        shadowOffset: {
            width: 3,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 15,
    },

    imageTextContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    textName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    textPrice: {
        color: '#c5c8cb',
        fontWeight: 'normal',
        fontSize: 12,
        marginBottom: 10,

    },
    

    image: {
        width: 97,
        height: 97,
        borderRadius: 13.8,
        marginRight: 13
    },

    button: {
        width: 70,
        height: 27,
        backgroundColor: '#d9d9d9',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 12
    },

    icon: {
        width: 23,
        height: 23,
        resizeMode: 'contain',
    }
});