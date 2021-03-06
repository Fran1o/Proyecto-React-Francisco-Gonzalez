import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import styles from '../../CSS/gridProducts.module.css'


const Item = ({ id, category, name, description, price, stock, foto }) => {
  
  
  if(stock === 0){
        
    return <> 
              <div key={id}>

                  <Card className={styles.cardProducts}>
                      <Card.Img className={styles.imgItemListContainer} variant="top" src={foto} />
                        <Card.Body>
                          <Card.Title> {name} </Card.Title>
                           <Card.Text className={styles.cardText}>
                            USD {price}
          
                          </Card.Text>
                            <Button variant="danger" disabled> No hay stock disponible </Button>
                        </Card.Body>
                  </Card>
              </div>         
    
</>

}else{

  return <>
          <div key={id}>
            <Card className={styles.cardProducts}>
              <Card.Img className={styles.imgItemListContainer} variant="top" src={foto} />
               <Card.Body>
                  <Card.Title> {name} </Card.Title>
                    <Card.Text className={styles.cardText}>
                       USD {price}
                    </Card.Text>
                    <Link to={`/detalle/${id}`}>
                           <Button variant="primary">Detalle del producto</Button>
                      </Link>
                </Card.Body>
            </Card>
          </div>
  </>
}

};

export default Item;




