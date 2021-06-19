/**
 * @author WMXPY
 * @namespace Stream
 * @description Record
 */

export class RecordStream<K extends string | number | symbol = any, V extends any = any> {

    public static of<K extends string | number | symbol = any, V extends any = any>(target: Record<K, V>): RecordStream<K, V> {

        return new RecordStream(target);
    }

    private readonly _target: Record<K, V>;

    private constructor(target: Record<K, V>) {

        this._target = target;
    }
}
