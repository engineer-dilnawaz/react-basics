const BodyShimmer = (props) => {
  const { cardsCount = 10 } = props;
  return (
    <div className="body-shimmer-container">
      <div className="header-shimmer"></div>
      <div className="shimmer-products-container">
        {Array.from({ length: cardsCount }).map((_, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default BodyShimmer;
