import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const Direcciones = (props) => {
  return (
    <Breadcrumb className='bread-crumb'>
      <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item id='ac' active>{props.Direccion}</Breadcrumb.Item>
    </Breadcrumb>
  );
}



