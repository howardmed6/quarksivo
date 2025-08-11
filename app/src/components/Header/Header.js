import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Menú hamburguesa */}
      <TouchableOpacity style={styles.menuButton}>
        <Icon name="menu" size={24} color="#ffffff" />
      </TouchableOpacity>
      
      {/* Buscador */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#9ca3af" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar herramientas..."
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>
      
      {/* Corona y cuenta */}
      <View style={styles.rightButtons}>
        <TouchableOpacity style={styles.crownButton}>
          <Icon name="star" size={24} color="#fbbf24" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userButton}>
          <Icon name="person" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;