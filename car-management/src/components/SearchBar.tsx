import React, { useState } from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_CARS } from "../grapql/queries";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  setSearchResults: (results: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchResults }) => {
  const [nome, setNome] = useState("");
  const [pegaCarrosPorNome, { loading, data }] = useLazyQuery(SEARCH_CARS, {
    onCompleted: data => setSearchResults(data.pegaCarrosPorNome)
  });

  const handleSearch = () => {
    pegaCarrosPorNome({ variables: { nome } });
  };

  return (
    <Grid container spacing={1} alignItems="center" justifyContent="center" style={{ margin: "55px 0" }}>
      <Grid item>
        <TextField
          style={{ backgroundColor: "#fff", width: "700px", borderRadius: "5px" }}
          variant="outlined"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Digite aqui sua busca..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="get search"
                  onClick={() => {
                    handleSearch();
                  }}
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
