import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        width: DEVICE_WIDTH * 0.8,
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: '#DADADA',
        height: DEVICE_HEIGHT * 0.08,
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    text: {
        textAlignVertical: 'center',
        textAlign: 'center',
        width: '100%',
        fontSize: DEVICE_WIDTH * 0.035
    }
});