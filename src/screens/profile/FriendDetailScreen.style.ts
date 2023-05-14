import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 30,
    },
    avatar: {
        width: 126,
        height: 126,
        objectFit: 'fill'
    },
    textName: {
        fontSize: 20,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 30,
    },

    textContainer: {
        width: "100%",
        paddingHorizontal: 50,
        paddingBottom: 30,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    textContent: {
        fontSize: 16,
        fontWeight: 'normal',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    flexRow: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    textContentRow: {
        fontSize: 18,
        fontWeight: 'normal',
        paddingVertical: 10,
    },
    dropdownsContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    buttonStyle: {
        borderRadius: 50,
        width: 104,
        height: 31,
        color: '#f5f5f5'
    },
    buttonDateStyle: {
        borderRadius: 50,
        width: 211,
        height: 31,
        color: '#f5f5f5',
        marginHorizontal: 10,
    },
    dropdownStyle: {
        borderRadius: 10,
        marginVertical: 3,
        paddingVertical: 2,
        backgroundColor: '#f5f5f5',
    },
    rowStyle: {
        height: 35,
    },
    textStyle: {
        fontSize: 16,
    },
    icon: {
        marginVertical: 10,
    }
});