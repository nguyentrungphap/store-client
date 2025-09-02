interface Props {
  image?: string;
}
const Left = (props: Props) => {
  const { image } = props;
  return (
    <div className="w-2/5">
      <img src={image} alt="" className="w-full h-auto object-cover" />
    </div>
  );
};

export default Left;
