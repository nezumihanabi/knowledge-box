import {
  onCreateUser,
  onCreateKnow,
  onUpdateKnow,
} from "../src/graphql/subscriptions";
import API, { graphqlOperation } from "@aws-amplify/api";
import Amplify from "@aws-amplify/core";
import PubSub from "@aws-amplify/pubsub";
import awsmobile from "../aws-exports";
import crypto from "crypto-js";
import { createUser, createKnow, updateKnow } from "../src/graphql/mutations";
import { getUser, getKnow, listKnows } from "../src/graphql/queries";

Amplify.configure(awsmobile);
API.configure(awsmobile);
PubSub.configure(awsmobile);

export async function addUser(props) {
  const id = Math.floor(Math.random() * Math.floor(1000));
  const input = {
    input: {
      id,
      email: props.email,
      password: crypto.AES.encrypt(props.password, "test").toString(),
    },
  };
  await API.graphql(graphqlOperation(createUser, input));
}

export async function addKnow(props) {
  const id = Math.floor(Math.random() * Math.floor(1000));
  const input = {
    input: {
      id,
      memo: props.memo,
      file: props.file,
      filename: props.filename,
    },
  };
  await API.graphql(graphqlOperation(createKnow, input));
}

export async function fetchUser(props) {
  const data = await API.graphql(
    graphqlOperation(getUser, { email: props.email })
  );
  return { ...props, ...data };
}

export async function fetchKnows(props) {
  const data = await API.graphql(graphqlOperation(listKnows));
  return { ...props, ...data };
}
