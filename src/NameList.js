import React from 'react'

function NameList() {

  //  const names = ['Kenn','neth','dianna','Teemy']
    const persons = [{"employmentStatus":"student",
    "gender":"male",
    "_id":"5f9aae5e694eba34c0475737",
    "name":"Uchechukwu Kelechi",
    "occupation":"Banker",
    "age":25,
    "citizen":true,
   },
    {"employmentStatus":"employed",
    "gender":"male",
    "_id":"5f9ab362a93ca222181eb2f2",
    "name":"oghenmaro Afenogo edited",
    "occupation":"software Engineer",
    "age":18,"citizen":true,
   },
    {"employmentStatus":"employed",
    "gender":"male",
    "_id":"5f9ffdc39c97f0001733db82",
    "name":"oghenmaro Afenogo",
    "occupation":"Engineer",
    "age":18,"citizen":true,
   }]

const personList = persons.map(person =>(<h2> i am {person.name} and my age is {person.age}</h2>))

    return (
        <div>
           {personList}
        </div>
    )
}

export default NameList
