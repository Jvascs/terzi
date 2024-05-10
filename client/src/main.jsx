import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18 için güncellenmiş import
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import "./index.css";
import './i18n'; // i18next için yapılandırma dosyası

// React 18 için güncellenmiş container ve root oluşturma süreci
const container = document.getElementById('root');
const root = createRoot(container); // container için bir root oluştur

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
