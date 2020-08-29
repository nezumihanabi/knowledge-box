import Box from "@material-ui/core/Box";
import Footer from "../component/footer";
import Paper from "@material-ui/core/Paper";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../constant/theme";

function MyPage() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Paper className={classes.mainpaper}>
          <div class="container mx-auto flex flex-col">
            <TextField
              label="名前"
              value="テスト"
              variant="outlined"
              onChange={(e) => setMemo(e.target.value)}
              style={{ margin: "30px" }}
              disabled
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Email"
              value="test@example.jp"
              variant="outlined"
              onChange={(e) => setMemo(e.target.value)}
              style={{ margin: "30px" }}
              disabled
              InputLabelProps={{ shrink: true }}
            />
          </div>
        </Paper>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default MyPage;
