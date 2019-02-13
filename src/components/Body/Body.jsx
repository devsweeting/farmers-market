import React from 'react';
import Panel from './Panel';
import { availableProduce } from '../../produce'


function Body(){
  return (
    <div>
      <div>
        { availableProduce.map( (produce, i) =>
          <Panel month={produce.month} item={produce.selection}
            key={i}/>
        ) }
      </div>
    </div>
  );

}

export default Body;
