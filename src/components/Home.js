import React from 'react'

function Home() {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://cdn.shopify.com/s/files/1/0669/4971/files/image_9_-min_1000x.png?v=1721274454" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://tse1.mm.bing.net/th/id/OIP.k8Iric2GtlYfb0l-18PPjAHaDj?w=2504&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0669/4971/files/image_9_-min_1000x.png?v=1721274454" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://tse1.mm.bing.net/th/id/OIP.k8Iric2GtlYfb0l-18PPjAHaDj?w=2504&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div> 
  )
}

export default Home
