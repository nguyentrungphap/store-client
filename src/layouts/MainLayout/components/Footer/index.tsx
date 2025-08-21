import ContactFooter from "./components/ContactFooter";
import FormFooter from "./components/FormFooter";

const Footer = () => {
  return (
    <div className="footer-background text-white px-3.5 pt-[80px] pb-6 mt-8">
      <FormFooter />
      <ContactFooter />
    </div>
  );
};

export default Footer;
