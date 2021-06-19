/**
 * @author WMXPY
 * @namespace Stream
 * @description String
 */

export class StringStream {

    public static of(target: string): StringStream {

        return new StringStream(target);
    }

    private readonly _target: string;

    private constructor(target: string) {

        this._target = target;
    }
}
