import requests
from fastapi import APIRouter

router = APIRouter()


@router.get("/search")
def search_location(q: str):

    url = "https://nominatim.openstreetmap.org/search"

    params = {
        "q": q,
        "format": "jsonv2",
        "limit": 5,
        "viewbox": "75.70,22.85,75.95,22.60",
        "bounded": 1,
    }

    headers = {"User-Agent": "MapToMeetApp"}

    response = requests.get(url, params=params, headers=headers)

    data = response.json()
    cleaned_results = []

    for location in data:
        cleaned_results.append(
            {
                "name": location["display_name"],
                "latitude": location["lat"],
                "longitude": location["lon"],
            }
        )
    return cleaned_results
