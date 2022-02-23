import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command)
  if (command === 'serve') {
    return {plugins: [reactRefresh()]}
  } else  {
    return {base: '/SoccerStat/'}
  }
})
