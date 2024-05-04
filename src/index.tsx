import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import { store } from './store'
import { Pokemon } from './Pokemon';

const rootElement = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(rootElement as HTMLElement)

reactRoot.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/pokemon/:id' element={<Pokemon />} />

      </Routes>
    </BrowserRouter>

  </Provider>,
)
