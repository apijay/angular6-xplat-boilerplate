module.exports = function (hookArgs) {
    return (args, originalMethod) => {
        return originalMethod(...args).then(originalPatterns => {
            return [...originalPatterns, 'node_modules/@xplat/**/*', '!node_modules/@xplat/**/*.ts'];
        });
    };
}