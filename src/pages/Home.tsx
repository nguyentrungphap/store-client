import IMG from "@/assets/right-silder-1.jpeg";

import Card from "@/components/Card";
import Maincontent from "@/layouts/MainLayout/components/Content";
const Home = () => {
  return (
    <>
      <Maincontent />
      <Card
        IMG={IMG}
        title="Shake & Spin Lion"
        price="750.000₫"
        oldPrice="4.500.000₫"
        rating={3}
        discount="80%"
      />
    </>
  );
};

export default Home;
