/**
 * @author WMXPY
 * @namespace Stream
 * @description Stream
 */

import { StreamInstance } from "./declare";
import { ListStream } from "./list";

export class Stream {

    public static of<T extends any = any>(target: T): StreamInstance<T> {

        if (Array.isArray(target)) {

            return ListStream();
        }
    }
}
