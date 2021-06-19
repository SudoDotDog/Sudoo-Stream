/**
 * @author WMXPY
 * @namespace Stream
 * @description Unknown
 */

export class UnknownStream {

    public static of(target: any): UnknownStream {

        return new UnknownStream(target);
    }

    private readonly _target: any;

    private constructor(target: any) {

        this._target = target;
    }
}
