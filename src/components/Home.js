import React from 'react'

function Home() {
  return (
    <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://cdn.shopify.com/s/files/1/0669/4971/files/image_9_-min_1000x.png?v=1721274454" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://tse1.mm.bing.net/th/id/OIP.k8Iric2GtlYfb0l-18PPjAHaDj?w=2504&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0669/4971/files/image_9_-min_1000x.png?v=1721274454" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://tse1.mm.bing.net/th/id/OIP.k8Iric2GtlYfb0l-18PPjAHaDj?w=2504&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div> 
  )
}

export default Home
