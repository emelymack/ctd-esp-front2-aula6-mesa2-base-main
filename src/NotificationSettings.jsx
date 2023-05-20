import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setNotificationState } from './store/notification.slice';

export const NotificationSettings = () => {
  const notificationState = useAppSelector(state => state.notification.active);
  const dispatch = useAppDispatch()

  const toggleNotifications = () => {
    dispatch(setNotificationState(!notificationState))
  }
  
  useEffect(()=> {
  },[notificationState])

  const alertNotifications = () => {
    const message = notificationState ? "Se ha guardado la selección de activar las notificaciones" : "Se ha guardado la selección de desactivar las notificaciones"
    alert(message)
  }

  return (
    <div className="card">
      <h1>
        ¿Desea recibir notificaciones sobre la serie Rick y Morty en su
        email?
      </h1>
      <p>
        Status: <b>{notificationState ? "Activas" : "Inactivas"}</b>
      </p>
      <br />
      {<button onClick={()=>toggleNotifications()} className='btnSecondary'>{notificationState ? "Desactivar notificaciones" : "Activar notificaciones"}</button>}
      <br />
      <br />
      <br />
      <button onClick={() => alertNotifications()} className="btnPrimary">
        Guardar
      </button>
    </div>
  )
}

// export default connect(mapStateToProps, mapDispatchToProps)(NotificationSettings)
// export default NotificationSettings