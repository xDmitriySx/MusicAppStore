import React from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'



const FilterComponent = ({ setFilter, filterBy, searchQuery, setSearchQuery}) => (
        <Menu secondary>
          <Menu.Item active={filterBy === 'all'} onClick={setFilter.bind(this, 'all')}> All music </Menu.Item>
          <Menu.Item active={filterBy === 'price_high'} onClick={setFilter.bind(this, 'price_high')} > Expensive </Menu.Item>
          <Menu.Item active={filterBy === 'price_low'} onClick={setFilter.bind(this, 'price_low')} > Low cost </Menu.Item>
          <Menu.Item active={filterBy === 'composer'} onClick={setFilter.bind(this, 'composer')} > By composer </Menu.Item>
          <Menu.Item active={filterBy === 'cart'} onClick={setFilter.bind(this, 'cart')} > <Icon name='shopping cart'/>Your Cart  </Menu.Item>
          <Menu.Item> <Input placeholder="enter search query"  onChange={e => setSearchQuery(e.target.value)} value={searchQuery} icon="search"/>  </Menu.Item>
        </Menu>
);

export default FilterComponent;

  
  