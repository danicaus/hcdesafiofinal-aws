const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Access-Control-Allow-Headers" : "Content-type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE"
  };

  try {
    switch (event.routeKey) {
      case "DELETE /leads/{email}":
        const isLead = await dynamo
          .get({
            TableName: "leads",
            Key: {
              email: event.pathParameters.email
            }
          })
          .promise();
        if (isLead){
          await dynamo
            .delete({
              TableName: "leads",
              Key: {
                email: event.pathParameters.email
              }
            })
            .promise();
          body = `Deleted lead ${event.pathParameters.email}`;
        }
        else{
          body = "This email isn't a lead";
        }
        break;
      case "GET /leads/{email}":
        body = await dynamo
          .get({
            TableName: "leads",
            Key: {
              email: event.pathParameters.email
            }
          })
          .promise();
        break;
      case "GET /leads":
        body = await dynamo
          .scan({ TableName: "leads" })
          .promise();
        break;
      case "PUT /leads":
      case "POST /leads":
        let p_date = new Date();
        p_date.setHours(p_date.getHours()-3);
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            TableName: "leads",
            Item: {
              email: requestJSON.email,
              name: requestJSON.name,
              phone: requestJSON.phone,
              situation: "Prospecto",
              prospectDate: p_date.toLocaleString("pt-BR"),
              clientDate: ""
            }
          })
          .promise();
        body = `Created lead ${requestJSON.email}`;
        break;
      case "PATCH /leads/{email}":
        let c_date = new Date();
        c_date.setHours(c_date.getHours()-3);
        await dynamo
          .update({
            TableName: "leads",
            Key: {
              email: event.pathParameters.email
            },
            UpdateExpression: "set situation = :s, clientDate = :d",
            ExpressionAttributeValues:{
                ":s": "Cliente",
                ":d": c_date.toLocaleString("pt-BR")
            },
            ReturnValues:"ALL_NEW"
          })
          .promise();
        body = `Updated lead ${event.pathParameters.email} to client`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};
