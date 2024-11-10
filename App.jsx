import React, { useEffect } from 'react';
import { View, Text, SectionList, StyleSheet, Image } from 'react-native';
import { universitySections } from './uniDummyData'; // Ensure this data is properly formatted

const App = () => {
  // Optional: Uncomment this to log data to ensure it is correctly structured
  // useEffect(() => {
  //   console.log('University Sections:', universitySections);
  // }, []);

  return (
    <SectionList
      sections={universitySections} // Ensure this is an array of objects with a 'title' and 'data' properties
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          {/* Example Image, make sure to handle image paths if included */}
          {/* <Image source={{ uri: item.logo }} style={styles.logo} /> */}

          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.city}>City: {item.city}</Text>
            <Text style={styles.admissions}>Admissions: {item.admissions}</Text>
            <Text style={styles.fee}>Fee: {item.fee}</Text>
            <Text style={styles.ranking}>Ranking: {item.ranking}</Text>
          </View>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f1f1f1',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 14,
    color: 'gray',
  },
  admissions: {
    fontSize: 14,
    color: 'green',
  },
  fee: {
    fontSize: 14,
    color: 'blue',
  },
  ranking: {
    fontSize: 14,
    color: 'purple',
  },
});

export default App;
