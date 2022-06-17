const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
    lang: 'ru-RU',
    title: 'XRain',
    theme: hopeTheme({
        darkmode: 'toggle',
        sidebar: "structure",
        iconAssets: "fontawesome",
    }),
}
