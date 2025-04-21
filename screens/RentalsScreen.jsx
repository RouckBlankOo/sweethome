import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TinderCard from 'react-tinder-card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    location: 'Downtown, Metro City',
    price: '$2,500/mo',
    bedrooms: 2,
    bathrooms: 2,
    size: '1200 ft²',
    description: 'Stunning modern apartment with city views, featuring high ceilings and premium amenities.',
    image: 'https://via.placeholder.com/300', // Replace with a real image URL
  },
  // Add more properties as needed
];

const RentalsScreen = () => {
  const [lastDirection, setLastDirection] = useState('');

  const onSwipe = (direction) => {
    setLastDirection(direction);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Your Next Rental</Text>
      <Text style={styles.subHeader}>Swipe right on properties you like</Text>

      <View style={styles.cardContainer}>
        {properties.map((property) => (
          <TinderCard
            key={property.id}
            onSwipe={onSwipe}
            preventSwipe={['up', 'down']}
          >
            <View style={styles.card}>
              <Image source={{ uri: property.image }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{property.title}</Text>
              <View style={styles.cardDetails}>
                <Icon name="map-marker" size={20} color="#666" />
                <Text style={styles.cardLocation}>{property.location}</Text>
              </View>
              <Text style={styles.cardPrice}>{property.price}</Text>
              <View style={styles.cardSpecs}>
                <Text style={styles.spec}>🛏️ {property.bedrooms}</Text>
                <Text style={styles.spec}>🛁 {property.bathrooms}</Text>
                <Text style={styles.spec}>📏 {property.size}</Text>
              </View>
              <Text style={styles.cardDescription}>{property.description}</Text>
            </View>
          </TinderCard>
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.dislikeButton]}
          onPress={() => {}}
        >
          <Icon name="close" size={30} color="#FF0000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.likeButton]}
          onPress={() => {}}
        >
          <Icon name="heart" size={30} color="#00FF00" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold' },
  subHeader: { fontSize: 16, color: '#666', marginBottom: 20 },
  cardContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 10,
  },
  cardImage: { width: '100%', height: 200, borderRadius: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  cardDetails: { flexDirection: 'row', alignItems: 'center' },
  cardLocation: { fontSize: 14, color: '#666', marginLeft: 5 },
  cardPrice: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  cardSpecs: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
  spec: { fontSize: 14, color: '#666' },
  cardDescription: { fontSize: 14, color: '#666', marginTop: 10 },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dislikeButton: { borderWidth: 2, borderColor: '#FF0000' },
  likeButton: { borderWidth: 2, borderColor: '#00FF00' },
});

export default RentalsScreen;