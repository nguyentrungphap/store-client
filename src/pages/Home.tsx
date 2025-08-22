import Button from "@/components/Button";
import CheckBox, { type menuCheckBoxProps } from "@/components/CheckBox";
import Input from "@/components/Input";
import Select from "@/components/Select";
import TextField from "@/components/TextField";
import Maincontent from "@/layouts/MainLayout/components/Content";

const menuCheckBox: menuCheckBoxProps["items"] = [
  {
    value: "item1",
    isDisabled: false,
    isChecked: true,
    label: "Item 1",
    className: "item-class",
    defaultValue: "item1",
  },
  {
    value: "item2",
    isDisabled: true,
    isChecked: false,
    label: "Item 2",
    className: "item-class",
    defaultValue: "item2",
  },
];

const Home = () => {
  return (
    <>
      <Maincontent />
      <Button
        color="primary"
        size="md"
        startIcon={<i className="fas fa-plus" />}
        endIcon={<i className="fas fa-arrow-right" />}
        onClick={() => console.log("Button clicked")}
      >
        Button Text
      </Button>
      <CheckBox menuCheckBox={{ items: menuCheckBox }} />
      <Input type="text" />
      <Select>
        <option value="1">Select an option</option>
        <option value="2">Select an option 1</option>
        <option value="3">Select an option 2</option>
      </Select>
      <TextField />
    </>
  );
};

export default Home;
