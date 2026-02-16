// ToDo追加関数
function add() {
  const todoinput = document.getElementById('todo-input').value;
  if (todoinput === "") return;

  const li = document.createElement("li");

  // チェックボックス
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // チェック状態が変わったら保存
  checkbox.addEventListener("change", save);

  // テキスト
  const text = document.createTextNode(todoinput);

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    li.remove();
    save();
  });

  // liに要素を追加
  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(deleteButton);

  // ulに追加
  document.getElementById("list").appendChild(li);

  // 入力欄を空に
  document.getElementById("todo-input").value = "";

  // 保存
  save();
}

// 保存
function save() {
  const listItems = document.querySelectorAll("#list li");
  const todos = [];

  listItems.forEach(li => {
    const checkbox = li.querySelector("input[type='checkbox']");
    const text = li.textContent.replace("削除", ""); // 削除ボタンの文字を除く
    todos.push({ text: text.trim(), checked: checkbox.checked });
  });

  // localStorage に保存
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 復元
window.onload = function () {
  const saved = localStorage.getItem("todos");
  if (saved) {
    const todos = JSON.parse(saved);
    todos.forEach(todo => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.checked;
      checkbox.addEventListener("change", save);

      const text = document.createTextNode(todo.text);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "削除";
      deleteButton.addEventListener("click", () => {
        li.remove();
        save();
      });

      li.appendChild(checkbox);
      li.appendChild(text);
      li.appendChild(deleteButton);

      document.getElementById("list").appendChild(li);
    });
  }
};
