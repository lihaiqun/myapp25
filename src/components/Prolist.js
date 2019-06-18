import React from 'react';
const Com = ({ prolist }) => (
  prolist.map(item => (
    <li key = {item.id}>{item.title}</li>
  ))
)
export default Com;