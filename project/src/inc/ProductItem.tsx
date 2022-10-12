import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProBilgiler } from '../models/IProduct'

function ProductItem( item: { data: ProBilgiler  } ) {

  const navigate = useNavigate()
  const gotoDetail = () => {
    navigate('/detail/'+item.data.productId, { state: item.data })
  }  

  return (
    <div className="card col-sm-4 mb-3">
    <img src={item.data.images[0].normal} className="card-img-top" />
    <div className="card-body">
        <h5 className="card-title"> { item.data.productName } </h5>
        <p className="card-text"> { item.data.brief } </p>
        <a onClick={ gotoDetail } role='button' className="btn btn-primary" style={{ position: 'absolute', bottom: 5, right: 5,  }}><i className="bi bi-arrow-right"></i> Detail</a>
    </div>
    </div>
  )
}

export default ProductItem