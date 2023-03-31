import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./Components/Home";
import RQsuperhero from "./Components/RQsuperhero";
import Superhero from "./Components/Superhero";
import Navbar from "./Layout/Navbar";
import Mysuperhero from "./Components/Mysuperhero";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App w-screen h-screen bg-slate-300">
          <h1 className="text-[40px]">
            <Navbar />
          </h1>
          <Routes>
            <Route path="/" element={<Home />} index="/" />
            <Route path="/superhero" element={<Superhero />} />
            <Route path="/rq-superHero" element={<RQsuperhero />} />
            <Route path="/mysuperhero" element={<Mysuperhero />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default App;
