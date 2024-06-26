import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../component/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>

      <div className="row mt-5 w-100 justify-content-center align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-5 m-3 p-4">
          <h1 className='fs-3 '>Welcome to <span className='text-warning '> Media Player</span></h1>
          <p className='mt-5 ' style={{ textAlign: 'justify' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora qui eligendi minima neque aspernatur quis esse sed fuga expedita, delectus officiis aliquam id eos culpa nisi aut ad suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi assumenda doloremque recusandae modi praesentium, tempora totam earum, veritatis qui accusamus ullam iusto, corrupti rerum dolores ad repudiandae mollitia quas! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus qui nesciunt facilis natus minima, aliquid laudantium maiores quo? Nam placeat praesentium error adipisci cum accusamus facere laudantium, velit similique.</p>
          <button className='btn btn-warning px-3 py-2 mt-5 '><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75' />
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row w-100 mt-4">
        <h3 className='text-center mb-5'>Features</h3>
        <div className="col-md-1"></div>
        <div className="col-md-3 px-3 mb-4">
          <Card style={{ width: '100%' }} className='p-3 m-3'>
            <Card.Img variant="top" src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946" className='w-100' height='250px' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 px-5 mb-4">
        <Card style={{ width: '90%' }} className='p-3  ms-4 mt-3'>
            <Card.Img variant="top" src="https://media1.tenor.com/images/52f493bcc74deeded743cf55f25f0636/tenor.gif?itemid=5934248"className='w-100' height='250px' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-3 mb-4">
        <Card style={{ width: '100%' }} className='p-3 m-3'>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif"className='w-100' height='250px'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>
      
      <div className="row w-100 mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-10 border p-5 rounded">
          <div className="row mt-3">
            <div className="col-md-6">
              <h3 className='text-warning '>Simple Fast and Powerful</h3>
            <p><span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos necessitatibus temporibus, ratione, ea blanditiis autem est laudantium ipsam ipsum eius vitae in, voluptatum omnis. Tempore necessitatibus possimus nisi mollitia.</p>
            <p><span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos necessitatibus temporibus, ratione, ea blanditiis autem est laudantium ipsam ipsum eius vitae in, voluptatum omnis. Tempore necessitatibus possimus nisi mollitia.</p>
            <p><span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos necessitatibus temporibus, ratione, ea blanditiis autem est laudantium ipsam ipsum eius vitae in, voluptatum omnis. Tempore necessitatibus possimus nisi mollitia.</p>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="374" src="https://www.youtube.com/embed/9AizchSQURA" title="Kuthanthram - Manjummel Boys Promo Song | Chidambaram | Sushin Shyam ft. Vedan | Parava Films" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

     

    </>

  )
}

export default Landingpage