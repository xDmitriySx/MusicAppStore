import React from 'react';
import { Card, Icon, Image, Button, Popup } from 'semantic-ui-react'

 const MusicCardComponent = music => {

  const { title, composer, price, image, addToCart, addedCount, description  } = music;
      return(
        <Card>
        <Popup inverted trigger={<Image src={image} as='a'/>} content={description} on="click" hideOnScroll/>
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
        <Button onClick={addToCart.bind(this, music)} color="green"> Добавить в корзину {addedCount > 0 && `(${addedCount})`} </Button>
      </Card>
    );
 };

export default MusicCardComponent;