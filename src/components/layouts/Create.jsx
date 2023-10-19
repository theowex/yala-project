import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../assets/images/icon/Wallet.png'
import icon2 from '../../assets/images/icon/Category.png'
import icon3 from '../../assets/images/icon/Image2.png'
import icon4 from '../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Ofrece todo medio de pago",
            description: "Los participantes ganadores podrán pagar con tarjeta, efectivo y más. Tú no te preocupes por cobrar, nosotros nos encargamos.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "Publica tu colección",
            description: "Elije los productos que quieras subastar. Funkos, mangas, comics... todo!",
            icon : icon2,
            colorbg : "icon-color2"
        },
        {
            title: "Añade las fotos de tu producto",
            description: "Unas buenas fotos del producto harán más atractiva la subasta.",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "Publica tu subasta",
            description: "Elije el precio base y la fecha de termino y listo... es todo!",
            icon : icon4,
            colorbg : "icon-color4"
        },
    ]
    return (
        <section className="tf-box-icon create style1 tf-section">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions mg-bt-22">
                            <h2 className="tf-title pb-17">
                                Publica y subasta tus coleccionables</h2>                         
                        </div>
                    </div>
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>                 
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
            <div className="image">
                <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                             
            </div>
            <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
            <p className="content">{props.item.description}</p>
        </div>
    </div>
)

export default Create;
