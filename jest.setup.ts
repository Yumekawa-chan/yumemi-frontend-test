import '@testing-library/jest-dom';

if (typeof window !== 'undefined') {
  if (!window.ResizeObserver) {
    window.ResizeObserver = class ResizeObserver {
      disconnect() {}
      observe() {}
      unobserve() {}
    };
  }
}

process.env.PREFECTURES_API_URL = 'http://test/prefectures';
process.env.POPULATION_API_URL = 'http://test/population';
process.env.API_KEY = 'TEST_KEY';
