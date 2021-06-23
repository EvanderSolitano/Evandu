import React from 'react';
import './Evantea.css';
import appletea from './Appletea.jpg';
import cucumbertea from './Cucumbertea.jpg';
import gingertea from './Gingertea.jpg';
import greentea from './greentea.jpg';
import vanfalse from './vanderfalse.jpg';
import tsaa from './tsaa.png';
function Evantea(){
    return(
 <section>
         <img className="backgo" src={vanfalse}></img>
     <div id="tsaa"><img src={tsaa}/></div>
     <div className="container">
         <ul id="tea">
         <li><img src={appletea} alt=""/><h3>P10 APPLE TEA</h3><h5>Madulas sa tutunlan</h5><button>BUY</button></li>
         <li><img src={cucumbertea} alt=""/><h3>P10 CUCUMBER TEA</h3><h5>Masarap sa tutunlan</h5><button>BUY</button></li>
         <li><img src={gingertea} alt=""/><h3>P10 GINGER TEA</h3><h5>Magaras sa tutunlan</h5><button>BUY</button></li>
         <li><img src={greentea} alt=""/><h3>P10 GREEN TEA</h3><h5>Okay lang ang lasa</h5><button>BUY</button></li>
         </ul>
     </div>
 </section>


    );
}
export default Evantea;