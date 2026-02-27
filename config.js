// config.js
const CONFIG = {
    API_URL: 'https://script.google.com/macros/s/AKfycbxWtTSoJ-coSihLvMqLDx3I08zdDnVV7DG9va4aa6hMpO1H-0K0_0Wv2yZe9nxfbDkt/exec', // ใส่ URL ที่ได้จาก Apps Script
    THEMES: {
        default: {
            primary: '#ff9eb5',
            secondary: '#a5d8ff',
            success: '#b7e4c7',
            danger: '#ffb3b3',
            warning: '#ffe5b4',
            info: '#c7d9ff',
            light: '#f8f9fa',
            dark: '#343a40',
            background: '#fff0f3',
            card: '#ffffff',
            text: '#495057'
        },
        mint: {
            primary: '#84dcc6',
            secondary: '#a5d8ff',
            success: '#b7e4c7',
            danger: '#ffb3b3',
            warning: '#ffe5b4',
            info: '#c7d9ff',
            light: '#f8f9fa',
            dark: '#343a40',
            background: '#e0f2e9',
            card: '#ffffff',
            text: '#2d6a4f'
        },
        lavender: {
            primary: '#b8b5ff',
            secondary: '#d0bfff',
            success: '#b7e4c7',
            danger: '#ffb3b3',
            warning: '#ffe5b4',
            info: '#c7d9ff',
            light: '#f8f9fa',
            dark: '#343a40',
            background: '#f0e6ff',
            card: '#ffffff',
            text: '#5e4b8b'
        },
        peach: {
            primary: '#ffc8a2',
            secondary: '#ffe5b4',
            success: '#b7e4c7',
            danger: '#ffb3b3',
            warning: '#ffe5b4',
            info: '#c7d9ff',
            light: '#f8f9fa',
            dark: '#343a40',
            background: '#fff2e6',
            card: '#ffffff',
            text: '#9b6b43'
        }
    }
};

// ฟังก์ชันสำหรับเปลี่ยนธีม
function applyTheme(themeName) {
    const theme = CONFIG.THEMES[themeName] || CONFIG.THEMES.default;
    const root = document.documentElement;
    
    Object.keys(theme).forEach(key => {
        root.style.setProperty(`--${key}`, theme[key]);
    });
    
    localStorage.setItem('selectedTheme', themeName);
}

// โหลดธีมที่เคยเลือกไว้
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    applyTheme(savedTheme);

});


