export function charsInRange(start: string, end: string): string[] {
  const result = [];

  for (let charCode = start.charCodeAt(0); charCode <= end.charCodeAt(0); charCode += 1)
    result.push(String.fromCharCode(charCode));

  return result;
}
