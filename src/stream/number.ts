/**
 * @author WMXPY
 * @namespace Stream
 * @description Number
 */

export class NumberStream {

    public static of(target: number): NumberStream {

        return new NumberStream(target);
    }

    private readonly _target: number;

    private constructor(target: number) {

        this._target = target;
    }
}
