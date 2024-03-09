import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'
import {HeroeCard} from "../components"
import { getHeroesByName } from "../helpers"




export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const {searchText, onInputChange} = useForm({
    searchText: q
  })


  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);

  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {/* dice que si la query=busqueda es igual a vacio,
          
            que lance ese div que diga que busque un heroe,
            de lo contrario si la longitud del texto es cero, que lance el otro div que diga que no hay resultados para esa busqueda. Son sintaxis de condicionales ternarios, si evalua algo, lance una porcion html., es asi de simple :)
          
          */}
          {
            (q === '')
            ?<div className="alert alert-primary">buscar un heroe</div>
            : (heroes.length === 0)
            && <div className="alert alert-danger">no hay resultados</div>
          }

         

          
        </div>

        {
          heroes.map(hero => (
            <HeroeCard key={hero.id} {...hero}/>
          ))
        }
        {/* nos tiene que traer un heroe por busqueda */}
        {/* <HeroeCard /> */}

      </div>


    </>
  )
}

