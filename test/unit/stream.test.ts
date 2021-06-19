/**
 * @author WMXPY
 * @namespace Stream
 * @description Stream
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { ArrayStream, Stream, StringStream } from '../../src';
import { NumberStream } from '../../src/stream/number';
import { RecordStream } from '../../src/stream/record';

describe('Given {Stream} Class', (): void => {

    const chance: Chance.Chance = new Chance('stream-stream');

    it('should be able to construct string stream', (): void => {

        const value: string = chance.string();

        const stringStream = Stream.of(value);

        expect(stringStream).to.be.instanceOf(StringStream);
    });

    it('should be able to construct number stream', (): void => {

        const value: number = chance.integer();

        const numberStream = Stream.of(value);

        expect(numberStream).to.be.instanceOf(NumberStream);
    });

    it('should be able to construct array stream', (): void => {

        const firstElement: string = chance.string();

        const arrayStream = Stream.of([
            firstElement,
        ]);

        expect(arrayStream).to.be.instanceOf(ArrayStream);
    });

    it('should be able to construct record stream', (): void => {

        const key: string = chance.string();
        const value: number = chance.integer();

        const map: Record<string, number> = {
            [key]: value,
        };

        const recordStream = Stream.of(map);

        expect(recordStream).to.be.instanceOf(RecordStream);
    });
});
