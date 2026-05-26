from app.config.config import settings
from supabase import Client, create_client

if not settings.SUPABASE_URL or not settings.SUPABASE_SERVICE_ROLE_KEY:
    raise ValueError("Supabase credentials missing in .env file")
# Initialize Supabase client
supabase: Client = create_client(
    settings.SUPABASE_URL, settings.SUPABASE_SERVICE_ROLE_KEY
)
