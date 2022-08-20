// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract People{
    uint256 public favoriteNumber;

    struct Person{
        uint id;
        string name;
    }

    Person[] public persons;

    function setNumber(uint256 _number)public{
        favoriteNumber = _number;
    }

    function addPerson(uint _id,string memory _name)public{
        persons.push(Person(_id,_name));
    }
}