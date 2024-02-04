// サンプルコード
$p.setMessage(
  "#Message",
  JSON.stringify({
    Css: "alert-success",
    Text: "処理が正常に終了しました。",
  }as SetMessageArgumentType)
);

// $p.apiGet({
//   id: 1545,
//   done: (data) => {
//     console.log(data);
//     debugger;
//   },
// });
