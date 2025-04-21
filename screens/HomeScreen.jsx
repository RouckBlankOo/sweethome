import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/500' }} // Replace with your image URL
        style={styles.headerImage}
      >
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>Find Your Dream Home</Text>
          <Text style={styles.headerSubtitle}>Swipe through properties to find your perfect match</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Rentals')}
          >
            <Text style={styles.buttonText}>Find Rentals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSecondary]}
            onPress={() => navigation.navigate('Buy')}
          >
            <Text style={styles.buttonTextSecondary}>Explore Properties for Sale</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* How It Works Section */}
      <Text style={styles.sectionTitle}>How It Works</Text>
      <View style={styles.stepContainer}>
        <View style={styles.step}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>1</Text>
          </View>
          <View>
            <Text style={styles.stepTitle}>Browse Properties</Text>
            <Text style={styles.stepDescription}>
              Swipe through rental properties or explore our 3D carousel of homes for sale
            </Text>
          </View>
        </View>
        <View style={styles.step}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>2</Text>
          </View>
          <View>
            <Text style={styles.stepTitle}>Save Favorites</Text>
            <Text style={styles.stepDescription}>
              Like properties you’re interested in and build a personalized collection
            </Text>
          </View>
        </View>
        <View style={styles.step}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>3</Text>
          </View>
          <View>
            <Text style={styles.stepTitle}>Schedule Viewings</Text>
            <Text style={styles.stepDescription}>
              Contact property managers to schedule viewings for your favorite homes
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerImage: { height: 200, justifyContent: 'center' },
  headerOverlay: { backgroundColor: 'rgba(0,0,0,0.3)', padding: 20, height: '100%' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: 16, color: '#fff', marginVertical: 10 },
  button: { backgroundColor: '#1E90FF', padding: 15, borderRadius: 10, marginVertical: 5 },
  buttonSecondary: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#1E90FF' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  buttonTextSecondary: { color: '#1E90FF', textAlign: 'center', fontWeight: 'bold' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', margin: 20 },
  stepContainer: { paddingHorizontal: 20 },
  step: { flexDirection: 'row', marginBottom: 20 },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E6F0FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  stepNumberText: { fontSize: 18, color: '#1E90FF' },
  stepTitle: { fontSize: 16, fontWeight: 'bold' },
  stepDescription: { fontSize: 14, color: '#666' },
});

export default HomeScreen;