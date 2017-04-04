
export function parseCSParameters<T>(parameters: string) {
    let parameterArray = parameters
        .split(',')
        .map(param => param.trim());
    let constructorParameters = parameterArray
        .filter(param => !param.includes('='));
    let assigner = {};
    parameterArray
        .filter(param => param.includes('='))
        .map(param => param.split('=').map(param => param.trim()))
        .forEach(set => assigner[set[0]] = set[1]); 
    return { parameters: constructorParameters, properties: assigner };
}
