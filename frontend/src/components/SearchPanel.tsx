import SuggestionsList from "./SuggestionsList";
import { useState } from "react";
import { searchLocations } from "../services/locationService";

type Suggestion = {
  name: string;
  latitude: string;
  longitude: string;
};

function SearchPanel() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const [sourceSuggestions, setSourceSuggestions] = useState<Suggestion[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<
    Suggestion[]
  >([]);

  const handleSourceChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setSource(value);
    const results = await searchLocations(value);
    setSourceSuggestions(results);
  };

  const handleDestinationChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setDestination(value);
    const results = await searchLocations(value);
    setDestinationSuggestions(results);
  };

  const handleSuggestionSelect = (sourceSuggestions: Suggestion) => {
    setSource(sourceSuggestions.name);
    setSelectedSource(sourceSuggestions);
    setSourceSuggestions([]);
  };

  const handleDestinationSelect = (destinationSuggestions: Suggestion) => {
    setDestination(destinationSuggestions.name);
    setSelectedDestination(destinationSuggestions);
    setDestinationSuggestions([]);
  };

  const [selectedSource, setSelectedSource] = useState<Suggestion | null>(null);

  const [selectedDestination, setSelectedDestination] =
    useState<Suggestion | null>(null);

  const handleSubmit = () => {
    console.log("SOURCE:", selectedSource);
    console.log("DESTINATION:", selectedDestination);
  };

  return (
    <div>
      {/*Input Section*/}
      <div className="mt-10">
        <div className="flex flex-row gap-6">
          <div className="relative w-full">
            <input
              placeholder="Enter Source"
              className="input-box"
              value={source}
              onChange={handleSourceChange}
            />
            <SuggestionsList
              suggestions={sourceSuggestions}
              onSelect={handleSuggestionSelect}
            />
          </div>

          <div className="relative w-full">
            <input
              placeholder="Enter Destination"
              className="input-box"
              value={destination}
              onChange={handleDestinationChange}
            />
            <SuggestionsList
              suggestions={destinationSuggestions}
              onSelect={handleDestinationSelect}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
