/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
//import React, {useState, createContext} from "react";


//https://randomuser.me ----> TO GET RANDOM USERS

export default {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=10")
  }
};