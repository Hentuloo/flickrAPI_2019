export default {
  PATHS: {
    root: {
      path: '/',
      name: 'Main page',
    },
    gallery: {
      path: '/galeria',
      name: 'Galeria',
    },
  },
  API: {
    marilynMonroePhotos:
      'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=MarilynMonroe,woman',
  },
  STATEMETS: {
    waitForPhotos: 'Ładowanie obrazków...',
    lackOfPhotos: 'Brak zdjęć.',
  },
  errorMessage: {
    Timeout: 'Błąd! Spróbuj później (Timeout)',
    default: 'Błąd! Przepraszamy za utrudnienia',
  },
};
