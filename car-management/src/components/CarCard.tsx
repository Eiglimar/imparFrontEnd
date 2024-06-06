import React from "react";
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import styles from "../assets/css/fontImport.module.scss";
import { TrashIcon, EditIcon } from "../assets/icones/ButtonsIcons";

const CarCard: React.FC<{ car: any; onEdit: () => void; onDelete: () => void }> = ({ car, onEdit, onDelete }) => {
  return (
    <Card style={{ maxWidth: 220, margin: "0px 0px 0px 0px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <CardContent style={{ textAlign: "center" }}>
        {car.photo && <img src={car.photo.base64} alt={car.name} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%", marginBottom: "10px" }} />}
        <Typography className={styles.fontMuli} variant="h6" style={{ fontWeight: 600 }}>
          {car.name}
        </Typography>
      </CardContent>
      <CardActions style={{ border: "1px solid #FBFBFB", backgroundColor: "#FBFBFB" }}>
        <Button className={styles.fontMuli} onClick={onDelete} startIcon={<TrashIcon />} style={{ color: "#8F9598", fontWeight: "500", textTransform: "none", borderBottom: "none", borderLeft: "none", borderTop: "none", borderRight: "1px solid #ccc", borderTopRightRadius: 0, borderBottomRightRadius: 0, paddingRight: "15px" }}>
          Excluir
        </Button>
        <Button className={styles.fontMuli} onClick={onEdit} startIcon={<EditIcon />} style={{ color: "#8F9598", fontWeight: "500", textTransform: "none", border: "none", paddingLeft: "10px" }}>
          Editar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarCard;
