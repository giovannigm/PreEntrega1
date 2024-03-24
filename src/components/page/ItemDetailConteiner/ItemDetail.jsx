import ItemCountConteiner from "../../common/ItemCount/ItemCountConteiner";
import "./ItemDetail.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const ItemDetail = ({ item, onAdd, initial }) => {
  if (!item) {
    return (
      <Stack sx={{ width: "70%", textAlign: "center", margin: "auto" }}>
        <Alert severity="error">Este producto NO existe</Alert>
      </Stack>
    );
  } else {
    return (
      <div className="container">
        <div className="content">
          <img src={item.img} alt="Producto" className="card-img" />
          <div className="text">
            <h5 className="title">{item.title}</h5>
            <p>{item.description}</p>
            <p>Precio: {item.price}</p>
          </div>
        </div>
        {initial && <p>ya tienes {initial} en el carrito </p>}
        <ItemCountConteiner
          stock={item.stock}
          onAdd={onAdd}
          initial={initial}
        />
      </div>
    );
  }
};
