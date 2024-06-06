// src/components/EditCar.tsx
import React, { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { CAD_PHOTO, UPDATE_CAR } from "../grapql/mutations";

const EditCar: React.FC<{ car: any; refetch: () => void; onClose: () => void }> = ({ car, refetch, onClose }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(car.name);
  const [status, setStatus] = useState(true);
  const [base64, setBase64] = useState("");
  const [updateCar] = useMutation(UPDATE_CAR);
  const [addPhoto] = useMutation(CAD_PHOTO);

  useEffect(() => {
    setName(car.name);
    setStatus(car.status);
  }, [car]);

  const handleUpdateCar = async () => {
    try {
      let photoId = car.photo.id;
      if (base64) {
        const { data: photoData } = await addPhoto({ variables: { base64string: base64 } });
        photoId = photoData.createPhoto.id;
      }
      await updateCar({ variables: { id: car.id, name, status, photoId } });
      refetch();
      onClose();
      alert("Atualização feita com sucesso!");
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
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle>Editar Carro</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" label="Nome" type="text" fullWidth value={name} onChange={e => setName(e.target.value)} />
        {car.photo && <img src={car.photo.base64} alt={car.name} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%", marginBottom: "10px" }} />}
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleUpdateCar} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCar;
