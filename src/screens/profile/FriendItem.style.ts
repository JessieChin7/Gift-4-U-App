import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
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