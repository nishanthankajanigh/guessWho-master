let attendees = [
    {firstName:"Robin", lastName:"Banks", birthYear:1977, occupation:"Accountant", gender:"M", homePlanet:"Earth"},
    {firstName:"Felix", lastName:"Cited", birthYear:1940, occupation:"Retiree", gender:"M", homePlanet:"Earth"},
    {firstName:"Snorkfloz", lastName:"Thzbert", birthYear:1800, occupation:"Tentacle Mangler", gender:"X", homePlanet:"Zerkblatt"},
    {firstName:"Maxie", lastName:"Mumm", birthYear:2000, occupation:"Engineer", gender:"F", homePlanet:"Earth"},
    {firstName:"Gerry", lastName:"Atrick", birthYear:1910, occupation:"Retiree", gender:"F", homePlanet:"Earth"},
    {firstName:"Yul", lastName:"Beefine", birthYear:2004, occupation:"Student", gender:"M", homePlanet:"Earth"},
    {firstName:"Eileen", lastName:"Dover", birthYear:1967, occupation:"Teacher", gender:"F", homePlanet:"Earth"},
    {firstName:"Rhoda", lastName:"Camel", birthYear:1998, occupation:"Transit Operator", gender:"F", homePlanet:"Earth"},
    {firstName:"Wilsin", lastName:"Yorname", birthYear:2016, occupation:"Golfer", gender:"M", homePlanet:"Earth"},
    {firstName:"Shlerznak", lastName:"Flabadabs", birthYear:1700, occupation:"Ion Thruster Repair", gender:"F", homePlanet:"Zerkblatt"},
    {firstName:"Sandy", lastName:"Beech", birthYear:1984, occupation:"Wrestler", gender:"F", homePlanet:"Earth"},
    {firstName:"Luke", lastName:"Overdehre", birthYear:1980, occupation:"Tour Guide", gender:"M", homePlanet:"Earth"},
    {firstName:"Ima", lastName:"Suyu", birthYear:1979, occupation:"Lawyer", gender:"F", homePlanet:"Earth"},
    {firstName:"Knottaner", lastName:"Thlink", birthYear:1991, occupation:"Chef", gender:"X", homePlanet:"Cranth"},
    {firstName:"Al", lastName:"Knighter", birthYear:2010, occupation:"Student", gender:"M", homePlanet:"Earth"},
    {firstName:"Ivana", lastName:"Tinkle", birthYear:2017, occupation:"Infant", gender:"F", homePlanet:"Earth"},
    {firstName:"Francis", lastName:"Fulla-Franschpeeple", birthYear:2017, occupation:"Chief Biscuit Dunker", gender:"M", homePlanet:"Earth"},
    {firstName:"Lori", lastName:"Driver", birthYear:1986, occupation:"Transit Operator", gender:"F", homePlanet:"Earth"},
    {firstName:"Doris", lastName:"Shut", birthYear:1986, occupation:"Student", gender:"F", homePlanet:"Earth"},
    {firstName:"Levi", lastName:"Tate", birthYear:1966, occupation:"Magician", gender:"M", homePlanet:"Earth"}
  ]
  
  
  //*find the attendees born in the 1965's using filter 
      let attendeesBorn1965 = attendees.filter(person => person.birthYear >= 1965 && person.birthYear < 1980);
      console.table(attendeesBorn1965);


      
  //*from the attendees born in the 70's, using filter find me the accountant and console.log their first name
     let accountantBornIn1970s = attendeesBorn1965.filter(person => person.occupation =="Accountant")[0].firstName;
     console.log(accountantBornIn1970s);
       


  //*using map return a list of peoples first names and birthYear in the format of Name: birthYear
    let peopleInfo = attendees.map(person => `${person.firstName}${person.lastName}:${person.birthYear}`);
    console.table(peopleInfo);
  


  //*using some find out if there is someone with the occupation of infant
    let isInfant = attendees.some(person => person.occupation == "Infant");
     console.log(isInfant);



  //*find the array index of the a Chief Biscuit Dunker named Francis
    let indexOfFrancis = attendees.findIndex(person => person.firstName === "Francis" && person.occupation === "Chief Biscuit Dunker");   
    console.log("Index of Francis:", indexOfFrancis);



  //using sort return a list of the student attendees by birth year in ascending order
    let studentAttendees = attendees.filter(person => person.occupation === "Student");
    studentAttendees.sort((a, b) => a.birthYear < b.birthYear ? -1 : 1);
    console.log(studentAttendees);



  //Return a list of beings that are not from Earth who are Gender X
    let planetx = attendees.filter(person => person.homePlanet !== "Earth" && person.gender == "X");
    console.log(planetx);
  //
  