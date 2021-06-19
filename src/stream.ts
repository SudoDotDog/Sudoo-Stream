/**
 * @author WMXPY
 * @namespace Stream
 * @description Stream
 */

import { StreamInstance } from "./stream/declare";
import { ListStream } from "./stream/list";
import { UnknownStream } from "./stream/unknown";

export class Stream {

    public static of<T extends any = any>(target: T): StreamInstance<T> {

        if (Array.isArray(target)) {

            return ListStream.of(target) as any;
        }

        return UnknownStream.of(target) as any;
    }
}
