// // components/Product.js
// import React from 'react';
// import ProductData from './Productdata';

// function Product() {
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {ProductData.map((product) => (
//           <div className="col-md-4 mb-3" key={product.id}>
//             <div className="card" style={{ width: "100%" }}>
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.name}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
//                 <p className="card-text">{product.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Product;
import React from 'react';
import ProductData from './Productdata';

function Product() {
  return (
    <div className="container mt-5 pt-4">
      <h2 className="mb-4" style={{textAlign: "center" , color: "blue" , scrollPaddingTop:"50px" , fontStyle: "italic" , fontSize: "5rem"}}>Our Skincare Products</h2>
      <div className="row">
        {ProductData.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 card-hover" style={{width:"100%"}}>

              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
