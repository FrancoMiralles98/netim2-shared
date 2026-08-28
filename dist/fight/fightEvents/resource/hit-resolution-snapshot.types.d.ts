export type HitResolutionSnapshot = {
    result: 'missed';
} | {
    result: 'dodged';
} | {
    result: 'blocked';
} | {
    result: 'hit';
};
