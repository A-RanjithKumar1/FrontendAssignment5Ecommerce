import Card from "./card";
import { FilterContext } from "../App";
import { useContext } from "react";
const Imagespage = (props) => {
  const { filter } = useContext(FilterContext);
  return (
    <div class="productspage">
      {props.arr.map((items) => {
        if (filter.length == 0) {
          return (
            <Card
              brand={items.brand}
              image={items.image}
              price={items.price}
              Disp={items.Disp}
              id={items.id}
            ></Card>
          );
        } else {
          if (filter.indexOf(items.brand) != -1) {
            return (
              <Card
                brand={items.brand}
                image={items.image}
                price={items.price}
                Disp={items.Disp}
                id={items.id}
              ></Card>
            );
          }
        }
      })}
    </div>
  );
};

export default Imagespage;
