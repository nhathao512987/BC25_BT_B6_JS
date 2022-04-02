/* BT TÍnh số nguyên dương nhỏ nhất */
function exercise_1()
{
  
var S = 0 ;
var n = 0 ;

while ( S < 10000)
{
  n++;
  S = S + n;
}

document.getElementById("noti").innerHTML = 'Số Nguyên Dương Nhỏ Nhất Là : ' + n;
}

// Run exercise
exercise_1();


/* BT Nhập Hai số x,n tính tổng S */
function tinhTongMuNumber(x, n)
{
  var total = 0, i = 1;
  for ( i = 1; i <= n; i++) {
    // Dòng Lệnh Xử Lý Vòng Lặp
    total += Math.pow(x,i);
  }

  return total;
}


document.getElementById("tinhTong2").onclick = function () {
  var NumX = document.getElementById("txtNumX").value * 1;
  var NumN = document.getElementById("txtNumN").value * 1;

  document.getElementById("noti2").innerHTML = tinhTongMuNumber(NumX, NumN);
}


/* BT nhập n, Tính giai thừa */
function tinhGiaiThua (n)
{
  var total = 1, i=1;
  for ( i=1; i  <=n; i++) {
    // Dòng Lệnh Xử Lý Vòng Lặp
    total = total*i;
  }

  return total;
}

document.getElementById("tinhGiaiThua3").onclick = function () {
  var NumN = document.getElementById("txtNumN3").value * 1;
  
  document.getElementById("noti3").innerHTML = tinhGiaiThua(NumN);
}


/* BT phân loại chẵn lẻ, xanh đỏ 10 thẻ div */
function createDiv (x)
{
  var result = "", i = 1;
  while ( i <= x )
  { 
    // Div chẵn
    even = "<div class=\"even\" style=\"background : red; color : white\">Div chẵn "+i+"</div>"
    // Div lẻ
    odd =  "<div class=\"odd\" style=\"background : blue; color : white\">Div lẻ "+i+"</div>"
    
    if ( i%2 ==! 0 ) {
      result += odd;
    } else {
      result += even;
    }
    i++;
  }

  return result;
}

document.getElementById("createDiv4").onclick = function () {
  document.getElementById("noti4").innerHTML = createDiv(10);
}