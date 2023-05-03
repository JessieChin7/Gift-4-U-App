import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 50,
    },
    scrollView: {
        width: '100%',
    },
    checkBoxContainer: {
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        borderRadius: 50,
        width: 'auto',
        height: 'auto',
        borderWidth: 0,
        padding: 10,
    },
    checkBoxTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },
    checkButton: {
        width: 20,
        height: 18,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        borderColor: 'transparent',
    }
});