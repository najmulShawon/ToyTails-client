const Image = ({ toy }) => {
  const { picture, toyName } = toy;

  return (
    <div
      className="mb-5 lg:mb-0 "
      data-aos="zoom-in "
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
    >
      <img className="w-full  lg:w-72 h-72" src={picture} alt="" />
      <p className="text-black">{toyName}</p>
    </div>
  );
};

export default Image;
