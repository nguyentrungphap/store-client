import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Input from "@/components/Input";
import Select from "@/components/Select";
import TextField from "@/components/TextField";
import Maincontent from "@/layouts/MainLayout/components/Content";

type Props = {};

const Home = (props: Props) => {
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
      <CheckBox>Label</CheckBox>
      <CheckBox>Required *</CheckBox>
      <CheckBox disabled={true} checked={true}>
        Disabled
      </CheckBox>
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
