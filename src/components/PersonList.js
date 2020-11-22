import React from 'react'
import PersonData from './PersonData'

function PersonList() {

    const persons = [
        {
            id: 1,
            name: 'Bruce Wayne',
            alias:'Batman',
            nemesis: 'Joker'
        },
        {
            id: 2,
            name: 'Clark Kent',
            alias:'Superman',
            nemesis: 'Lex Luthor'
        },
        {
            id: 3,
            name: 'Princess Diana',
            alias:'Wonderwoman',
            nemesis: 'Ares'
        }
    ]

    const personList = persons.map(person => <PersonData key = {person.id} person = {person}/>)

    return <div>{personList}</div>
}

export default PersonList
