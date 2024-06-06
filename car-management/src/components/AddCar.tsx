// src/components/AddCar.tsx
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, TextField, Typography, Drawer, IconButton, Box } from "@mui/material";
import { CAD_PHOTO, ADD_CAR } from "../grapql/mutations"; // Importando a mutation de adição de foto
import CloseIcon from "@mui/icons-material/Close";
import styles from "../assets/css/fontImport.module.scss";

const AddCar: React.FC<{ refetch: () => void }> = ({ refetch }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(true);
  const [base64, setBase64] = useState("");
  const [addCar] = useMutation(ADD_CAR);
  const [createPhoto] = useMutation(CAD_PHOTO);

  const handleAddCar = async () => {
    try {
      const { data: photoData } = await createPhoto({ variables: { base64string: base64 } });
      const photoId = photoData.createPhoto.id;
      await addCar({ variables: { name: name, photoId: photoId, status: status } });
      refetch();
      setOpen(false);
      alert("Carro Adicionado!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", margin: "20px" }}>
      <Button className={styles.fontMuli} variant="contained" color="primary" style={{ background: "#E76316", textTransform: "none", fontWeight: 600, margin: "0px 0px 0px 480px" }} onClick={() => setOpen(true)}>
        Novo Card
      </Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 400,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2
          }}
        >
          <IconButton onClick={() => setOpen(false)} style={{ alignSelf: "flex-end" }}>
            <CloseIcon />
          </IconButton>
          <img src={require("../assets/icones/icone_criar.png")} alt="" />
          <Typography className={styles.fontMuli} variant="h6" style={{ color: "#6A1B9A", marginBottom: 2 }}>
            Criar card
          </Typography>
          <hr style={{ width: "100%", border: "1px solid #ddd" }} />
          <TextField autoFocus margin="dense" label="Digite um nome para o card" type="text" fullWidth value={name} onChange={e => setName(e.target.value)} variant="outlined" />
          <Button variant="outlined" component="label" className={styles.fontMuli} style={{ width: "100%", marginTop: 16, color: "#E76316", borderColor: "#E76316", fontWeight: "600 !important" }}>
            Escolher arquivo
            <input type="file" accept="image/*" onChange={handleFileChange} hidden />
          </Button>
          <hr style={{ width: "100%", border: "1px solid #ddd" }} />
          <Button variant="contained" color="primary" className={styles.fontMuli} style={{ background: "#E76316", alignSelf: "flex-end" }} onClick={handleAddCar}>
            <span className={styles.fontMuli} style={{ color: "#fff", fontWeight: "bold", textTransform: "none" }}>
              Criar card
            </span>
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};

export default AddCar;
