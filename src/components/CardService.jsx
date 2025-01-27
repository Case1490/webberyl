const CardService = ({ image, title, paragraph }) => {
  return (
    <div className="bg-white lg:h-[250px] rounded-xl shadow-xl px-4 py-6 flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-center gap-x-4">
      <div className="order-2 lg:order-1 w-[150px] lg:w-auto">
        <img src={image} alt={title} />
      </div>
      <div className="lg:text-left px-4 order-1 lg:order-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-xs">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardService;
