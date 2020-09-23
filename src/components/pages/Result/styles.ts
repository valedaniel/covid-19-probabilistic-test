import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    scrollView: {
        marginBottom: 20
    },
    cardViewIcon: {
        backgroundColor: '#DADADA',
        width: DEVICE_WIDTH * 0.8,
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 20,
        marginVertical: 10
    },
    icon: {
        color: '#C40000',
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: DEVICE_HEIGHT * 0.1
    },
    text: {
        textAlign: 'center',
        width: DEVICE_WIDTH * 0.7,
        alignSelf: 'center',
        fontSize: DEVICE_WIDTH * 0.05
    },
    textPercent: {
        color: '#F78D34'
    },
    title: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
        fontSize: DEVICE_WIDTH * 0.045,
        color: '#FD7E14'
    },
    smallText: {
        textAlign: 'center',
        width: '80%',
        alignSelf: 'center',
        color: '#FD7E14',
        fontSize: DEVICE_WIDTH * 0.03,
    },
    smallIcon: {
        position: 'absolute',
        marginLeft: 15,
        marginTop: 10,
        color: '#FD7E14',
        fontSize: DEVICE_WIDTH * 0.075,
    },
    button: {
        width: DEVICE_WIDTH * 0.8,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    textButton: {
        textAlign: 'center',
        width: '100%',
        color: '#fff',
    },
});