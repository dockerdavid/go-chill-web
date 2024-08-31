import { createRoot } from 'react-dom/client';
import { Main } from './main';
import './main.css'

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(<Main />);
