/**
 * @author WMXPY
 * @namespace Stream
 * @description List
 */

export class ListStream<T extends any = any> {

    public static of<T extends any = any>(target: T[]): ListStream<T> {

        return new ListStream(target);
    }

    private readonly _target: T[];

    private constructor(target: T[]) {

        this._target = target;
    }
}
