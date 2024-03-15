export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    // Merge the three arrays
    const merged = [...collection1, ...collection2, ...collection3];
    
    // Sort the merged array
    for (let i = 0; i < merged.length - 1; i++) {
        for (let j = 0; j < merged.length - i - 1; j++) {
            if (merged[j] > merged[j + 1]) {
                // Swap elements
                const temp = merged[j];
                merged[j] = merged[j + 1];
                merged[j + 1] = temp;
            }
        }
    } 

/*   for DESC sort and change value in expected on merge.test.ts

    for (let i = 0; i < merged.length - 1; i++) {
        for (let j = 0; j < merged.length - i - 1; j++) {
            if (merged[j] < merged[j + 1]) {
                // Swap elements
                const temp = merged[j];
                merged[j] = merged[j + 1];
                merged[j + 1] = temp;
            }
        }
    }
    */

    return merged;
}


