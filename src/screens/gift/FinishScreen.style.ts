import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 52,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    backButton: {
        marginRight: 15,
    },
    friendAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    friendName: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        borderBottomWidth: 2,
        borderBottomColor: '#D9D9D9',
        marginBottom: 15,
    },
    messageContainer: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 17,
        marginTop: 10,
        marginHorizontal: 10,
        borderColor: '#ddd',
        borderWidth: 2,
    },
    message: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 18,
    },
    selfMessage: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-end',
    },
    otherMessage: {
        backgroundColor: '#D9D9D9',
        alignSelf: 'flex-start',
    },
    textInput: {
        height: 55,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        marginLeft: 10,
        paddingHorizontal: 10,
    },
    sendButton: {
        height: 55,
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
    },
});
