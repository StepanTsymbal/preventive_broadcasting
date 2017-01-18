var params = {
    lines: [
        {
            background: '#aaa',
            updateTime: 1000,
            elements: [
              {
                  background: '#cde',
                  width: 50
              },
              {
                  background: '#ecd',
                  width: 50
              }
          ]
        },
        {
            background: '#fff',
            updateTime: 2000,
            elements: [
              {
                  background: '#cff',
                  width: 25
              },
              {
                  background: '#faa',
                  width: 25
              },
              {
                  background: '#00c',
                  width: 25
              },
              {
                  background: '#c00',
                  width: 25
              }
            ]
        },
        {
            background: '#aaa',
            updateTime: 3000,
            elements: [
              {
                  background: '#cde',
                  width: 33
              },
              {
                  background: '#ecd',
                  width: 34
              },
              {
                  background: '#fac',
                  width: 33
              }
            ]
        },
		        {
            background: '#fff',
            updateTime: 2000,
            elements: [
              {
                  background: '#cff',
                  width: 25
              },
              {
                  background: '#faa',
                  width: 25
              },
              {
                  background: '#00c',
                  width: 25
              },
              {
                  background: '#c00',
                  width: 25
              }
            ]
        },
		        {
            background: '#aaa',
            updateTime: 3000,
            elements: [
              {
                  background: '#cde',
                  width: 33
              },
              {
                  background: '#ecd',
                  width: 34
              },
              {
                  background: '#fac',
                  width: 33
              }
            ]
        },
		        {
            background: '#fff',
            updateTime: 2000,
            elements: [
              {
                  background: '#cff',
                  width: 25
              },
              {
                  background: '#faa',
                  width: 25
              },
              {
                  background: '#00c',
                  width: 25
              },
              {
                  background: '#c00',
                  width: 25
              }
            ]
        }
    ]
};

var Line = function (obj){
    this.background = obj.background;
    this.updateTime = obj.updateTime;
    this.elements = obj.elements;
};

// initial adding of all the divs 
function initialFunc() {
  var dTable = document.createElement('div');
  var dBody = document.createElement('div');

  dTable.classList.add("divTable");
  document.body.appendChild(dTable);
  dBody.classList.add("divTableBody");
  dTable.appendChild(dBody);
  for (var i = 0; i < params.lines.length; i++) {
    var newLine = new Line(params.lines[i]);
    var dRow = document.createElement('div');

    dRow.classList.add("divTableRow");
    dBody.appendChild(dRow);
    for (var j = 0; j < newLine.elements.length; j++) {
      var dCell = document.createElement('div');
      dCell.style.width = newLine.elements[j].width + "%";
      dCell.style.height = 100 / params.lines.length + "vh";
      dCell.style.background = newLine.elements[j].background;
      
      dCell.classList.add("div" + i);
      dCell.classList.add("divTableCell");
      dRow.appendChild(dCell);
    }
  }
};

// paints a cell with a random color
function rainbowLine(lineCells) {
    for (var i = 0; i < params.lines.length; i++) {
      for (var j = 0; j < lineCells.length; j++) {
        lineCells[j].style.backgroundColor = randomColor();
      }
    }
};

function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 3; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

document.addEventListener("DOMContentLoaded", function(event) { 
  initialFunc();
  for (var i = 0; i < params.lines.length; i++) {
    setInterval(rainbowLine, params.lines[i].updateTime, document.getElementsByClassName("div" + i));
  }
});


