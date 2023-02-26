import { StyleSheet } from 'react-native'
import * as Colors from './colors.js'
import {krGreen} from './colors.js'

export default StyleSheet.create({

  blackText: {
    color: Colors.textDark,
    opacity: 0.8,
  },
  buttonText: {
    color: Colors.textLight,
    fontFamily: 'Inter-DisplaySemiBold',

  },
  container: {
    flex: 1,
    fontFamily: 'Inter-Display'
  },
  currentDistance:{
    paddingBottom: 10,
    textAlign: 'center',
  },
  distanceSlider:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerButtonText: {
    color: Colors.danger,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  footerSettings: {
    alignItems: 'center',
    marginTop: 30
  },
  h1: {
    fontFamily: 'Inter-DisplaySemiBold',
    fontSize: 40,
  },
  h2: {
    fontFamily: 'Inter-DisplayBlack',
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
    textTransform: 'uppercase',
  },
  label: {
    color: Colors.krGreenDark,
    fontFamily: 'Inter-DisplayExtraBold',
    fontSize: 12,
    paddingHorizontal: '3%',
    paddingVertical: '1%',
    textTransform: 'uppercase',
  },
  languageButton: {
    backgroundColor: Colors.info,
    borderRadius: 7,
    marginBottom: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 5,
    width: 120
  },
  languageButtonDisabled: {
    backgroundColor: '#D9D9D9',
    borderRadius: 7,
    marginBottom: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingTop: 5,
    width: 120
  },
  languageButtonsContainer: {
    marginTop: 20
  },
  linkText: {
    marginBottom: 2,
    textDecorationLine: 'underline'
  },
  logOutButton: {
    backgroundColor: Colors.warning,
    borderRadius: 100,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5
  },
  pageContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  prefSlider: {
    paddingBottom: 30,
    paddingTop: 30,
    //thumbTintColor : Colors.krGreen,
    width: '100%',
  },
  pressedSubstitutionItem: {
    opacity: 0.5,
  },
  settingsButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.info,
    borderRadius: 100,
    marginBottom: 50,
    paddingBottom: 5,
    paddingTop: 5,
    width: 120
  },
  settingsContainer: {
    flex: 4
  },   
  settingsFooter : {
    alignItems: 'center',
    flex: 1,
  },
  settingsScreen: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  singleSettingContainer: {
    paddingTop: 20
  },
  sliderList: {
    alignItems: 'baseline',
    paddingBottom: 40,
    paddingTop: 30,
  },
  substitutionContainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  substitutionElement: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  substitutionItemBenefitsItem: {
    backgroundColor: Colors.krBlue,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: 2,
    padding: 4
  },
  substitutionItemContainer: {
    marginTop: 20,
    width: '100%',
  },
  substitutionPreviewComponent: {
    borderRadius: 20,
    color: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  substitutionPreviewComponentBottomElement: {
    backgroundColor: '#D9D9D9',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingVertical: 8
  },
  substitutionPreviewComponentTopElement: {
    backgroundColor: Colors.krGreen,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  substitutionsListContainer: {
    height: '100%',
    marginHorizontal: 16
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    rowGap: 50
  },
  tag: {
    backgroundColor: Colors.krGreenLight,
    borderRadius: 24,
    width: 'auto',
  },
  textfieldlist: {
    fontFamily: 'Inter-DisplaySemiBold',
  },
  userContainer: {
    flex: 1,
  },
  userContent: {
    paddingHorizontal: '5%',
  },
  userIcon: undefined,
  userTab: {
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    borderRadius: 1000,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  userTabItem: {
    borderRadius: 1000,
    margin: 5,
    padding: 10,
  },
  userTabItemActive: {
    backgroundColor: Colors.krGreen,
  },
  whiteText: {
    color: Colors.textLight,
    opacity: 0.8,
  }
},
)