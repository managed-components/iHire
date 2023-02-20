import { ComponentSettings, Manager, MCEvent } from '@managed-components/types'

const handler = (event: MCEvent, settings: ComponentSettings) => {
  const { client } = event

  client.fetch(`https://api.ihire.com/v1/track/apply-${settings.id}.gif`, {
    credentials: 'include',
    keepalive: true,
    mode: 'no-cors',
  })
}

export default async function (manager: Manager, settings: ComponentSettings) {
  manager.addEventListener('pageview', event => {
    handler(event, settings)
  })

  manager.addEventListener('event', event => {
    handler(event, settings)
  })
}
