'use client'
import './notification.css'
export const Notification = ({text ,status}) => {
  
    return ( 
    <div className='not'>
        <div className={status}>
            {text}
        </div>
    </div> );
}
 
export default Notification;