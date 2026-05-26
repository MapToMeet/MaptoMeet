type Suggestion = {
  name: string;
  latitude: string;
  longitude: string;
};

type SuggestionsListProps = {
  suggestions: Suggestion[];
  onSelect: (suggestion: Suggestion) => void;
};

function SuggestionsList({ suggestions, onSelect }: SuggestionsListProps) {
  return (
    <div className="suggestions-container">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="suggestion-item"
          onClick={() => onSelect(suggestion)}
        >
          {suggestion.name}
        </div>
      ))}
    </div>
  );
}

export default SuggestionsList;
