import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";

const Cartwidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const CantidadItems = getTotalItems();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 40,
      top: 16,
      padding: "0 4px",
    },
  }));

  return (
    <Link to="/cart">
      <StyledBadge badgeContent={CantidadItems} showZero color="info">
        <BsCart3 size="30px" color="black" />
      </StyledBadge>
    </Link>
  );
};

export default Cartwidget;
