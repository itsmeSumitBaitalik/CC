export const generateAnonymousName = () => {
    const adjectives = [
        "Silent", "Hidden", "Shadow", "Mystic", "Ghost",
        "Dark", "Nova", "Phantom", "Void", "Cipher"
    ];

    const nouns = [
        "Fox", "Wolf", "Hawk", "Tiger", "Raven",
        "Byte", "Node", "Pixel", "Echo", "Orbit"
    ];


    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${adj}${noun}`;
}