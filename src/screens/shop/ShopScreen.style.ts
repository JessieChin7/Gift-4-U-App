import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 10,
    },
    textHeading: {
        paddingLeft: 35,
        fontSize: 18.4,
        fontWeight: 'bold',
        width: '100%',
        lineHeight: 45,
    },
    divider: {
        borderWidth: 2,
        borderColor:'#d9d9d9',
        marginHorizontal: 28,
        marginVertical: 10
    },
    scrollViewContainer: {
        paddingHorizontal: 20,
    }
});