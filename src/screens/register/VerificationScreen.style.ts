import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 130,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginVertical: 40,
        paddingHorizontal: 60,
    },
    verificationBtn: {
        width: 330,
        height: 56,
        backgroundColor: '#1e232c',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    verificationText: {
        color: 'white',
        fontWeight: "bold",
    },
});