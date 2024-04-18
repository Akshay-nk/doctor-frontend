import "./app.css";
import Layout from "./layout/Layout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

//paypal
const initialOptions = {
  "client-id": "ARyP9BrZmef9l1HWiEFz9pwOXZPydBqMWYeopZQVehJI4s2vvANRK9SVcsSYCStc8qZaVdESRaCsu5r4",
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <>
    <PayPalScriptProvider options={initialOptions}>
    <Layout/>
    </PayPalScriptProvider>
     
    </>
  );
}

export default App;
