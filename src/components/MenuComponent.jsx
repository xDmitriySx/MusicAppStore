import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react'


const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign='middle'>
  <List.Item>
    <List.Content floated='right'>
      <Button onClick={removeFromCart.bind(this, id)} color="red">Убрать</Button>
    </List.Content>
    <Image avatar src={image} />
    <List.Content>{title}</List.Content>
  </List.Item>
</List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
 
    <Menu inverted>
        <Menu.Item name='home'> Music Store Model </Menu.Item >
        
        <Menu.Menu position='right'>
          <Menu.Item name='signup'>
            Total: <b>  {totalPrice}  </b>
          </Menu.Item>
<Popup  trigger={<Menu.Item name='help'> Cart: <b>  {count}  </b> </Menu.Item>}
        content={items.map((music, i) => <CartComponent {...music}  key={i} />)}
        on="click"
        hideOnScroll
        />
        </Menu.Menu>
    </Menu>
)

export default MenuComponent;