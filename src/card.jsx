import mango from "./assets/mango.jpg"

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={mango} alt="Manga Fruit Image" />
            <h2 className="card-title">Manga</h2>
            <p className="card-text">Best Fruit ever</p>
        </div>
    );
}

export default Card