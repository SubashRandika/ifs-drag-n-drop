export const generateRandomUUID = (): string => window.crypto.randomUUID();

export const generateRandomBoolean = (): boolean => Math.random() >= 0.5;
