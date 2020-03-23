const defaultConfig = {
    extends: 'lighthouse:default',
    categories: {
        'performance': {
            title: 'Performance',
            description: 'Performance of react app',
            manualDescription: 'Performance of react app - manual',
        },
        'accessibility': {
            title: 'Accessibility',
        },
        'best-practices': {
            title: 'Best-Practices',
        },
        'seo': {
            title: 'SEO',
        },
        'pwa': {
            title: 'PWA',
        }
    },
}

module.exports = defaultConfig;