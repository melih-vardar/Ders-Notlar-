//1. install et
// https://fkhadra.github.io/react-toastify/introduction
//npm install react-toastify

//2. importları yap: css dosyasını ve ToastContainer component'ini import et
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 3. app.jsx'de ToastContainer'ı kullan
function App() {
  return (
    <div>
      ...
      <ToastContainer />
    </div>
  );
}

//4. ilgili componentlerde Toast component'ini kullan
import { toast } from "react-toastify";

function Component() {
  const notify = () =>
    toast("Wow so easy !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
    <div>
      <button onClick={notify}>Notify !</button>
    </div>
  );
}
