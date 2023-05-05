// FriendSelectionScreen.style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingTop: 114,
    },
    title: {
        width: 'auto',
        height: 37,
        left: 24,
        // top: 114,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 46,
        color: '#000000',
    },
    backButton: {
        width: 75,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
    },
    nextButton: {
        width: 75,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,

    },
    animalButton: {
        width: 56,
        height: 56,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 205.28,
        height: 43.99,
        backgroundColor: '#D9D9D9',
        padding: 14,
        borderRadius: 5,
    },
});
