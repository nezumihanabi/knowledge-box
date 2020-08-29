import Box from "@material-ui/core/Box";
import Footer from "../component/footer";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "../constant/theme";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

function List() {
  const [items, setItems] = useState([]);
  const [word, setWord] = useState("");
  const router = useRouter();
  const onSearch = useCallback(
    (e) => {
      e.preventDefault();
      router.push({
        pathname: "/list",
        query: { word: word },
      });
    },
    [word]
  );
  const onRowClick = useCallback((e, row) => {
    e.preventDefault();
    router.push({
      pathname: "/detail",
      query: {
        memo: row.memo,
        filename: row.filename,
        file: row.file,
        createdAt: row.createdAt,
        updatedAt: row.updatedAt,
      },
    });
  });
  const query = router.query;
  const initList = async () => {
    try {
      let word = null;
      if (query && query.word) {
        word = query.word;
      }
      const response = await fetch(`/api/search`);
      const jsonList = await response.json();
      if (word) {
        const filterList = jsonList.filter((item) => item.memo.includes(word));
        setItems(filterList);
      } else {
        setItems(jsonList);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    initList();
  }, [query]);
  const classes = useStyles();
  return (
    <>
      <Box>
        <Paper className={classes.mainpaper}>
          <div class="container mx-auto flex flex-col">
            <div>
              <InputBase
                placeholder="検索"
                onChange={(e) => setWord(e.target.value)}
              />
              <IconButton type="submit" onClick={onSearch}>
                <SearchIcon />
              </IconButton>
            </div>
            <TableContainer>
              <Table>
                <TableHead style={{ backgroundColor: "#D7CCC8" }}>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>メモ</TableCell>
                    <TableCell>ファイル名</TableCell>
                    <TableCell>登録日</TableCell>
                    <TableCell>更新日</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((row) => (
                    <TableRow key={row.id} onClick={(e) => onRowClick(e, row)}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.memo}</TableCell>
                      <TableCell>{row.filename}</TableCell>
                      <TableCell>{row.createdAt}</TableCell>
                      <TableCell>{row.updatedAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Paper>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default List;
