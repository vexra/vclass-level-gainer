import axios from "axios";
axios.defaults.withCredentials = true;

const main = async function () {
  const token = "5dirpaa5jug1prvggv0tpu3fs3";
  let counter = 0;
  const targetList = [
    "https://vclass.unila.ac.id/mod/quiz/view.php?id=919343",
    "https://vclass.unila.ac.id/mod/quiz/view.php?id=919324",
    "https://vclass.unila.ac.id/mod/quiz/view.php?id=919331",
    "https://vclass.unila.ac.id/mod/resource/view.php?id=919332&forceview=1",
    "https://vclass.unila.ac.id/mod/url/view.php?id=919344",
    "https://vclass.unila.ac.id/mod/forum/view.php?id=919345",
    "https://vclass.unila.ac.id/mod/quiz/view.php?id=919347",
    "https://vclass.unila.ac.id/mod/resource/view.php?id=919348",
    "https://vclass.unila.ac.id/mod/forum/view.php?id=919349",
    "https://vclass.unila.ac.id/mod/url/view.php?id=919350",
    "https://vclass.unila.ac.id/mod/forum/view.php?id=919351",
    "https://vclass.unila.ac.id/mod/quiz/view.php?id=919353",
    "https://vclass.unila.ac.id/mod/quiz/view.php?id=919358",
    "https://vclass.unila.ac.id/mod/forum/view.php?id=919360",
    "https://vclass.unila.ac.id/mod/url/view.php?id=919361",
    "https://vclass.unila.ac.id/mod/forum/view.php?id=919362",
    "https://vclass.unila.ac.id/mod/quiz/view.php?id=919363",
    "https://vclass.unila.ac.id/mod/quiz/view.php?id=919365",
    "https://vclass.unila.ac.id/mod/assign/view.php?id=919367",
    "https://vclass.unila.ac.id/mod/forum/view.php?id=919371",
    "https://vclass.unila.ac.id/mod/quiz/view.php?id=919373",
    "https://vclass.unila.ac.id/mod/forum/view.php?id=919376",
    "https://vclass.unila.ac.id/mod/resource/view.php?id=919374",
  ];

  while (true) {
    for (let i = 0; i < targetList.length; ++i) {
      const res = await axios({
        method: "get",
        url: targetList[i],
        headers: {
          Cookie: `MoodleSession=${token};`,
        },
      });
      
      console.log(counter++);
    }
  }
};

main();
