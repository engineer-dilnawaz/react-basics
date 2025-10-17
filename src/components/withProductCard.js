const withProductCard = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        {props?.item?.promoted ? (
          <label className="absolute px-2 py-0.5 rounded-lg bg-indigo-400 text-white font-medium top-4">
            Promoted
          </label>
        ) : null}
        <Component {...props} />
      </div>
    );
  };
};

export default withProductCard;
