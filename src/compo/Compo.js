import Carousel from 'react-bootstrap/Carousel';

function Compo() {
  let images_table=["https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg"];
  return (
    <>
    <Carousel>
      {images_table.map(el => 
      <Carousel.Item>
        <img
        height="500px"
        width="200px"
          className="d-block w-100"
          src={el}
          alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      // <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg"
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
 ) }
    </Carousel>
    </>
  );
}

export default Compo;