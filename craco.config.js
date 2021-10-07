const CracoLessPlugin = require('craco-antd');
const path = require('path');

// Don't open the browser during development
process.env.BROWSER = 'none';

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                customizeThemeLessPath: path.join(
                    __dirname,
                    'src/styles/theme.less'
                ),
            },
        },
    ],
};