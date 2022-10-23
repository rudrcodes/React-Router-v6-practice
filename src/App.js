import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { useState } from "react";
import SharedProductLayout from "./pages/SharedProductLayout";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      {/* <h1>Rudransh</h1> */}
      {/* <nav>OUR NAV</nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productID" element={<SingleProduct />} />
          </Route>
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} myVar="rudra" />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <footer>OUR footer</footer> */}
    </>
    // </>
  );
}

export default App;
