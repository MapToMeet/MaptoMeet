import MapView from "./components/MapView.tsx";
import SearchPanel from "./components/SearchPanel.tsx";

function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="ax-w-7xl mx-auto w-full">
        {/*Input Section*/}
        <SearchPanel />
      </div>

      <div className="w-full h-[600px] rounded-2xl overflow-hidden mt-20">
        <MapView />
      </div>
    </div>
  );
}

export default App;
