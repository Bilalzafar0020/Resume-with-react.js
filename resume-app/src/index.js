import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pics from './pics/IMG-20210924-WA0002.jpg'

function Cv(){

return <div className='main'>

  <div className='secondMain'>

    <div className='pic'>
        <h1>Bilal zafar</h1>
    </div>

 <div className='skill'></div>


  </div>

</div>

}

ReactDOM.render(<Cv/>, document.querySelector('#root'));
