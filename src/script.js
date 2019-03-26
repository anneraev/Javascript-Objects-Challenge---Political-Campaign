//////////////////////////////////////////////////////////////////////////////////
//Political campaign object practice
//variable containing district

const candidate = {
    district: "Place",
    platform: {
        taxes: "...are theft, but also more taxes to build the wall.",
        jobs: "...are gifts from the Job Creators. Don't steal form them, but do use the taxes they aren't paying to subsidize their businesses.",
        infrastructure: "¯\_(ツ)_/¯ ",
        healthcare: "Repeal and forget.",
        crime: "Tough on."
    },
    URLdonation: "www.toiletpaperUSA.com",
    eventsCalendar: [{
        monday: "stuff",
        tuesday: "things",
        wednesday: "crap",
        thursday: "shit",
        friday: "sacrifice of small child to patron blood chaos deity",
        saturday: "diet cheat day",
        sunday: "day of rest",
    }, {
        monday: "stuff",
        tuesday: "things",
        wednesday: "crap",
        thursday: "shit",
        friday: "sacrifice of small child to patron blood chaos deity",
        saturday: "diet cheat day",
        sunday: "day of rest",
    }, {
        monday: "stuff",
        tuesday: "things",
        wednesday: "crap",
        thursday: "shit",
        friday: "sacrifice of small child to patron blood chaos deity",
        saturday: "diet cheat day",
        sunday: "day of rest",
    }, {
        monday: "stuff",
        tuesday: "things",
        wednesday: "crap",
        thursday: "shit",
        friday: "sacrifice of small child to patron blood chaos deity",
        saturday: "diet cheat day",
        sunday: "day of rest",
    }],
    volunteers: [],
    biography: "Is not a lizard person.",
    photographs: [{self: []}, {family: []}, {constituents: []}],
};



///////////////////////////////////////////////////////////////////////
const volunteers = [];
//Volunteer object constructor. Called when creating a new volunteer, populates
//with info about that volunteer and a arrays of availability and activities.
const volunteer = function (name, address, email, phone, availability, activities) {
    this.name = name;
    this.address = address;
    this.emal = email;
    this.phone = phone;
    this.availability = availability;
    this.activities = activities;
}

//creates a new volunteer, passing along the various information fields. Also pushes the
//volunteer object into the volunteers array.
const createVolunteer = (name, address, email, phone, availability, activities) => {
    let newVolunteer = new volunteer(name, address, email, phone, availability, activities);
    volunteers.push(newVolunteer);
}

//array of days and times for volunteer availability. 7 days a week, false for unavailable, times when available.
let volunteerAvailability = [];

//Creates an array for the volunteer and returns it so that it can be passed to the
//createVolunteer function. Normally, this would be done by creating an array from the
//value of several inputs when a button is clicked,
//but for the purpose of the exercise, the function call will pass some dummy info. Times
//military, input fields will use AM/MP dropdowns and the event listener function will
//translate to a 24 hour clock.
let mon = false;
let tue = [15, 17];
let wed = false;
let thu = [12, 15];
let fri = false;
let sat = false;
let sun = [6, 12];



const volAvailability = () => {

}