/**
 * @author WMXPY
 * @namespace Stream
 * @description Declare
 */

import { ListStream } from "./list";
import { NumberStream } from "./number";
import { RecordStream } from "./record";
import { StringStream } from "./string";
import { UnknownStream } from "./unknown";

export type StreamInstance<T extends any = any> =
    T extends any[] ? ListStream<T[number]>
    : T extends Record<any, any> ? RecordStream<keyof T, T[keyof T]>
    : T extends string ? StringStream
    : T extends number ? NumberStream
    : UnknownStream;
