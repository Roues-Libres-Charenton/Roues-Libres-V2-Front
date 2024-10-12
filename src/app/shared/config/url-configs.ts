export const urls = {
  apiBaseUrl: '',
  home: '',
  schedule: 'calendriers',
  contact: 'contact',
  membership: 'devenir-membre',

  api_endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
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

/**
 * [Nest] 12789  - 16/09/2024 17:30:10     LOG [RoutesResolver] AppController {/}: +21ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RoutesResolver] UserController {/user}: +1ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/user/:id, GET} route +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RoutesResolver] AuthController {/auth}: +1ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/auth/register, POST} route +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/auth/login, POST} route +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/auth/refresh, POST} route +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RoutesResolver] EventsController {/events}: +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/events/single, POST} route +1ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/events/recurring, POST} route +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/events, GET} route +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/events/recurring/:id/exceptions, POST} route +1ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/events/single/:id, PUT} route +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/events/recurring/:id, PUT} route +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/events/single/:id, DELETE} route +0ms
[Nest] 12789  - 16/09/2024 17:30:10     LOG [RouterExplorer] Mapped {/events/recurring/:id, DELETE} route +0ms
 */
