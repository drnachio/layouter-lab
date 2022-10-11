import { defaultTheme, themeStorageKey } from '../config';

const tailwindSetup = `try{if(localStorage.${themeStorageKey}==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch{${defaultTheme==='dark' ? 'document.documentElement.classList.add':'document.documentElement.classList.remove'}("dark");}`;

export default tailwindSetup;
