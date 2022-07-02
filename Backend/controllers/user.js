"use strict";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
global.fetch = require("node-fetch");
var AWS = require("aws-sdk");

const { body, validationResult } = require('express-validator');

var poolData = {
  UserPoolId: "us-east-1_WzvNY580w",
  ClientId: "4gd1cmkp5lfjp5jtlcdkp8e0g7",
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var controller = {
  registerUser: (req, res) => {
    
    var name = req.body.name;
    var familyName = req.body.familyName;
    var email = req.body.email;
    var password = req.body.password;


    var attributeList = [];
    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "name",
        Value: name,
      })
    );
    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "family_name",
        Value: familyName,
      })
    );
    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "email",
        Value: email,
      })
    );

    // if(validator.isEmpty(req.body)){
    //   console.log("Esto ta vacio");
    // }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      
      return res.status(400).json({ errors: errors.array() });

    }
    
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          message: "El usuario no se ha podido registrar" + err,
        });
      } else {
        var cognitoUser = result.user;
        return res.status(200).send({
          status: "Success",
          message:
            "El usuario " +
            cognitoUser.getUsername() +
            " se ha  podido registrar",
        });
      }
    });
  
}

  
  ,
  confirmarRegistro: (req, res) => {
    var codigo = req.body.codigo;
    var username = req.body.username;
    var userData = {
      Username: username,
      Pool: userPool,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      
      return res.status(400).json({ errors: errors.array() });

    }
    
    var user = new AmazonCognitoIdentity.CognitoUser(userData);

    user.confirmRegistration(codigo, true, (err, result) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          message: err,
        });
      } else {
        return res.status(200).send({
          status: "Success",
          message: "El registro se ha confirmado con exito!",
        });
      }
    });
  },

  resendCodeConfirmation: (req, res) => {
    var username = req.body.username;
    var userData = {
      Username: username,
      Pool: userPool,
    };
    var user = new AmazonCognitoIdentity.CognitoUser(userData);

    user.resendConfirmationCode((err, result) => {
      if (err) {
        return res.status(404).send({
          status: "Error",
          message: err,
        });
      } else {
        return res.status(200).send({
          status: "Success",
          message: "El codigo de verificacion se ha enviado con exito",
        });
      }
    });
  },

  login: (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      
      return res.status(400).json({ errors: errors.array() });

    }

    var authenticationData = {
      Username: username,
      Password: password
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var userData = {
      Username: username,
      Pool: userPool,
    };

    var user = new AmazonCognitoIdentity.CognitoUser(userData);

    user.authenticateUser(authenticationDetails, {
      // Caso de exito
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();


        AWS.config.region = 'us-east-1';


        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: 'us-east-1:a9a4851f-2153-47af-88d4-3799f06bb505', // your identity pool id here
          Logins: {
            // Change the key below according to the specific region your user pool is in.
            'cognito-idp.us-east-1.amazonaws.com/us-east-1_WzvNY580w': result
              .getIdToken()
              .getJwtToken(),
          },
        });

        AWS.config.credentials.refresh(error => {
          if (error) {
            return res.status(404).send({
              status: "Error",
              message: error,
            });
          } else {
            return res.status(200).send({
              status: "Success",
              accessToken: accessToken,
              message: "Exitosamente logueado",
            });
          }
        });
		
	},
    
        onFailure: function(err) {
          return res.status(404).send({
            status: "Error Failure",
            message: err.message,
          });
        }
  
      
    });
      //Caso de falla
     
  },
};

module.exports = controller;