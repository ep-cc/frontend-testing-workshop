import { useState } from 'react';


export default function Star() {
  const [starred, setStarred] = useState(false);

  return (<div className='star' title='star' onClick={() => setStarred(starred => !starred)}>
      {
        starred ? '★' : '☆'
      }
    </div>);
}
