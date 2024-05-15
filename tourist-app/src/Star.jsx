import { useState } from 'react';


export default function Star() {
  const [starred, setStarred] = useState(false);

  return (<div className='star' onClick={() => setStarred(starred => !starred)}>
      {
        starred ? '★' : '☆'
      }
    </div>);
}
