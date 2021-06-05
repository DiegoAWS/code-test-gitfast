import processLinkText, { cleanerText, reducerFunc } from './processLinkText'

const link1 = '<https://api.github.com/repositories/372121974/commits?page=2>; rel="next"'
const link2 = '<https://api.github.com/repositories/372121974/commits?page=3>; rel="last"'


// Tests
describe('Proccess Links Test', () => {


    it('test cleanerText 1', () => {

        expect(
            cleanerText(link1)
        ).toEqual(
            {
                pageNumber: '2',
                relation: 'next'
            }
        );
    });

    it('test cleanerText 2', () => {

        expect(
            cleanerText(link2)
        ).toEqual(
            {
                pageNumber: '3',
                relation: 'last'
            }
        );
    });

    it('test reducer function first iteration )', () => {

        expect(
            reducerFunc({},
                {
                    pageNumber: '3',
                    relation: 'last'
                }
            )
        ).toEqual(
            {
                last: '3'

            }
        )
    })

    it('test reducer function other iteration )', () => {

        expect(
            reducerFunc(
                {
                    last: '3'
                },
                {
                    pageNumber: '2',
                    relation: 'next'
                }
            )
        ).toEqual(
            {
                next: '2',
                last: '3'
            }
        )
    })

    it('test main Function processLinkText', () => {

        expect(
            processLinkText(link1 + ',' + link2)
        ).toEqual(
            {
                next: '2',
                last: '3'
            }
        )
    })

});

