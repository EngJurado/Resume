// IP Geolocation service for detecting user country
export interface GeolocationData {
  country: string;
  countryCode: string;
  region: string;
  city: string;
}

// List of Latin American countries and Spain
export const LATIN_AMERICAN_COUNTRIES = new Set([
  'AR', // Argentina
  'BO', // Bolivia
  'BR', // Brazil
  'CL', // Chile
  'CO', // Colombia
  'CR', // Costa Rica
  'CU', // Cuba
  'DO', // Dominican Republic
  'EC', // Ecuador
  'SV', // El Salvador
  'GT', // Guatemala
  'HN', // Honduras
  'MX', // Mexico
  'NI', // Nicaragua
  'PA', // Panama
  'PY', // Paraguay
  'PE', // Peru
  'UY', // Uruguay
  'VE', // Venezuela
  'ES', // Spain
  'PR', // Puerto Rico
]);

/**
 * Detect user location using IP geolocation
 * @returns Promise that resolves to geolocation data or null if failed
 */
export async function detectUserLocation(): Promise<GeolocationData | null> {
  try {
    // Use a free IP geolocation service
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Geolocation API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      country: data.country_name,
      countryCode: data.country_code,
      region: data.region,
      city: data.city,
    };
  } catch (error) {
    console.warn('Failed to detect user location:', error);
    return null;
  }
}

/**
 * Determine default language based on country
 * @param countryCode - Two-letter country code
 * @returns 'es' for Latin America/Spain, 'en' for others
 */
export function getLanguageFromCountry(countryCode: string): string {
  return LATIN_AMERICAN_COUNTRIES.has(countryCode.toUpperCase()) ? 'es' : 'en';
}

/**
 * Detect user's preferred language based on their country
 * @returns Promise that resolves to language code ('es' or 'en')
 */
export async function detectUserLanguage(): Promise<string> {
  try {
    const location = await detectUserLocation();
    if (location) {
      return getLanguageFromCountry(location.countryCode);
    }
  } catch (error) {
    console.warn('Language detection failed, falling back to English');
  }
  
  // Fallback to English if geolocation fails
  return 'en';
}