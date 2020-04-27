const phases = [
    {
        phase: 'Present Day',
        
        residents: {
            wfh: true,
            gatherings_max: 10,
            masksReq: true
        },

        schools: {
            open: false
        },

        restaurants: {
            open: false,
            capacity: undefined,
            masksReq: undefined
        },

        bars: {
            open: false,
            capacity: undefined,
            masksReq: undefined
        },

        stores: {
            open: false,
            capacity: undefined,
            masksReq: undefined
        },

        salons: {
            open: false,
            capacity: undefined,
            masksReq: undefined
        },

        healthcare: {
            highRiskProcedures: false,
            masksReq: true
        },

        gyms: {
            open: false,
            masksReq: undefined
        },

        playgrounds: {
            open: false,
            distance: undefined
        },

        largeVenues: {
            open: false,
            masksReq: undefined
        }
    },
    {
        phase: 'Phase One',
        residents: {
            wfh: true,
            gatherings_max: 10,
            masksReq: true
        },

        schools: {
            open: false
        },

        restaurants: {
            open: true,
            capacity: .5,
            masksReq: true
        },

        bars: {
            open: false,
            capacity: undefined,
            masksReq: undefined
        },

        stores: {
            open: true,
            capacity: .5,
            masksReq: true
        },

        salons: {
            open: false,
            capacity: undefined,
            masksReq: undefined
        },

        healthcare: {
            highRiskProcedures: false,
            masksReq: true
        },

        gyms: {
            open: false,
            masksReq: undefined
        },

        playgrounds: {
            open: false,
            distance: undefined
        },

        largeVenues: {
            open: false,
            masksReq: undefined
        }
    },
    {
        phase: 'Phase Two',
        residents: {
            wfh: true,
            gatherings_max: 50,
            masksReq: true
        },

        schools: {
            open: false
        },

        restaurants: {
            open: true,
            capacity: .75,
            masksReq: true
        },

        bars: {
            open: false,
            capacity: undefined,
            masksReq: undefined
        },

        stores: {
            open: true,
            capacity: .75,
            masksReq: true
        },

        salons: {
            open: true,
            capacity: 10,
            masksReq: true
        },

        healthcare: {
            highRiskProcedures: true,
            masksReq: true
        },

        gyms: {
            open: false,
            masksReq: undefined
        },

        playgrounds: {
            open: true,
            distance: true
        },

        largeVenues: {
            open: false,
            masksReq: undefined
        }
    },
    {
        phase: 'Phase Three',
        residents: {
            wfh: true,
            masksReq: true
        },
        schools: {
            open: true
        },

        gatherings_max: 100,

        restaurants: {
            open: true,
            capacity: 1,
            masksReq: true
        },

        bars: {
            open: true,
            capacity: .5,
            masksReq: true
        },

        stores: {
            open: true,
            capacity: 1,
            masksReq: true
        },

        salons: {
            open: true,
            capacity: 10,
            masksReq: true
        },

        healthcare: {
            highRiskProcedures: true,
            masksReq: true
        },

        gyms: {
            open: true,
            masksReq: true
        },

        playgrounds: {
            open: true,
            distance: true
        },

        largeVenues: {
            open: false,
            masksReq: undefined
        }
    },
    {
        phase: 'Phase Four',
        residents: {
            wfh: true,
            gatherings_max: undefined,
            masksReq: false
        },

        schools: {
            open: true
        },

        restaurants: {
            open: true,
            capacity: 1,
            masksReq: false
        },

        bars: {
            open: true,
            capacity: 1,
            masksReq: false
        },

        stores: {
            open: true,
            capacity: 1,
            masksReq: false
        },

        salons: {
            open: true,
            capacity: 10,
            masksReq: false
        },

        healthcare: {
            highRiskProcedures: true,
            masksReq: false
        },

        gyms: {
            open: true,
            masksReq: false
        },

        playgrounds: {
            open: true,
            distance: false
        },

        largeVenues: {
            open: true,
            masksReq: false
        }
    }
]

// const arrayContent = (array) => {
//     for (let i in array) {
//         console.log(array[i]);
//     }
// }

// arrayContent (phases[1]);