import React,{Fragment,useState} from 'react'
import PropertyDetail from "../Detail/PropertyDetail"
import "../CSS/style.css"

const Property = () => {
    const [detail] = useState(PropertyDetail);

  return (
    <Fragment>
        
        <section className='property'>
            <div className="center">
                <h2>Popüler Perdeler</h2>
            </div>
        

        <div className="row">
            {
                detail.map((detail)=>{
                  return(
                    <div className="column">
                    <div className="single-property">
                        <div className="card">
                            <div className="property-thumb">
                                <div className="property-tag">Satılık</div>
                                <img src={detail.Image} alt="Perde" />
                            </div>
                            <div className="property-content">
                                <h3>{detail.heading}</h3>
                                <div className="mark">
                                    <span>{detail.span}</span>
                                </div>
                                <div className="amount">{detail.amount}</div>
                            </div>
                            <div className="property-footer">
                                <ul>
                                    <li>
                                        <span>{detail.size}</span>
                                    </li>

                                    <li>
                                        <img src={detail.typeImage} alt="" />
                                        <span>{detail.type}</span>
                                    </li>
                                    <li>
                                        <img src={detail.pileImage} alt="" />
                                        <span>{detail.pile}</span>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>       
                  )      
                })
            }

            
        </div>
        <div className="more-property">
            <a href="https://www.sezerlerperde.com" className='property-btn'>Daha Fazlası İçin</a> 
        </div>
        </section>

    </Fragment>

  )
}

export default Property