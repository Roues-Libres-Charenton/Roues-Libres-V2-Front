export const urls = {
  apiBaseUrl: 'https://xpgsbak3x3.execute-api.eu-north-1.amazonaws.com/dev',
  home: '',
  schedule: 'calendriers',
  contact: 'contact',
  membership: 'devenir-membre',

  api_endpoints: {
    auth: {
      login: '/auth/login',
      refresh: '/auth/refresh',
    },
    events: {
      single: '/events/single',
      recurring: '/events/recurring',
      getEventBetween: '/events',
      deleteReccuring: '/events/recurring/:id',
      deleteSingle: '/events/single/:id',
    },
    users: {
      user: '/user',
    },
  },
};
