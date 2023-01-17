import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gettripdetail from "../API/gettripdetail";
import gettrips from "../API/gettrips";
import Header from "../components/Header";

function UserPage() {
  const { id } = useParams();
  const [trips, setTrips] = useState([]);

useEffect(()=>{
  gettrips(setTrips)
}, [])
  return (
    <main>
      <Header />
      <h1>Página acerca do usuário {id}</h1>
      {trips.map((viagem)=>{
        return(
          <>
            <ul>
              <li>id: {viagem.id}</li>
              <li>nome: {viagem.name}</li>
              <li>descrição: {viagem.description}</li>
            </ul>
            <button onClick={()=>gettripdetail(id, viagem.id)}>Detalhes</button>
          </>

        )
      })}
    </main>
  );
}

export default UserPage;
