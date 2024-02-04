//  TextTrackListYour task is to remove all duplicate words from a string, 
// leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


export function removeDuplicateWords(s: string): string {
    const words: string[] = s.split(' ');
    const uniqueWords: Set<string> = new Set();

    for (const word of words) {
        uniqueWords.add(word);
    }

    return Array.from(uniqueWords).join(' ');
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
