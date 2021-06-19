/**
 * @author WMXPY
 * @namespace Stream
 * @description Declare
 */

import { ListStream } from "./list";
import { StringStream } from "./string";
import { UnknownStream } from "./unknown";

export type StreamInstance<T extends any = any> =
    T extends any[] ? ListStream<T[number]>
    : T extends string ? StringStream
    : UnknownStream;
