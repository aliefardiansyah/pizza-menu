import pizzaData from "../data";

type PizzaObjProps = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};
const Menu = () => {
  const pizzas: PizzaObjProps[] = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We re still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

const Pizza = ({ pizzaObj }: { pizzaObj: PizzaObjProps }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
};
export default Menu;
