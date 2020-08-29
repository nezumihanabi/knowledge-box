import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    box: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      textAlign: "center",
      marginTop: "10px",
    },
    paper: {
      backgroundColor: "#EFEBE9",
      width: "100%",
    },
    mainpaper: {
      backgroundColor: "#FFF",
    },
    global: {
      colors: {
        brand: "#228BE6",
      },
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  })
);
