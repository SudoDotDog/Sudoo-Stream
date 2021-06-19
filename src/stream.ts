/**
 * @author WMXPY
 * @namespace Stream
 * @description Stream
 */

import { ArrayStream } from "./stream/array";
import { BooleanStream } from "./stream/boolean";
import { StreamInstance } from "./stream/declare";
import { NumberStream } from "./stream/number";
import { RecordStream } from "./stream/record";
import { StringStream } from "./stream/string";
import { UnknownStream } from "./stream/unknown";

export class Stream {

    public static of<T extends any = any>(target: T): StreamInstance<T> {

        if (typeof target === 'string') {

            return StringStream.of(target) as any;
        }

        if (typeof target === 'number') {

            return NumberStream.of(target) as any;
        }

        if (typeof target === 'boolean') {

            return BooleanStream.of(target) as any;
        }

        if (Array.isArray(target)) {

            return ArrayStream.of(target) as any;
        }

        if (typeof target === 'object') {
            return RecordStream.of(target as any) as any;
        }

        return UnknownStream.of(target) as any;
    }
}
