import { View, FlatList, Text, StyleSheet } from 'react-native'

import SubstitutionItem from './SubstitutionItem'

const SubstitutionsList = ({ navigation, substitutions }) => {

  return (
    <View style={styles.substitutionsListContainer}>
      <FlatList
        data={substitutions}
        renderItem={(substitution) => {
          return (
            <SubstitutionItem
              substitution={substitution}
              navigation={navigation}
            />
          )
        }}
        keyExtractor={(substitution, index) => {
          return substitution.id
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  substitutionsListContainer: {
    paddingTop: 64,
    marginHorizontal: 32,
    height: '100%',
  },
})

export default SubstitutionsList