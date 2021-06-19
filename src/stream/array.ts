/**
 * @author WMXPY
 * @namespace Stream
 * @description Array
 */

export class ArrayStream<T extends any = any> {

    public static of<T extends any = any>(target: T[]): ArrayStream<T> {

        return new ArrayStream(target);
    }

    private readonly _target: T[];

    private constructor(target: T[]) {

        this._target = target;
    }
}
