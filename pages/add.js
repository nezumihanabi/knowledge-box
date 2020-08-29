import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CustomDropZone from "../component/dropzone";
import Footer from "../component/footer";
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import awsmobile from "../aws-exports.js";
import { Amplify, Storage } from "aws-amplify";
import { useStyles } from "../constant/theme";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function Add() {
  const [memo, setMemo] = useState("");
  const [files, setFiles] = useState([]);
  const classes = useStyles();
  return (
    <>
      <Box>
        <Paper className={classes.mainpaper}>
          <div class="container mx-auto flex flex-col">
            <TextField
              multiline
              rows="4"
              placeholder="メモ"
              variant="outlined"
              onChange={(e) => setMemo(e.target.value)}
              style={{ marginLeft: "30px", width: "70%" }}
            />
            <CustomDropZone
              setFiles={setFiles}
              style={{ margin: "auto", width: "50%" }}
            />
            <Button
              type="submit"
              variant="outlined"
              onClick={async (e) => {
                const file = files[0];
                await Amplify.configure(awsmobile);
                const url = await Storage.put(file.name, file);
                const obj = {
                  memo: memo,
                  file: url,
                  filename: file.path,
                };
                const method = "POST";
                const body = JSON.stringify(obj);
                const headers = {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                };
                try {
                  await fetch(`/api/add`, {
                    method,
                    headers,
                    body,
                  });
                } catch (e) {
                  console.error(e);
                }
              }}
              style={{ marginLeft: "70%", width: "200px" }}
            >
              送信
            </Button>
          </div>
        </Paper>
      </Box>
      <Footer></Footer>
    </>
  );
}
export default withAuthenticator(Add);
