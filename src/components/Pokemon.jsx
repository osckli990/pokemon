const Pokemon = ({ name, category }) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>Category: {category}</p>
    </article>
  );
};

export default Pokemon;
