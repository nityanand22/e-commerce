const ClothCard = ({ productInfo }) => {
  const { title, price, image, rating } = productInfo;
  const { rate, count } = rating;
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 w-60">
      <div className="m-4 p-2 w-[200px] bg-gray-100 max-h-fit flex flex-col justify-evenly rounded-lg ">
        <img alt="Cloth" src={image} className="f-full w-full rounded-lg" />
      </div>
      <p className="mt-4 text-lg font-bold">{title}</p>
      <p className="flex justify-between w-full mt-2 text-sm text-gray-600">
        {price}
      </p>
      <div>
        <span>Rate : {rate}</span>
        <span>Count: {count}</span>
      </div>
    </div>
  );
};

export default ClothCard;
