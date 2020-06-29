import React from "react";
import firebase from "./DumbFirebase";
const db = firebase.firestore();

export const getPrompts = (callback) => {
  let newArray = "hi";
  db.collection("prompts")
    .get()
    .then(function (querySnapshot) {
      newArray = [];
      querySnapshot.forEach(function (doc) {
        newArray.push(doc.data());
        console.log(newArray, "<---newArray");
      });
      console.log("hello");
    });
  console.log("here");
  return newArray;
};

export const getPrompts2 = () => {
  return db.collection("prompts").get();
};
export const getCriteria = (criteria) => {
  return db.collection("criteria").get();
};
