import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Link from "next/link";
import ListIcon from "@material-ui/icons/List";
import Paper from "@material-ui/core/Paper";
import AccountIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "../constant/theme";

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.box}>
        <Paper className={classes.paper}>
          <Divider />
          <Link href="/add">
            <Button>
              <AddIcon></AddIcon>
            </Button>
          </Link>
          <Link href="/list">
            <Button>
              <ListIcon></ListIcon>
            </Button>
          </Link>
          <Link href="/mypage">
            <Button>
              <AccountIcon></AccountIcon>
            </Button>
          </Link>
        </Paper>
      </Box>
    </div>
  );
}

export default Footer;
