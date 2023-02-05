import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {

  let today = new Date();
  let year = today.getFullYear();

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/matias.cobos' target={"_blank"} className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/Matias_Cobos'  target={"_blank"} className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.instagram.com/cobos.matias/' target={"_blank"} className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/matias-cobos/' target={"_blank"} className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/MatiCobos' target={"_blank"} className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                <Link to={'/'} href="#home">Matias Cobos</Link>
              </h6>
              <p>
                    Buy official Fulham FC merchandise and gifts including home and away kit, training wear, gifts and accessories. Worldwide shipping available
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                    <Link to={"category/shirt"}>Shirt</Link>
              </p>
              <p>
                    <Link to={"category/pants"}>Pants</Link>
              </p>
              <p>
                    <Link to={"category/jacket"}>Jacket</Link>
              </p>
              <p>
                    <Link to={"category/polo"}>Polo</Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Buenos Aires, BA 10012, ARG
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                casla_matias@hotmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 54 1169065721
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
        
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {year} Copyright: <a href='https://github.com/MatiCobos' target={"_blank"}><MDBIcon fab icon="github" /> Matias Cobos</a> 
      </div>
    </MDBFooter>
  );
}

export default Footer