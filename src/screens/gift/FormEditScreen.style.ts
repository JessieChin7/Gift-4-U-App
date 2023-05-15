// FriendSelectionScreen.style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        paddingTop: 114,
        paddingHorizontal: 24,
    },
    title: {
        width: 'auto',
        height: 37,
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
        width: 100,
        height: 100,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 50,
        backgroundColor: '#D9D9D9',
        padding: 14,
        borderRadius: 5,
    },
});
