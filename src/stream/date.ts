/**
 * @author WMXPY
 * @namespace Stream
 * @description Date
 */

export class DateStream {

    public static of(target: Date): DateStream {

        return new DateStream(target);
    }

    private readonly _target: Date;

    private constructor(target: Date) {

        this._target = target;
    }
}
