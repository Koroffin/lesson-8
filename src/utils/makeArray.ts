export const makeArray = (length: number) => {
    return new Array(length).fill(0).map(() => Math.random());
}