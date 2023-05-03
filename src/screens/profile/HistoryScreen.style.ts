import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 20,
    },
    headerContainer: {
        width: '70%',
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },
    image: {
        width: 85,
        height: 85,
        objectFit: 'scale-down',
    },
    text: {
        width: '100%',
        height: 20,
        fontFamily: 'Didot',
        fontSize: 16,
        marginLeft: 5,
        marginVertical: 30,

    },
    lineContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
    line: {
        borderWidth: 0.5,
        borderColor:'black',
        marginVertical: 20
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: 10,

    },
    dateContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        width: '100%',
    },
    dateLineContainer: {
        flexDirection: 'column',
        width: 10,
        height: 10,
        paddingVertical: 20,
        marginLeft: -1,
    },
    dateLine: {
        borderWidth: 0.5,
        borderColor:'black',
        marginVertical: 20,
    },
    productImg: {
        width: 202,
        height: 202,
        marginTop: 70,
        marginBottom: 10
    },
    productText: {
        fontSize: 16,
        height: 20,
    },
});