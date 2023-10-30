import {StyleSheet} from 'react-native';
import {THEME} from '../../assets/style/theme.style';

export const EXCHANGE_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.SPACE.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: THEME.COLOR.white,
    width: '65%',
    borderRadius: 0.8 * THEME.BORDER_RADIUS.small,
    color: THEME.COLOR.black,
    height: THEME.HEIGHT.input,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    color: THEME.COLOR.black,
    fontWeight: '700',
    fontSize: 1.5 * THEME.FONT_SIZE.small,
    marginBottom: THEME.SPACE.small,
    marginTop: THEME.SPACE.small,
    alignSelf: 'flex-start',
  },
  button: {
    flexDirection:'row',
    width: '100%',
    marginTop: THEME.SPACE.medium,
    justifyContent:'center'
  },
  picker: {
    color: THEME.COLOR.black,
    backgroundColor: THEME.COLOR.white,
    width: '35%',
    height: THEME.HEIGHT.input,
  },
  text1: {
    color: THEME.COLOR.black,
    fontSize: 0.9*THEME.FONT_SIZE.large,
    marginBottom: THEME.SPACE.small,
    textAlign: 'center',
    fontWeight:'bold'
  },
  text2: {
    color: THEME.COLOR.black,
    fontSize: 0.9 * THEME.FONT_SIZE.medium,
    marginBottom: THEME.SPACE.small,
    textAlign: 'center',
  },
  paymentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom:THEME.SPACE.small,
  },
  paymentContainer1: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  marginBotton: {
    marginBottom: THEME.SPACE.medium,
  },
  textGreen: {
    color: THEME.COLOR.green,
  },
  textGreen2: {
    color: THEME.COLOR.green,
    fontSize:1.2*THEME.FONT_SIZE.medium
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rate: {
    color: THEME.COLOR.black,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  backButton: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  history: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  historyText: {
    color: THEME.COLOR.black,
  },
  historyContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2*THEME.SPACE.large,
  },
  whatsapp: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  wallet: {
    flexDirection: 'row',
  },
  walletText: {
    color: THEME.COLOR.black,
  },
  buyBtn: {
    backgroundColor: THEME.COLOR.secondaryColorDark,
    padding: THEME.SPACE.small,
    paddingStart: THEME.SPACE.medium,
    paddingEnd: THEME.SPACE.medium,
    borderRadius: THEME.BORDER_RADIUS.small,
  },
  buyTxt: {
    color: THEME.COLOR.white,
    fontWeight: 'bold',
  },
  spendContainer: {
    flexDirection: 'row',
   
  },
  walletContainer: {
    flexDirection: 'column',
  },
  spendTitleC: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
