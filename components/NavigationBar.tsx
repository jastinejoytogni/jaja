import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Avatar, Text } from "@rneui/themed";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../types/navigation";

const NavBar: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Replace with actual username from context/auth in the future
  const username = "username";

  return (
    <View style={styles.navBar}>
      <View style={styles.menuContainer}>
        <Text style={styles.menuItem}>BCPC-CMS</Text>
        <Text
          style={styles.menuItem}
          onPress={() => navigation.navigate("Dashboard")}
        >
          Dashboard
        </Text>
        <Text style={styles.menuItem}>CAR Management</Text>
        <Text
          style={styles.menuItem}
          onPress={() => navigation.navigate("CICLManagement")}
        >
          CICL Management
        </Text>
        <Text
          style={styles.menuItem}
          onPress={() => navigation.navigate("Reports")}
        >
          Reports
        </Text>
      </View>
      {/* User Profile Dropdown */}
      <View style={styles.userContainer}>
        <TouchableOpacity
          style={styles.userButton}
          onPress={() => setDropdownVisible((v) => !v)}
          activeOpacity={0.7}
        >
          <Avatar
            rounded
            size="small"
            icon={{ name: "person", type: "material", color: "#888" }}
            containerStyle={{ backgroundColor: "#e0e0e0" }}
          />
          <Text style={styles.userText}>{username}</Text>
          <MaterialIcons
            name={dropdownVisible ? "arrow-drop-up" : "arrow-drop-down"}
            size={24}
            color="#333"
          />
        </TouchableOpacity>
        <Modal
          visible={dropdownVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setDropdownVisible(false)}
        >
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setDropdownVisible(false)}
          >
            <View style={styles.dropdownMenu}>
              <TouchableOpacity style={styles.dropdownItem}>
                <MaterialIcons name="person" size={20} color="#1976d2" />
                <Text style={styles.dropdownText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <MaterialIcons name="settings" size={20} color="#1976d2" />
                <Text style={styles.dropdownText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <MaterialIcons name="logout" size={20} color="#d32f2f" />
                <Text style={styles.dropdownText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  menuItem: {
    marginLeft: 24,
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  userContainer: {
    position: "relative",
    marginLeft: 24,
  },
  userButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  userText: {
    marginHorizontal: 8,
    fontWeight: "bold",
    fontSize: 15,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 60,
    paddingRight: 32,
  },
  dropdownMenu: {
    position: "absolute",
    top: 48,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
    minWidth: 150,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  dropdownText: {
    marginLeft: 12,
    fontSize: 15,
    color: "#333",
  },
});

export default NavBar;
