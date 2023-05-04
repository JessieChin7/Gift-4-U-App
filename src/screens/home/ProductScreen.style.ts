import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 0,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        objectFit: 'cover',
    },
    productInfoContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'flex-start'
    },
    headingContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 35,
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    },
    textProductName: {
        fontSize: 28,
    },
    textProductPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textProductDescription: {
        fontSize: 15,
        color: '#676767',
        marginVertical: 8,
        lineHeight: 25,
    },
    divider: {
        borderWidth: 0.5,
        borderColor:'#d9d9d9',
        marginVertical: 20
    },
    textProductOptions: {
        fontSize: 17,
    },
    labelsContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: 'center'
    },
    labelButton: {
        backgroundColor: '#eeeeee',
        height: 32,
        borderRadius: 15,
        justifyContent: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 17,
        alignSelf: 'flex-start'
    },
    textLabelButton: {
        fontSize: 14,
        alignSelf: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 360, 
        height: 45,
        backgroundColor: '#ffbd33',
        borderRadius: 6,
        marginTop: 50,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    },
});