
import cardLogo from "../assets/images/card-logo.svg"


function CardsContainer({formData}){

    return(
          <div className="cards_container">
           <div className="card1">   
             <div className="card1_logo">
              <img src={cardLogo} alt="cardLogo" />
             </div>
             <div className="card_content">
               <p id="number"> {formData.number}</p>
               <div className="card_content_info">
                <p>{formData.name}</p>
                <p>{formData.mm}/{formData.yy}</p>
               </div>
             </div>      
           </div>
           <div className="card2">
              <p>{formData.cardCvc}</p>
           </div>
         </div>
    )
}

export default CardsContainer