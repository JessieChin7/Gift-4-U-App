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
    textUsername: {
        fontSize: 20,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingVertical: 30,
    },
    textContainer: {
        width: "100%",
        paddingHorizontal: 70,
        paddingBottom: 30,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    textContent: {
        fontSize: 18,
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
});