// src/components/CarList.tsx
import React, { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import CarCard from "./CarCard";
import EditCar from "./EditCar";
import AddCar from "./AddCar";
import SearchBar from "./SearchBar";
import imagemFundo from "../assets/imagemFundo/fundo-busca.png";
import styles from "../assets/css/fontImport.module.scss";

const GET_CARS = gql`
  query GetCars {
    allCarsWithPhotos {
      id
      name
      status
      photo {
        id
        base64
      }
    }
  }
`;

const DELETE_CAR = gql`
  mutation ExcluirCar($id: Int!) {
    excluirCar(id: $id)
  }
`;

const CarList: React.FC = () => {
  const { loading, error, refetch } = useQuery(GET_CARS);
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [deleteCar] = useMutation(DELETE_CAR);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleEditCar = (car: any) => {
    setSelectedCar(car);
  };

  const handleDeleteCar = async (id: number) => {
    try {
      await deleteCar({ variables: { id } });
      refetch();
      alert("Carro excluido!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchResults = (results: any) => {
    setSearchResults(results);
    setHasSearched(true);
  };

  //const carsToDisplay = searchResults.length > 0 ? searchResults : data.allCarsWithPhotos;
  const carsToDisplay = hasSearched ? searchResults : [];

  return (
    <div>
      <Grid style={{ width: "100%", minHeight: "190px", border: "1px solid grey", backgroundImage: `url(${imagemFundo})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <SearchBar setSearchResults={handleSearchResults} />
      </Grid>

      <Grid container style={{ maxWidth: "980px", margin: "20px auto" }}>
        <Typography className={styles.fontMuli} variant="h5" style={{ marginLeft: "20px", color: "#5F1478", textTransform: "none", fontWeight: 700 }}>
          Resultado de busca
        </Typography>
        <AddCar refetch={refetch} />
      </Grid>
      <Grid container spacing={3} style={{ maxWidth: "980px", margin: "20px auto" }}>
        {carsToDisplay.map((car: any) => (
          <Grid item key={car.id}>
            <CarCard car={car} onEdit={() => handleEditCar(car)} onDelete={() => handleDeleteCar(car.id)} />
          </Grid>
        ))}
      </Grid>
      {selectedCar && <EditCar car={selectedCar} refetch={refetch} onClose={() => setSelectedCar(null)} />}
    </div>
  );
};

export default CarList;
