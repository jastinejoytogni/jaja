import { MaterialIcons } from "@expo/vector-icons";
import { Button, Card, Text } from "@rneui/themed";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AddCICLCaseForm, {
  AddCICLCaseFormValues,
} from "../components/forms/AddCICLCaseForm";
import { CICLCase, ciclCases } from "../test-data/ciclCase";

const CICLManagementScreen: React.FC = () => {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<"name" | "age" | "status" | "officer">(
    "name"
  );
  const [sortAsc, setSortAsc] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const [cases, setCases] = useState<CICLCase[]>(ciclCases);

  // Filter and sort logic
  const filtered = cases
    .filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.offense.toLowerCase().includes(search.toLowerCase()) ||
        c.status.toLowerCase().includes(search.toLowerCase()) ||
        c.officer.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === "age") {
        return sortAsc ? a.age - b.age : b.age - a.age;
      }
      if (sortKey === "name") {
        return sortAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sortKey === "status") {
        return sortAsc
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      }
      if (sortKey === "officer") {
        return sortAsc
          ? a.officer.localeCompare(b.officer)
          : b.officer.localeCompare(a.officer);
      }
      return 0;
    });

  // Table header with sort
  const renderHeader = () => (
    <View style={styles.tableHeader}>
      <TouchableOpacity
        style={styles.headerCell}
        onPress={() => {
          setSortKey("name");
          setSortAsc((k) => !k);
        }}
      >
        <Text style={styles.headerText}>Name</Text>
        <MaterialIcons name="sort" size={16} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.headerCell}
        onPress={() => {
          setSortKey("age");
          setSortAsc((k) => !k);
        }}
      >
        <Text style={styles.headerText}>Age</Text>
        <MaterialIcons name="sort" size={16} />
      </TouchableOpacity>
      <View style={styles.headerCell}>
        <Text style={styles.headerText}>Offense</Text>
      </View>
      <TouchableOpacity
        style={styles.headerCell}
        onPress={() => {
          setSortKey("officer");
          setSortAsc((k) => !k);
        }}
      >
        <Text style={styles.headerText}>Assigned Officer</Text>
        <MaterialIcons name="sort" size={16} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.headerCell}
        onPress={() => {
          setSortKey("status");
          setSortAsc((k) => !k);
        }}
      >
        <Text style={styles.headerText}>Status</Text>
        <MaterialIcons name="sort" size={16} />
      </TouchableOpacity>
      <View style={styles.headerCell}>
        <Text style={styles.headerText}>Actions</Text>
      </View>
    </View>
  );

  // Table row
  const renderItem = ({ item }: { item: CICLCase }) => (
    <View style={styles.tableRow}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.age}</Text>
      <Text style={styles.cell}>{item.offense}</Text>
      <Text style={styles.cell}>{item.officer}</Text>
      <View
        style={[styles.cell, { flexDirection: "row", alignItems: "center" }]}
      >
        <View style={[styles.statusTag, { backgroundColor: item.statusColor }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <View style={[styles.cell, { flexDirection: "row" }]}>
        <Button
          type="clear"
          icon={<MaterialIcons name="visibility" size={24} color="#1976d2" />}
        />
        <Button
          type="clear"
          icon={<MaterialIcons name="edit" size={24} color="#388e3c" />}
        />
        <Button
          type="clear"
          icon={<MaterialIcons name="delete" size={24} color="#d32f2f" />}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f6fa" }}>
      <View style={styles.tableWrapper}>
        <Text style={styles.pageTitle}>CICL Management</Text>
        <Card containerStyle={styles.card}>
          <View style={styles.topBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search cases..."
              value={search}
              onChangeText={setSearch}
            />
            <Button
              title="Add New CICL Case"
              icon={<MaterialIcons name="add" size={24} color="#fff" />}
              onPress={() => setModalVisible(true)}
              buttonStyle={styles.addButton}
            />
          </View>
          {renderHeader()}
          <FlatList
            data={filtered}
            renderItem={renderItem}
            keyExtractor={(_, idx) => idx.toString()}
            style={{ marginTop: 8 }}
          />
        </Card>
        {/* Modal for Add New Case */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text h4 style={{ marginBottom: 16 }}>
                Add New CICL Case
              </Text>
              <AddCICLCaseForm
                onSubmit={(values: AddCICLCaseFormValues) => {
                  // TODO: Add logic to save the new case
                  setModalVisible(false);
                }}
                onCancel={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f6fa", padding: 16 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 32,
    paddingTop: 24,
    paddingBottom: 8,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1976d2",
    letterSpacing: 1,
  },
  tableWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  card: {
    padding: 0,
    borderRadius: 12,
    width: "100%",
    maxWidth: 1100,
    minWidth: 320,
    alignSelf: "center",
    elevation: 2,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
    height: 40,
    backgroundColor: "#fff",
  },
  addButton: {
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 40,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#e3e3e3",
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerCell: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 4,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  cell: {
    flex: 1,
    paddingHorizontal: 6,
    fontSize: 14,
    color: "#333",
  },
  statusTag: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: "center",
    minWidth: 70,
  },
  statusText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 13,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 450,
    maxWidth: "90%",
    padding: 32,
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 4,
    alignItems: "center",
  },
});

export default CICLManagementScreen;
