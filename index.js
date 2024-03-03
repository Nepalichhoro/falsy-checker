export function isFalsy(value) {
    // Customize this function to define what is considered falsy based on your requirements
    return (
      value === '' ||
      Number.isNaN(value) ||
      value === 0 ||
      value === null ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === 'object' && Object.keys(value || {}).length === 0) ||
      value === false ||
      (typeof value === 'object' && value.hasOwnProperty('requiredProperty') && !value['requiredProperty'])
    );
  }