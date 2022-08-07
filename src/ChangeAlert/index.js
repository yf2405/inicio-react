import React from 'react';
import './bottonAlert.css';
import { WithStorageListener } from './WithStorageListener';

const ChangeAlert=({show,toggleShow})=>{
    if(show){return(
        <div className='PanelBackground'>
        <div className="Alertpanel">
        <p>Hubo cambios, ¿quieres actualizar para verlos?</p>
        <button className="AlertButton" onClick={()=> toggleShow(false)}
        >
        actualizar para ver
        </button>
       </div> 
       </div>
  );} 
   else{return null;}

}
const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)
export {ChangeAlertWithStorageListener}