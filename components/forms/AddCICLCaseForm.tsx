import { Button, Text } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export const OFFENSES = [
  { label: "Theft", value: "Theft" },
  { label: "Vandalism", value: "Vandalism" },
  { label: "Assault", value: "Assault" },
  // Add more as needed
  // TODO: Needs to be fetched from API
];

export const STATUS_OPTIONS = [
  { label: "Ongoing", value: "Ongoing" },
  { label: "Resolved", value: "Resolved" },
  { label: "Court Hearing", value: "Court Hearing" },
  // TODO: Needs to be fetched from API
];

const STATUS_COLORS: Record<string, string> = {
  "Ongoing": "#FFD600",
  "Resolved": "#43A047",
  "Court Hearing": "#FF5252",
  // TODO: Needs to be fetched from API
};

export type AddCICLCaseFormValues = {
  firstName: string;
  lastName: string;
  birthdate: string;
  offense: string;
  status: string;
  officer: string;
};

type Props = {
  onSubmit: (values: AddCICLCaseFormValues) => void;
  onCancel: () => void;
};

const AddCICLCaseForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [offense, setOffense] = useState(OFFENSES[0].value);
  const [status, setStatus] = useState(STATUS_OPTIONS[0].value);
  const [officer, setOfficer] = useState("");

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      {/* TODO: Change to datepicker */}
      <TextInput
        style={styles.input}
        placeholder="Birthdate (YYYY-MM-DD)"
        value={birthdate}
        onChangeText={setBirthdate}
      />

      <Text style={styles.label}>Offense</Text>
      <Dropdown
        style={styles.dropdown}
        data={OFFENSES}
        labelField="label"
        valueField="value"
        value={offense}
        onChange={item => setOffense(item.value)}
        placeholder="Select Offense"
      />

      <Text style={styles.label}>Status</Text>
      <Dropdown
        style={styles.dropdown}
        data={STATUS_OPTIONS}
        labelField="label"
        valueField="value"
        value={status}
        onChange={item => setStatus(item.value)}
        placeholder="Select Status"
        renderItem={item => (
          <View style={{ flexDirection: "row", alignItems: "center", padding: 8 }}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: STATUS_COLORS[item.value],
                marginRight: 8,
              }}
            />
            <Text>{item.label}</Text>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Assigned Officer"
        value={officer}
        onChangeText={setOfficer}
      />

      <View style={styles.buttonRow}>
        <Button
          title="Cancel"
          type="outline"
          onPress={onCancel}
          containerStyle={{ flex: 1, marginRight: 8 }}
        />
        <Button
          title="Add"
          onPress={() =>
            onSubmit({
              firstName,
              lastName,
              birthdate,
              offense,
              status,
              officer,
            })
          }
          containerStyle={{ flex: 1, marginLeft: 8 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: { width: "100%" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16,
    marginTop: 16,
    color: "#1976d2",
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
  buttonRow: {
    flexDirection: "row",
    marginTop: 16,
  },
});

export default AddCICLCaseForm;
