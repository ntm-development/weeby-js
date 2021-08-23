const sidebar = require("./sidebar.js");
const nav = require("./navbar");
const head = require("./head");

const config = {
    title: "Weeby-JS",
    head,
    theme: 'vuepress-theme-yuu',
    base: '/weeby-js/docs/',
    themeConfig: {
        logo: '/images/Icon.png',
        yuu: {
            colorThemes: ["purple", "blue"],
            defaultColorTheme: "purple",
            disableThemeIgnore: true,
            labels: {
				darkTheme: 'Dark Mode',
                logo: 'WeebyLogo',
			},
        },
        nav,
        sidebar,
        searchMaxSuggestions: 5,
        sidebarDepth: 2,
        searchPlaceholder: "Search Docs...",
        lastUpdated: "Last Updated",
        repo: "ntm-development/weeby-js",
        editLinks: true,
        docsBranch: "master",
        editLinkText: "Edit on GitHub",
        noFoundPageByTencent: false
    }
};

module.exports = config;