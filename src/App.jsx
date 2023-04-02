import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./Components/Home";
import RQsuperhero from "./Components/RQsuperhero";
import Superhero from "./Components/Superhero";
import Navbar from "./Layout/Navbar";
import Mysuperhero from "./Components/Mysuperhero";
import Rqsuperheropage from "./Components/Rqsuperhero.page";
import Rq_Parallel from "./Components/Rq_Parallel";
import DynamicParallel from "./Components/DynamicParallel";
import DependentQuery from "./Components/DependentQuery";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App w-screen h-screen bg-slate-300">
          {/* <h1 className="text-[40px]">
            <Navbar />
          </h1> */}
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" index element={<Home />} />
              <Route path="superhero" element={<Superhero />} />
              <Route path="rq-superHero">
                <Route index element={<RQsuperhero />} />
                <Route path="/rq-superHero/:id" element={<Rqsuperheropage />} />
              </Route>
              <Route path="/mysuperhero" element={<Mysuperhero />} />
              <Route path="/rq-parallel" element={<Rq_Parallel />} />
              <Route
                path="/rq-dependent"
                element={<DependentQuery email={"jeevankarki31@gmail.com"} />}
              />
              <Route
                path="/rq-dynamic"
                element={<DynamicParallel heroIds={[1, 3, 4]} />}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default App;
