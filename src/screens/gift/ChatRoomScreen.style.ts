// FriendSelectionScreen.style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 52,
    },
    title: {
        height: 37,
        alignSelf: 'center',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 46,
        color: '#000000',
    },
    friendName: {
        alignSelf: 'center',
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    friendImage: {
        width: 56,
        height: 56,
        marginVertical: 20,
        marginHorizontal: 14,
        borderColor: 'transparent',
    },
    dateText: {
        alignSelf: 'flex-end',
        left: 130,
        bottom: 20,
        fontSize: 16,
        color: '#898989',
        fontWeight: 'normal',
    }
});
