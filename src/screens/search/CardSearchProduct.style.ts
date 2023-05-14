import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        width: 280,
        height: 325,
        borderRadius: 16,
        marginRight: 15,
        shadowColor: '#bab2af',
        shadowOffset: {
            width: 15,
            height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    image: {
        width: 280,
        height: 235,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    infoContainer: {
        width: 280,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    textProductName: {
        fontSize: 17,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    textProductPrice: {
        paddingVertical: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'grey'
    },
    icon: {
        width: 35.8,
        height: 35.8,
        alignSelf: 'center',
        marginTop: 15,
        marginEnd: 8
    },
});