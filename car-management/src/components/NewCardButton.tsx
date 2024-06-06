import React from "react";
import { Button } from "@mui/material";

const NewCardButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", margin: "20px" }}>
      <Button variant="contained" color="primary" onClick={onClick} style={{ background: "orange" }}>
        Novo Card
      </Button>
    </div>
  );
};

export default NewCardButton;
