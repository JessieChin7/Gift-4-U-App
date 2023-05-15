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
        // width: '60%',
        height: 35,
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 25,
    },
    textProductName: {
        fontSize: 28,
        height: 80,
        width: 300,
        // marginVertical: 12,
        paddingTop: 13,
    },
    textProductPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        height: "100%",
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
        justifyContent: 'center',
        marginBottom: 30,
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
    btnsContainer: {
        // flex: 1,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 158, 
        height: 50,
        backgroundColor: '#898989',
        borderRadius: 10,
        margin: 5,
        marginHorizontal: 10,
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
        // fontWeight: 'bold'
    },
});