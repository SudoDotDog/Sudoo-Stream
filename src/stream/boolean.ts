/**
 * @author WMXPY
 * @namespace Stream
 * @description Boolean
 */

export class BooleanStream {

    public static of(target: boolean): BooleanStream {

        return new BooleanStream(target);
    }

    private readonly _target: boolean;

    private constructor(target: boolean) {

        this._target = target;
    }
}
