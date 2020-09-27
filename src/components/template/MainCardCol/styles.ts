import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        width: DEVICE_WIDTH * 0.8,
        backgroundColor: '#DADADA',
        alignSelf: 'center',
        marginVertical: 4,
        padding: 3,
        borderRadius: 10
    },
    text: {
        textAlignVertical: 'center',
        textAlign: 'center',
        width: '100%',
        fontSize: DEVICE_WIDTH * 0.035
    }
});