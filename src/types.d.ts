declare function require(path: string);

declare module "*.png" {
    const value: any;
    export = value;
}