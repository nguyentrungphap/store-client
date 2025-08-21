import Button from "@/components/Button";
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
    </>
  );
};

export default Home;
