export function parseCSParameters(parameters) {
    var parameterArray = parameters
        .split(',')
        .map(function (param) { return param.trim(); });
    var constructorParameters = parameterArray
        .filter(function (param) { return !param.includes('='); });
    var assigner = {};
    parameterArray
        .filter(function (param) { return param.includes('='); })
        .map(function (param) { return param.split('=').map(function (param) { return param.trim(); }); })
        .forEach(function (set) { return assigner[set[0]] = set[1]; });
    return { parameters: constructorParameters, properties: assigner };
}
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/parse-cs-parameters.js.map