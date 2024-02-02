export function smallEnough(a: number[], limit: number): boolean {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false; // If any element is greater than the limit, immediately return false
        }
    }
    
    return true; // If the loop completes without returning false, all elements are <= limit
}

console.log(smallEnough([7, 5, 0, 4, 1], 5));
