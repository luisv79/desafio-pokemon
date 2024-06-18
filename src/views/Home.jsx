import Pikachu from '../assets/pikachu.png';


export default function Home() {
  
  return (
    <>
    <div className="container">
    <div class="d-flex justify-content-center">
    <h1>¡Bienvenido maestro Pokemon!</h1>
    </div>
    <div className="imagen-hero">
    <img src={Pikachu} alt="" />
    </div>
    </div>
    </>
  );
}
