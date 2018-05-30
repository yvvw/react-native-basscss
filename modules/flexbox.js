import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  flexRow: { flexDirection: 'row' },
  flexRowReverse: { flexDirection: 'row-reverse' },
  flexColumn: { flexDirection: 'column' },
  flexColumnReverse: { flexDirection: 'column-reverse' },

  flexAutoGrow: { flexGrow: 1 },
  flexNoShrink: { flexShrink: 0 },

  flexWrap: { flexWrap: 'wrap' },

  itemsStart: { alignItems: 'flex-start' },
  itemsEnd: { alignItems: 'flex-end' },
  itemsCenter: { alignItems: 'center' },
  itemsStretch: { alignItems: 'stretch' },
  itemsBaseline: { alignItems: 'baseline' },

  selfAuto: { alignSelf: 'auto' },
  selfStart: { alignSelf: 'flex-start' },
  selfEnd: { alignSelf: 'flex-end' },
  selfCenter: { alignSelf: 'center' },
  selfStretch: { alignSelf: 'stretch' },
  selfBaseline: { alignSelf: 'baseline' },

  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  justifyEvenly: { justifyContent: 'space-evenly' },

  contentStart: { alignContent: 'flex-start' },
  contentEnd: { alignContent: 'flex-end' },
  contentCenter: { alignContent: 'center' },
  contentStretch: { alignContent: 'stretch' },
  contentBetween: { alignContent: 'space-between' },
  contentAround: { alignContent: 'space-around' }
})
