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
    <div className="flex justify-center App">
      <div className="flex-col w-full p-2 mt-20 text-2xl border-4 border-indigo-500/100 bottom-4 rounded-3xl bg-slate-400 ">
        <QueryClientProvider client={client}>
          <Suspense fallback={<h1>My Data Loading.......</h1>}>
            {/* Data feteching function calling  2 times from Home and Contact component but for react-query its fetches only 1 time. */}
            <Home />
            <Contact />
          </Suspense>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
