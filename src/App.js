import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./Home";
import Contact from "./Contact";
import "./App.css";
import { Suspense } from "react";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <div className="App  flex justify-center">
      <div
        className="border-indigo-500/100 border-4 bottom-4 rounded-3xl p-2 mt-20 text-2xl bg-slate-400  w-2/5 
          flex-col 
      "
      >
        <QueryClientProvider client={client}>
          <Suspense fallback={<h1>Data Loading.......</h1>}>
            <Home />
            <Contact />
          </Suspense>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
