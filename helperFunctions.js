import React from "react";
import firebase from "./DumbFirebase";
const db = firebase.firestore();

export const getPrompts = (callback) => {
  let newArray = "hi";
  db.collection("prompts")
    .get()
    .then(
      function (querySnapshot) {
        newArray = [];
        querySnapshot.forEach(function (doc) {
          newArray.push(doc.data());
        });
      },
      (err) => {
        console.log(err, "<---err");
      }
    );

  return newArray;
};

export const getPrompts2 = () => {
  return db.collection("prompts").get();
};
export const getCriteria = (criteria) => {
  return db.collection("criteria").get();
};
export const getCertainPrompts = (title) => {
  return db.collection("prompts").where("Topic", "==", title).get();
};
