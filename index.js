// localStorage.removeItem("todoList");
// console.log(JSON.parse(localStorage.getItem("todoList")).todo);

// if (JSON.parse(localStorage.getItem("todoList")) !== null) {

//   for (
//     var i = 0; i < JSON.parse(localStorage.getItem("todoList")).title.length; i++
//   ) {
//     $("#list").append(`
//               <div class="article">
//                   <h2>${
//                     JSON.parse(localStorage.getItem("todoList")).title[i]
//                   }</h2>
//                   <p>${
//                     JSON.parse(localStorage.getItem("todoList")).content[i]
//                   }</p>
//               </div>
//           `);
//   }
// }

$("#btn").on("click", function () {
  var title = $("#title").val();
  var content = $("#content").val();

  const data = localStorage.getItem("todoList") ?
    JSON.parse(localStorage.getItem("todoList")) : {
      contentArray: [],
      titleArray: [],
    };
  console.log(title);
  data.titleArray.push(title);
  data.contentArray.push(content);
  localStorage.setItem("todoList", JSON.stringify(data));

  console.log("標題:", title)
  $("#list").append(`
    <div class="article">
    <h2>${title}</h2>
    <p>${content}</p>
    </div>
    `);
  // console.log(data);

  $("#title").val("");
  $("#content").val("");

  // console.log("內容:",content)
  // console.log("文章:",list)
});