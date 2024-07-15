import { useEffect } from 'react'
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType
} from 'react-router-dom'
import { init, reactRouterV6BrowserTracingIntegration, replayIntegration } from '@sentry/react'

init({
  dsn:
    'https://c72e0ea144ed1a1a27e8e362f6e489f4@o4507603122257920.ingest.de.sentry.io/4507603125403728',
  integrations: [
    reactRouterV6BrowserTracingIntegration({
      useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes
    }),
    replayIntegration()
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: [],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
})
