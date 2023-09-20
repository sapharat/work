const obj = {
    header1: "X",
    header2: "Alice",
    header3: 29.48,
    header4: "H4",
    header5: "H5",
    header6: "H6",
  };
  
  //====================Table1====================//
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  for (let i = 1; i <= 6; i++) {
    //สร้างแถวแรก ส่วนหัว
    var th1 = document.createElement("th");
    th1.textContent = obj["header" + i];
    tr1.appendChild(th1);
    //สร้างแถวที่สอง  ส่วนbody
    var td1 = document.createElement("td");
    td1.innerHTML = "<label for=''>label</label>";
    tr2.appendChild(td1);
  }
  document.getElementById("table_1").appendChild(tr1);
  document.getElementById("table_1").appendChild(tr2);
  //====================Table1====================//
  
  //====================Table2====================//
  var row1 = document.createElement("tr");
  var row2 = document.createElement("tr");
  for (let i = 1; i <= 7; i++) {
    if (i == 1 && i != 7) {
      var th1 = document.createElement("th");
      th1.colSpan = 2;
      th1.textContent = obj["header" + i];
      row1.appendChild(th1);
    } else if (i != 7) {
      var th1 = document.createElement("th");
      th1.textContent = obj["header" + i];
      row1.appendChild(th1);
    }
    if (i == 1) {
      var td1 = document.createElement("td");
      td1.innerHTML = `<input type="checkbox">`;
      row2.appendChild(td1);
    }
    if (i == 2 || i == 4) {
      var td1 = document.createElement("td");
      td1.innerHTML = `<label for="">label</label>`;
      row2.appendChild(td1);
    }
    if (i == 3 || i == 5 || i == 6) {
      var td1 = document.createElement("td");
      td1.innerHTML = `<input type="text" name="" id="">`;
      row2.appendChild(td1);
    }
    if (i == 7) {
      var td1 = document.createElement("td");
      td1.innerHTML = `<button id="myButton">button</button>`;
      row2.appendChild(td1);
    }
  }
  document.getElementById("table_2").appendChild(row1);
  document.getElementById("table_2").appendChild(row2);
  //====================Table2====================//
  
  function myFunction() {
    alert(obj.header6);
  }
  document.getElementById("myButton").addEventListener("click", myFunction);
  