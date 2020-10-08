import {CreateContext} from 'react';
import { createContext } from 'jest-runtime';

const ThemeContext = createContext(["light",() => {}]);

export default ThemeContext;