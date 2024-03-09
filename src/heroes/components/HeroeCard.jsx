import { Link } from "react-router-dom"

const CharactersByHero = ({ alter_ego, characters }) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>;
}







export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters


}) => {

    const heroImageUrl = `/heroes/${id}.jpg`

    return (
        <div className="col">
            <div className="card my-3">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                (alter_ego !== characters) && (<p>{characters}</p>)
                            }

                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                More Info
                            </Link>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}