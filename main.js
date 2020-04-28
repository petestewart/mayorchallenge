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

        sportsVenues: {
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

        sportsVenues: {
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

        sportsVenues: {
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

        sportsVenues: {
            open: false,
            masksReq: undefined
        }
    },
    {
        phase: 'Phase Four',
        residents: {
            wfh: false,
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

        sportsVenues: {
            open: true,
            masksReq: false
        }
    }
]

const buildTitle = (step) => {
    const domString = `<div class="phase-title">${phases[step].phase}</div>`;
    return domString;
}

const buildCard = (step) => {
    let domString = '';
    domString += `
        <div class="phase-content">

            <div class="card"><div class="phase-cat">Residents</div>
            <div class="rules"><ul>
                <li>High-risk residents must stay home</li>`;
                
        if (phases[step].residents.wfh) {
            domString += '<li>Work only from home unless essential</li>'
        } else {domString += '<li>Work from home is optional</li>'};

        domString += (phases[step].residents.masksReq) ? '<li>Wearing masks in public is required</li>' : '<li>Wearing masks in public is optional but recommended</li>';       

        if (phases[step].residents.gatherings_max) {
            domString += `<li>No gatherings permitted over ${phases[step].residents.gatherings_max} people</li>`};

        domString += '</ul></div></div>'; //close card
        
        domString += `
            <div class="card"><div class="phase-cat">Schools</div>
            <div class="rules">`;
            domString += (phases[step].schools.open) ? '<ul><li>Open</li>' : '<ul><li>Closed</li>';
        domString += '</ul></div></div>'; //close card

        domString += `
            <div class="card"><div class="phase-cat">Restaurants</div>
            <div class="rules">
            <ul>`;
            if (phases[step].restaurants.open) {
                domString += `<li>Open at ${phases[step].restaurants.capacity * 100}% capacity</li>`;
                domString += '<li>Employees screened daily</li>' + ((phases[step].restaurants.masksReq) ? '<li>Employees required to wear masks</li>' : '<li>Employees wearing masks is optional but recommended</li>');            
            } else {
                domString += '<li>Curbside/takeout only</li>';
            }
        domString += '</ul></div></div>'; //close card

        domString += `
            <div class="card"><div class="phase-cat">Bars & Music Venues</div>
            <div class="rules">
            <ul>`;
            if (phases[step].bars.open) {
                domString += `<li>Open at ${phases[step].bars.capacity * 100}% capacity</li>`;
                domString += '<li>Employees screened daily</li>' + ((phases[step].bars.masksReq) ? '<li>Employees required to wear masks</li>' : '<li>Employees wearing masks is optional but recommended</li>');            
            } else {
                domString += '<li>Closed</li>';
            }
        domString += '</ul></div></div>'; //close card

        domString += `
        <div class="card"><div class="phase-cat">Retail Stores & Commercial Busniesses</div>
        <div class="rules">
        <ul>`;
        if (phases[step].stores.open) {
            domString += `<li>Open at ${phases[step].stores.capacity * 100}% capacity</li>`;
            domString += '<li>Employees screened daily</li>' + ((phases[step].stores.masksReq) ? '<li>Employees required to wear masks</li>' : '<li>Employees wearing masks is optional but recommended</li>');            
        } else {
            domString += '<li>Closed</li>';
        }
        domString += '</ul></div></div>'; //close card

        domString += `
        <div class="card"><div class="phase-cat">Salons, Massage, etc.</div>
        <div class="rules">
        <ul>`;
        if (phases[step].salons.open) {
            domString += `<li>Open by appointment only (no walk-ins)</li>
                          <li>Limit staff and customers to ${phases[step].salons.capacity}</li>`;
            domString += '<li>Employees screened daily</li>' + ((phases[step].salons.masksReq) ? '<li>Employees required to wear masks</li>' : '<li>Employees wearing masks is optional but recommended</li>');            
        } else {
            domString += '<li>Closed</li>';
        }
        domString += '</ul></div></div>'; //close card

        domString += `
        <div class="card"><div class="phase-cat">Healthcare & Dental</div>
        <div class="rules">
        <ul>`;
            domString += (phases[step].healthcare.highRiskProcedures) ? '<li>Routine and elective procedures allowed</li>' : '<li>Routine and elective procedures only allowed for those under age 70</li>';          
            domString += '<li>Employees required to wear masks</li>';
        domString += '</ul></div></div>'; //close card

        domString += `
        <div class="card"><div class="phase-cat">Gyms & Fitness</div>
        <div class="rules">
        <ul>`;
        if (phases[step].gyms.open) {
            domString += '<li>Open</li>';
            domString += '<li>Employees screened daily</li>' + ((phases[step].gyms.masksReq) ? '<li>Employees required to wear masks</li>' : '<li>Employees wearing masks is optional but recommended</li>');            
        } else {
            domString += '<li>Closed</li>';
        }
        domString += '</ul></div></div>'; //close card

        domString += `
        <div class="card"><div class="phase-cat">Playgrounds, Tennis & Basketball Courts</div>
        <div class="rules">
        <ul>`;
        if (phases[step].playgrounds.open) {
            domString += (phases[step].playgrounds.distance) ? '<li>Open with social distancing required</li>' : '<li>Open</li>';            
        } else {
            domString += '<li>Closed</li>';
        }
        domString += '</ul></div></div>'; //close card
        
        domString += `
        <div class="card"><div class="phase-cat">Sports Venues</div>
        <div class="rules">
        <ul>`;
        if (phases[step].sportsVenues.open) {
            domString += '<li>Open</li>';
            domString += '<li>Employees screened daily</li>' + ((phases[step].sportsVenues.masksReq) ? '<li>Employees required to wear masks</li>' : '<li>Employees wearing masks is optional but recommended</li>');                       
        } else {
            domString += '<li>Closed</li>';
        }
        domString += '</ul></div></div>'; //close card
        

        domString += '</div>'; // close phase-content
    return domString;
}

const printToDom = (location, content) => {
    const selectedDiv = document.querySelector(location);
    selectedDiv.innerHTML = content;
}

const showPhase = (event) => {
    const buttonId = event.target.id;
    const phaseNumber = buttonId.slice(-1);
    printToDom('#titleArea', buildTitle(phaseNumber));
    printToDom('#gridArea', buildCard(phaseNumber));

}

const clickEvents = () => {
    document.querySelector('#button0').addEventListener('click', showPhase);
    document.querySelector('#button1').addEventListener('click', showPhase);
    document.querySelector('#button2').addEventListener('click', showPhase);
    document.querySelector('#button3').addEventListener('click', showPhase);
    document.querySelector('#button4').addEventListener('click', showPhase);  
}


const init = () => {
    printToDom('#titleArea', buildTitle(0));
    printToDom('#gridArea', buildCard(0))
    clickEvents();
}

init();