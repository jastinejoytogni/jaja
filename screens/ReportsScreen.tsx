import { Button, Card, Text } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import { OFFENSES, STATUS_OPTIONS } from "../components/forms/AddCICLCaseForm";

const EXPORT_FORMATS = [
  { label: "PDF", value: "pdf" },
  { label: "CSV", value: "csv" },
  { label: "Excel (.xlsx)", value: "xlsx" },
];

const ASSIGNED_OFFICERS = [
  { label: "Officer Smith", value: "Officer Smith" },
  { label: "Officer Johnson", value: "Officer Johnson" },
  { label: "Officer Williams", value: "Officer Williams" },
  // Add more as needed
];

const ReportsScreen: React.FC = () => {
  // CICL Report state
  const [ciclMinAge, setCiclMinAge] = useState("");
  const [ciclMaxAge, setCiclMaxAge] = useState("");
  const [ciclOffenses, setCiclOffenses] = useState([]);
  const [ciclStatus, setCiclStatus] = useState([]);
  const [ciclOfficer, setCiclOfficer] = useState([]);
  const [ciclExport, setCiclExport] = useState(EXPORT_FORMATS[0].value);

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.cardTitle}>CICL Reports</Card.Title>
        <Card.Divider />
        <Text style={styles.label}>Age Range</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Min"
            keyboardType="numeric"
            value={ciclMinAge}
            onChangeText={setCiclMinAge}
          />
          <Text style={{ marginHorizontal: 8 }}>to</Text>
          <TextInput
            style={styles.input}
            placeholder="Max"
            keyboardType="numeric"
            value={ciclMaxAge}
            onChangeText={setCiclMaxAge}
          />
        </View>
        <Text style={styles.label}>Offense Types</Text>
        <MultiSelect
          style={styles.dropdown}
          data={OFFENSES}
          labelField="label"
          valueField="value"
          value={ciclOffenses}
          onChange={(selected: any) => setCiclOffenses(selected)}
          placeholder="Select Offense Types"
          search
        />
        <Text style={styles.label}>Case Status</Text>
        <MultiSelect
          style={styles.dropdown}
          data={STATUS_OPTIONS}
          labelField="label"
          valueField="value"
          value={ciclStatus}
          onChange={(selected: any) => setCiclStatus(selected)}
          placeholder="Select Status"
          search
        />
        <Text style={styles.label}>Assigned Officer</Text>
        <MultiSelect
          style={styles.dropdown}
          data={ASSIGNED_OFFICERS}
          labelField="label"
          valueField="value"
          value={ciclOfficer}
          onChange={(selected: any) => setCiclOfficer(selected)}
          placeholder="Select Officer"
          search
        />
        <View style={styles.row}>
          <Dropdown
            style={[styles.dropdown, { flex: 1, marginRight: 8 }]}
            data={EXPORT_FORMATS}
            labelField="label"
            valueField="value"
            value={ciclExport}
            onChange={(item) => setCiclExport(item.value)}
            placeholder="Export as"
          />
        </View>
        <Button
          title="Generate Report"
          onPress={() => {
            /* TODO: Generate logic */
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 32,
    backgroundColor: "#f5f6fa",
    minHeight: "100%",
  },
  card: {
    flex: 1,
    minWidth: 350,
    maxWidth: 500,
    marginHorizontal: 16,
    borderRadius: 12,
    paddingBottom: 24,
  },
  cardTitle: {
    color: "#1976d2",
    backgroundColor: "#e3f0fd",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 16,
    color: "#1976d2",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  dropdown: {
    borderColor: "#b3d1f7",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#f5faff",
    marginBottom: 16,
    minHeight: 44,
  },
});

export default ReportsScreen;
