
interface Props {
  title: string;
  subtitle: string;
  image: string;
}

const Breadcrumb = (props: Props) => {
  const { title, subtitle, image } = props;
  return (
    <div className="relative mb-6">
      <div className="pt-[100px] pb-[130px] text-center">
        <h2 className="text-4xl font-bold mt-2.5 mb-3.5">{title}</h2>
        <span>Trang chủ &nbsp; / &nbsp;</span>
        <span>{subtitle}</span>
      </div>
      <img
        src={image}
        alt=""
        className="absolute top-[-15px] w-full h-full object-cover z-[-1]"
      />
    </div>
  );
};

export default Breadcrumb;
