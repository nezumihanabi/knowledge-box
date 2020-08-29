import Box from "@material-ui/core/Box";
import Footer from "../component/footer";
import { useRouter } from "next/router";
import { addUser } from "../component/connect";

function Detail() {
  const router = useRouter();
  const query = router.query;
  return (
    <>
      <Box>
        <div class="container mx-auto">
          <div>・ メモ</div>
          <div>{query.memo}</div>
          <div>・ 画像</div>
          <image src={query.file} />
          <div>・ 作成日</div>
          <div>{query.createdAt}</div>
          <div>・ 更新日</div>
          <div>{query.updatedAt}</div>
        </div>
      </Box>
      <Footer />
    </>
  );
}

export default Detail;
