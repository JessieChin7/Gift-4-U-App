import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 20,
    },
    scrollContainer: {
        width: '100%',
    },
    textHeading: {
        width: '100%',
        fontSize: 22,
        paddingHorizontal: 30,
    },
    friendListContainer: {
        width: '100%',
        flexDirection: 'column',
        padding: 15,
        alignItems: 'flex-start',
    },
    friendContainer: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 25,
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 100,
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 20,
        alignSelf: 'center',
    }
});