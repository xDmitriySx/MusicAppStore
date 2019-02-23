import React from 'react';
import { Image, Card, Icon, Button } from 'semantic-ui-react';

const ShowCartComponent = musicCart => {

    const { title, composer, price, image, removeFromCartComponent, ind } = musicCart;
        return(
          <Card>
          <Image src={image} />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
              <span>{composer}</span>
            </Card.Meta>
              </Card.Content>
                <Card.Content extra>
              <Icon name='rub' />
              {price}
          </Card.Content>
          <Button onClick={removeFromCartComponent.bind(this, ind)} icon="trash"/> 
        </Card>
      );
   };
  

export default ShowCartComponent; 

