import './itemContainer.css';
const getGreeting = () =>{
    return(
        <div className="item-list-container">
        <h2 className="greeting-text">¡Bienvenido a nuestra tienda Aura Joyas!</h2>
      </div>
    )
}


export const ItemListContainer =() => {
    return(
        <div>
            {getGreeting()}
            {/* < Card title= "aros de plata" price={8500} stock={8} />
            <Card title="Collar de oro" price={12000} stock={5} />
            <Card title="Pulsera de diamantes" price={35000} stock={2} /> */}

<img
        src="https://res.cloudinary.com/dwxeovcwr/image/upload/v1728532979/AURA_1_tsvfzo.png"
        alt="fondo"
        className="fondo"
      /> 
        </div>
    )
}