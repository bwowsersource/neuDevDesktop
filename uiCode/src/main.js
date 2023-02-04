import './app.css'
// @ts-ignore
import App from './App.svelte';
import authInfo from '../../.tmp/auth_info.json';


if (import.meta.env.DEV) {
  const { accessToken, port } = authInfo
  // @ts-ignore
  window.NL_PORT = port
  // @ts-ignore
  window.NL_TOKEN = accessToken
  // @ts-ignore
  window.NL_ARGS = [
    'bin\\neutralino-win_x64.exe',
    '',
    '--load-dir-res',
    '--path=.',
    '--export-auth-info',
    '--neu-dev-extension',
    '--neu-dev-auto-reload',
    '--window-enable-inspector'
  ]
}


const app = new App({
  target: document.getElementById('app'),
})

export default app
