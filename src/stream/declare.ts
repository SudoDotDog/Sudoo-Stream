/**
 * @author WMXPY
 * @namespace Stream
 * @description Declare
 */

import { ArrayStream } from "./array";
import { BooleanStream } from "./boolean";
import { NumberStream } from "./number";
import { RecordStream } from "./record";
import { StringStream } from "./string";
import { UnknownStream } from "./unknown";

export type StreamInstance<T extends any = any> =
    T extends string ? StringStream
    : T extends number ? NumberStream
    : T extends boolean ? BooleanStream
    : T extends any[] ? ArrayStream<T[number]>
    : T extends Record<any, any> ? RecordStream<keyof T, T[keyof T]>
    : UnknownStream;
