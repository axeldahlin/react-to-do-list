import React from 'react';

const ListItem = (props) => {
  return (
    <div onClick={props.clicked}>
      <p>{props.text}</p>
    </div>
  );
}

export default ListItem;